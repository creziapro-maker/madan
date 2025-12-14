import { Navigation } from "@/components/navigation"
import { ParticleBackground } from "@/components/particle-background"
import { UpcomingProjects } from "@/components/upcoming-projects"

export default function UpcomingPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <ParticleBackground />
      <Navigation />

      {/* Page Header */}
      <section className="relative pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-accent">Future Lab</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
                Upcoming
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Innovations in development. A glimpse into the future of AI-powered tools and applications.
            </p>
          </div>
        </div>
      </section>

      <UpcomingProjects />

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
