"use client"

import { useEffect, useState } from "react"
import { MagneticButton } from "./magnetic-button"
import { FloatingObjects } from "./floating-objects"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section - Madan Rajendra Flutter Developer and AI Engineer"
    >
      <FloatingObjects />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <article className="flex flex-col items-center text-center" itemScope itemType="https://schema.org/Person">
          {/* Holographic Badge */}
          <div
            className={`mb-8 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Building AI-Powered Flutter Apps & Developer Tools</span>
            </div>
          </div>

          {/* Main Name */}
          <h1
            className={`transition-all duration-1000 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            itemProp="name"
          >
            <span className="block text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-4">
              <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient">
                MADAN
              </span>
            </span>
            <span className="block text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                RAJENDRA
              </span>
            </span>
          </h1>

          <div
            className={`mt-8 space-y-3 transition-all duration-1000 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-xl md:text-2xl font-medium text-primary neon-text" itemProp="jobTitle">
              Founder of Nuvrexio | Founder of NovaFuze LLP | Founder of MonoMode
            </p>
            <p className="text-base text-muted-foreground/70 font-mono" itemProp="knowsAbout">
              Software Engineer • Application Developer • Full Stack Engineer • AI/ML Systems Architect • Mobile App Specialist
            </p>
            <meta
              itemProp="description"
              content="Madan Rajendra is a leading Flutter developer, AI engineer, and tech entrepreneur specializing in mobile app development, Firebase backend systems, and AI-powered code generation tools."
            />
            <meta itemProp="url" content="https://madanrajendra.com" />
          </div>

          {/* CTAs */}
          <div
            className={`mt-12 flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Link href="/projects" aria-label="View Flutter and mobile app development portfolio">
              <MagneticButton className="min-w-[200px]">
                <span className="flex items-center gap-2">
                  View App Portfolio
                  <ArrowRight className="w-4 h-4" />
                </span>
              </MagneticButton>
            </Link>
            <Link href="/contact" aria-label="Hire Madan Rajendra for Flutter development or AI projects">
              <MagneticButton className="min-w-[200px] bg-transparent border-muted-foreground/30 hover:border-primary/60">
                Hire Me for Your Project
              </MagneticButton>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div
            className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
              <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
              <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
