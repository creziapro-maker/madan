"use server";

import { adminDb } from "@/src/lib/firebase/admin";
import { Project, AIStage } from "@/src/lib/types";
import { auth } from "firebase-admin";
import { cookies } from "next/headers";

const INITIAL_STAGES: AIStage[] = [
  { id: "requirements", name: "Requirements Analysis", status: "queued", logs: [] },
  { id: "architecture", name: "Architecture Planning", status: "queued", logs: [] },
  { id: "ui", name: "UI Screen Generation", status: "queued", logs: [] },
  { id: "backend", name: "Backend & Rules", status: "queued", logs: [] },
  { id: "integration", name: "Integration & Validation", status: "queued", logs: [] },
  { id: "packaging", name: "Packaging", status: "queued", logs: [] },
];

export async function createProject(prompt: string, userId: string) {
  try {
    const projectRef = adminDb.collection("projects").doc();
    const project: Project = {
      id: projectRef.id,
      userId,
      prompt,
      appName: "New Flutter App", // Will be updated by AI
      status: "queued",
      currentStage: "requirements",
      stages: INITIAL_STAGES,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      creditsConsumed: 0,
    };

    await projectRef.set(project);
    
    // Start the orchestration process (background)
    // In a real production app, this should be a queue trigger (e.g. Cloud Tasks or Pub/Sub)
    // For now, we'll simulate the start
    startOrchestration(projectRef.id);

    return { success: true, projectId: projectRef.id };
  } catch (error) {
    console.error("Error creating project:", error);
    return { success: false, error: "Failed to create project" };
  }
}

// Internal function to trigger AI orchestration
async function startOrchestration(projectId: string) {
  // This will be called via a separate route or background job
  // For this implementation, we might use an API route that we call internally
  // to avoid blocking the user request
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  fetch(`${baseUrl}/api/orchestrate`, {
    method: "POST",
    body: JSON.stringify({ projectId }),
    headers: { "Content-Type": "application/json" },
  }).catch(console.error);
}
