"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { db } from "@/lib/firebase/config";
import { doc, onSnapshot } from "firebase/firestore";
import { Project, AIStage } from "@/lib/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Loader2, CheckCircle2, Circle, XCircle, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const unsubscribe = onSnapshot(doc(db, "projects", id as string), (doc) => {
      if (doc.exists()) {
        setProject({ id: doc.id, ...doc.data() } as Project);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [id]);

  if (loading) return <div className="p-8">Loading project details...</div>;
  if (!project) return <div className="p-8">Project not found.</div>;

  const completedStages = project.stages.filter(s => s.status === "success").length;
  const progressPercent = (completedStages / project.stages.length) * 100;

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold mb-2">{project.appName || "Generating App..."}</h1>
          <p className="text-slate-400 max-w-2xl">{project.prompt}</p>
        </div>
        <div className="text-right">
          <Badge variant={project.status === "success" ? "default" : "outline"} className="mb-2">
            {project.status.toUpperCase()}
          </Badge>
          <div className="text-xs text-slate-500">
            Created on {new Date(project.createdAt).toLocaleDateString()}
          </div>
        </div>
      </div>

      <Card className="bg-slate-900/50 border-slate-800">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg">Generation Progress</CardTitle>
            <span className="text-sm font-mono">{Math.round(progressPercent)}%</span>
          </div>
          <Progress value={progressPercent} className="h-2" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {project.stages.map((stage) => (
              <div key={stage.id} className="flex items-center gap-4">
                <StageIcon status={stage.status} />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="font-medium">{stage.name}</span>
                    <span className="text-xs text-slate-500">
                      {stage.status === "running" && "In Progress..."}
                    </span>
                  </div>
                  {stage.logs.length > 0 && (
                    <div className="mt-2 p-3 bg-black/40 rounded text-xs font-mono text-slate-400 max-h-32 overflow-y-auto">
                      {stage.logs.map((log, i) => (
                        <div key={i} className="mb-1">{log}</div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {project.status === "success" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-slate-900/50 border-slate-800">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Download className="h-5 w-5 text-blue-500" />
                Artifacts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full" asChild>
                <a href={project.artifactUrl} download>
                  Download Project ZIP
                </a>
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/50 border-slate-800">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <FileText className="h-5 w-5 text-green-500" />
                Resources
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                View Generated Architecture
              </Button>
              <Button variant="outline" className="w-full justify-start">
                View Firebase Setup Guide
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

function StageIcon({ status }: { status: AIStage["status"] }) {
  switch (status) {
    case "success":
      return <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />;
    case "failed":
      return <XCircle className="h-5 w-5 text-red-500 shrink-0" />;
    case "running":
      return <Loader2 className="h-5 w-5 text-blue-500 animate-spin shrink-0" />;
    default:
      return <Circle className="h-5 w-5 text-slate-600 shrink-0" />;
  }
}
