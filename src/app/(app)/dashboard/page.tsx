"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/providers/auth-provider";
import { db } from "@/lib/firebase/config";
import { collection, query, where, onSnapshot, orderBy } from "firebase/firestore";
import { Project } from "@/lib/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus, Rocket, Clock, CheckCircle, XCircle } from "lucide-react";

export default function Dashboard() {
  const { user } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, "projects"),
      where("userId", "==", user.uid),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const projectsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Project[];
      setProjects(projectsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  if (loading) return <div className="p-8">Loading projects...</div>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Projects</h1>
        <Link href="/new-project">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> New Project
          </Button>
        </Link>
      </div>

      {projects.length === 0 ? (
        <div className="text-center py-20 border-2 border-dashed rounded-lg">
          <Rocket className="mx-auto h-12 w-12 text-slate-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">No projects yet</h2>
          <p className="text-slate-400 mb-6">Create your first AI-generated Flutter app.</p>
          <Link href="/new-project">
            <Button variant="outline">Get Started</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <div className="p-6 border rounded-xl hover:border-blue-500 transition-colors bg-slate-900/50 backdrop-blur-sm">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold truncate max-w-[200px]">
                    {project.appName || "Untitled Project"}
                  </h3>
                  <StatusBadge status={project.status} />
                </div>
                <p className="text-sm text-slate-400 line-clamp-2 mb-4">
                  {project.prompt}
                </p>
                <div className="flex items-center text-xs text-slate-500">
                  <Clock className="mr-1 h-3 w-3" />
                  {new Date(project.createdAt).toLocaleDateString()}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  switch (status) {
    case "success":
      return <div className="flex items-center text-green-500 text-xs"><CheckCircle className="mr-1 h-3 w-3" /> Completed</div>;
    case "failed":
      return <div className="flex items-center text-red-500 text-xs"><XCircle className="mr-1 h-3 w-3" /> Failed</div>;
    case "running":
      return <div className="flex items-center text-blue-500 text-xs animate-pulse"><Rocket className="mr-1 h-3 w-3" /> Generating...</div>;
    default:
      return <div className="flex items-center text-slate-400 text-xs"><Clock className="mr-1 h-3 w-3" /> Queued</div>;
  }
}
