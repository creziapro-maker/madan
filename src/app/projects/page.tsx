import type { Metadata } from "next"
import { ProjectsPageContent } from "@/components/projects-page-content"

export const metadata: Metadata = {
  title: "Portfolio Projects | Flutter Apps, AI Tools & Mobile Apps | Madan Rajendra",
  description:
    "View Madan Rajendra's portfolio of 4+ production apps including Nuvrexio (AI code generator), MonoMode (e-commerce), DailyKart (grocery delivery), and PlayNexa (sports app). Mobile, web, and AI projects.",
  keywords: [
    "portfolio projects",
    "Flutter apps",
    "mobile app portfolio",
    "AI projects",
    "Nuvrexio",
    "MonoMode",
    "app development portfolio",
    "production apps",
  ],
}

export default function ProjectsPage() {
  return <ProjectsPageContent />
}
