"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/providers/auth-provider";
import { createProject } from "@/actions/projects";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Sparkles, ArrowRight, Loader2 } from "lucide-react";

export default function NewProject() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt || !user) return;

    setLoading(true);
    const result = await createProject(prompt, user.uid);
    setLoading(false);

    if (result.success) {
      router.push(`/projects/${result.projectId}`);
    } else {
      alert(result.error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 pt-20">
      <Card className="bg-slate-900/50 backdrop-blur-md border-slate-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Sparkles className="text-blue-500" />
            Create New Flutter App
          </CardTitle>
          <CardDescription>
            Describe your app idea in detail. The more specific you are, the better the result.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <Textarea
              placeholder="e.g. Build a fitness tracking app with user profiles, workout logging, and progress charts. Use a dark theme with blue accents."
              className="min-h-[200px] bg-slate-950/50 border-slate-700 focus:border-blue-500"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              disabled={loading}
            />
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <p className="text-sm text-slate-500">
              Estimated credits: 10
            </p>
            <Button type="submit" disabled={loading || !prompt}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Starting AI...
                </>
              ) : (
                <>
                  Generate App <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
