import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { ParticleBackground } from "@/components/particle-background"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Madan Rajendra | Hire Flutter Developer & AI Engineer",
  description:
    "Get in touch with Madan Rajendra for project inquiries, freelance work, or collaboration. Available for full-time roles, projects, and consulting.",
}

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <ParticleBackground />
      <Navigation />

      {/* Page Header */}
      <section className="relative pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-primary font-mono text-sm mb-4 tracking-wider">GET IN TOUCH</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                Contact
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {"Have a project in mind or want to collaborate? I'd love to hear from you."}
            </p>
          </div>
        </div>
      </section>

      <ContactForm />

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
