import type { Metadata } from "next"
import { ParticleBackground } from "@/components/particle-background"
import { AboutContent } from "@/components/about-content"

export const metadata: Metadata = {
  title: "About Madan Rajendra | Flutter Developer, AI Engineer & Tech Founder",
  description:
    "Learn about Madan Rajendra - a software engineer, application developer, and AI specialist. Founder of Nuvrexio, NovaFuze LLP, and MonoMode. Expert in Flutter, Firebase, Next.js, and AI/ML integration with 2+ years of hands-on experience building production apps.",
  keywords: [
    "About Madan Rajendra",
    "software engineer",
    "application developer",
    "Flutter expert",
    "AI engineer",
    "founder",
    "tech entrepreneur",
    "full stack developer",
  ],
}

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-slate-950">
      <ParticleBackground />
      <AboutContent />

      <footer className="relative py-12 border-t border-cyan-400/10 bg-gradient-to-b from-slate-950 to-slate-950/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">© 2025 Madan Rajendra. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/madan-r-a55867282"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Madancse013"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
