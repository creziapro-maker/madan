import { Brain, Users, Wand2, Zap } from "lucide-react"

export interface UpcomingProject {
  id: string
  title: string
  tagline: string
  status: "Idea" | "MVP" | "In Development" | "Beta" | "Launching Soon"
  description: string
  features: string[]
  image: string
  icon: any
  gradient: string
  glowColor: string
  blogRelated?: string[]
  launchDate?: string
  category: string
}

export const upcomingProjectsData: UpcomingProject[] = [
  {
    id: "nuvrexio",
    title: "Nuvrexio",
    tagline: "AI Flutter Code Generator",
    status: "MVP",
    category: "AI Development Tool",
    description:
      "Revolutionary AI-powered platform that transforms your ideas into production-ready Flutter applications. Simply describe your app, and watch as Nuvrexio generates clean, scalable code in real-time.",
    features: [
      "Natural language to Flutter code conversion",
      "Component library integration",
      "Real-time preview & testing",
      "Export to any IDE",
      "Firebase backend generation",
      "Push notifications setup",
    ],
    icon: Brain,
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    glowColor: "rgba(168, 85, 247, 0.4)",
    image: "/ai-code-generator-futuristic-dark.jpg",
    blogRelated: ["llm-apps-flutter-guide"],
    launchDate: "Q1 2026",
  },
  {
    id: "playnexa",
    title: "PlayNexa",
    tagline: "AI-Powered Sports Partner Finder",
    status: "MVP",
    category: "Mobile Application",
    description:
      "Connect with sports enthusiasts in your area instantly. Find partners for any sport, organize games, and build your athletic community with AI-powered matching algorithms.",
    features: [
      "Smart AI partner matching",
      "Location-based discovery",
      "Game scheduling & booking",
      "Skill level matching",
      "Community building tools",
      "Real-time notifications",
    ],
    icon: Users,
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    glowColor: "rgba(6, 182, 212, 0.4)",
    image: "/sports-partner-finder-app-dark-modern.jpg",
    blogRelated: ["ai-integration-nextjs-2025", "llm-apps-flutter-guide"],
    launchDate: "Q2 2026",
  },
  {
    id: "crezaipro",
    title: "CrezAIPro",
    tagline: "AI Resume → Portfolio Generator",
    status: "In Development",
    category: "Web Tool",
    description:
      "Transform your resume into a stunning portfolio website in seconds. Our AI analyzes your experience and creates a personalized, professional web presence that stands out to employers.",
    features: [
      "One-click portfolio generation",
      "Custom design templates",
      "SEO optimization built-in",
      "Domain & hosting included",
      "AI-powered content suggestions",
      "Analytics dashboard",
    ],
    icon: Wand2,
    gradient: "from-rose-500 via-orange-500 to-amber-500",
    glowColor: "rgba(244, 63, 94, 0.4)",
    image: "/ai-resume-portfolio-generator-dark-futuristic.jpg",
    blogRelated: ["ai-integration-nextjs-2025"],
    launchDate: "Q3 2026",
  },
  {
    id: "devai-assistant",
    title: "DevAI Assistant",
    tagline: "Your AI-Powered Developer Companion",
    status: "In Development",
    category: "Developer Tool",
    description:
      "An intelligent IDE extension powered by advanced LLMs. Get real-time code suggestions, automatic bug detection, documentation generation, and architectural guidance.",
    features: [
      "Multi-language support",
      "Real-time code analysis",
      "Intelligent suggestions",
      "Documentation auto-generation",
      "Architecture recommendations",
      "Team collaboration tools",
    ],
    icon: Zap,
    gradient: "from-yellow-500 via-orange-500 to-red-500",
    glowColor: "rgba(234, 179, 8, 0.4)",
    image: "https://images.pexels.com/photos/7974/pexels-photo-7974.jpeg?w=800&h=600&fit=crop",
    blogRelated: ["ai-integration-nextjs-2025", "prompt-engineering-101"],
    launchDate: "Q1 2026",
  },
]

export function getProjectsByCategory(category: string): UpcomingProject[] {
  return upcomingProjectsData.filter((project) => project.category === category)
}

export function getProjectsByBlog(blogSlug: string): UpcomingProject[] {
  return upcomingProjectsData.filter((project) => project.blogRelated?.includes(blogSlug))
}

export function getProjectById(id: string): UpcomingProject | undefined {
  return upcomingProjectsData.find((project) => project.id === id)
}
