export type ProjectStatus = 'queued' | 'running' | 'success' | 'failed';

export interface AIStage {
  id: string;
  name: string;
  status: ProjectStatus;
  logs: string[];
  startedAt?: number;
  completedAt?: number;
  error?: string;
}

export interface Project {
  id: string;
  userId: string;
  prompt: string;
  appName: string;
  status: ProjectStatus;
  currentStage: string;
  stages: AIStage[];
  artifactUrl?: string;
  createdAt: number;
  updatedAt: number;
  creditsConsumed: number;
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName?: string;
  credits: number;
  role: 'user' | 'admin';
  createdAt: number;
}
