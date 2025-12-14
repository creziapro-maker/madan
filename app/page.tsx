import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { ParticleBackground } from "@/components/particle-background"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProjects } from "@/components/featured-projects"
import { SkillsSection } from "@/components/skills-section"
import { StatsSection } from "@/components/stats-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Madan Rajendra | Flutter Developer & AI Engineer | Hire Premium Tech Talent",
  description:
    "Hire Madan Rajendra - Top Flutter developer, AI engineer, and software architect. Available for freelance projects, full-time roles. Expert in mobile apps, Firebase, Next.js, AI/ML. Founder of Nuvrexio, NovaFuze LLP, MonoMode.",
  openGraph: {
    title: "Madan Rajendra | Hire Top Flutter Developer & AI Engineer",
    description: "Premium tech talent available for hire. Flutter expert, AI engineer, and software architect.",
  },
}

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background">
      <ParticleBackground />
      <Navigation />

      <HeroSection />
      <StatsSection />
      <FeaturedProjects />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <SkillsSection />

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="glass rounded-3xl p-12 md:p-16 border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                {"Let's Build Something Amazing"}
              </span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              {
                "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
              }
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.4)]"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Madan Rajendra. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/madan-r-a55867282"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Madancse013"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
