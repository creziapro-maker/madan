import { NextRequest, NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase/admin";
import { Project, AIStage } from "@/lib/types";
import { generateWithGemini } from "@/lib/ai/gemini";
import { generateWithGroq } from "@/lib/ai/groq";

export async function POST(req: NextRequest) {
  try {
    const { projectId } = await req.json();
    const projectRef = adminDb.collection("projects").doc(projectId);
    const projectSnap = await projectRef.get();

    if (!projectSnap.exists) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    const project = projectSnap.data() as Project;

    // Orchestration logic - Stage by Stage
    await processStages(projectId);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Orchestration error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

async function processStages(projectId: string) {
  const projectRef = adminDb.collection("projects").doc(projectId);
  
  // 1. Requirements Analysis (Gemini)
  await updateStage(projectId, "requirements", "running", ["Starting requirements analysis..."]);
  const project = (await projectRef.get()).data() as Project;
  
  try {
    const requirements = await generateWithGemini(
      `Analyze these app requirements: ${project.prompt}`,
      "You are a product manager. Extract app name, user roles, core flows, and data models in JSON format."
    );
    // Parse and save requirements (mocking for now)
    await updateStage(projectId, "requirements", "success", ["Requirements analysis completed.", requirements]);
    
    // 2. Architecture Planning
    await updateStage(projectId, "architecture", "running", ["Planning architecture..."]);
    // ... logic for architecture ...
    await updateStage(projectId, "architecture", "success", ["Architecture planned."]);

    // 3. UI Generation (Groq)
    await updateStage(projectId, "ui", "running", ["Generating UI screens..."]);
    // ... logic for UI ...
    await updateStage(projectId, "ui", "success", ["UI screens generated."]);

    // ... continue for other stages ...
    
    await projectRef.update({ status: "success", currentStage: "completed" });
  } catch (error: any) {
    await updateStage(projectId, project.currentStage, "failed", [`Error: ${error.message}`]);
    await projectRef.update({ status: "failed" });
  }
}

async function updateStage(projectId: string, stageId: string, status: string, newLogs: string[]) {
  const projectRef = adminDb.collection("projects").doc(projectId);
  const project = (await projectRef.get()).data() as Project;
  
  const updatedStages = project.stages.map(s => {
    if (s.id === stageId) {
      return { 
        ...s, 
        status, 
        logs: [...s.logs, ...newLogs],
        startedAt: status === "running" ? Date.now() : s.startedAt,
        completedAt: (status === "success" || status === "failed") ? Date.now() : s.completedAt,
      };
    }
    return s;
  });

  await projectRef.update({
    stages: updatedStages,
    currentStage: stageId,
    updatedAt: Date.now(),
  });
}
