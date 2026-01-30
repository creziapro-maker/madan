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
            <div className="inline-flex flex-col items-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Crafting seamless mobile experiences & exploring the future of AI</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-[10px] uppercase tracking-widest font-bold text-green-500">Shipped: Nuverio.online</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 animate-pulse">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-[10px] uppercase tracking-widest font-bold text-primary">Working on: ApplyPilotPro.com</span>
                </div>
              </div>
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
              Founder of Nuvrexio | Crafting NovaFuze & MonoMode
            </p>
            <p className="text-base text-muted-foreground/70 font-mono" itemProp="knowsAbout">
              Flutter Developer • AI Experimenter • Solution Architect • Problem Solver
            </p>
            <meta
              itemProp="description"
              content="Madan Rajendra is a Flutter developer and AI engineer focused on building intuitive mobile apps and innovative developer tools."
            />
            <meta itemProp="url" content="https://madanrajendra.com" />
          </div>

          {/* CTAs */}
          <div
            className={`mt-12 flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Link href="/projects" aria-label="View my projects and apps">
              <MagneticButton className="min-w-[200px]">
                <span className="flex items-center gap-2">
                  See My Work
                  <ArrowRight className="w-4 h-4" />
                </span>
              </MagneticButton>
            </Link>
            <Link href="/contact" aria-label="Get in touch for collaboration">
              <MagneticButton className="min-w-[200px] bg-transparent border-muted-foreground/30 hover:border-primary/60">
                Let's Talk
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
