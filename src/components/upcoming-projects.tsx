"use client"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Cpu, Users, Sparkles, ArrowRight, Zap, Brain, Wand2 } from "lucide-react"

const upcomingProjects = [
  {
    id: "nuvrexio",
    title: "Nuvrexio",
    tagline: "AI Flutter Code Generator",
    status: "MVP",
    description:
      "Revolutionary AI-powered platform that transforms your ideas into production-ready Flutter applications. Simply describe your app, and watch as Nuvrexio generates clean, scalable code in real-time.",
    features: [
      "Natural language to Flutter code",
      "Component library integration",
      "Real-time preview & testing",
      "Export to any IDE",
    ],
    icon: Brain,
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    glowColor: "rgba(168, 85, 247, 0.4)",
    image: "/ai-code-generator-futuristic-dark.jpg",
  },
  {
    id: "playnexa",
    title: "PlayNexa",
    tagline: "Sports Partner Finder",
    status: "MVP",
    description:
      "Connect with sports enthusiasts in your area instantly. Find partners for any sport, organize games, and build your athletic community with AI-powered matching.",
    features: [
      "Smart partner matching",
      "Location-based discovery",
      "Game scheduling & booking",
      "Skill level matching",
    ],
    icon: Users,
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    glowColor: "rgba(6, 182, 212, 0.4)",
    image: "/sports-partner-finder-app-dark-modern.jpg",
  },
  {
    id: "crezaipro",
    title: "CrezAIPro",
    tagline: "AI Resume → Portfolio Generator",
    status: "In Development",
    description:
      "Transform your resume into a stunning portfolio website in seconds. Our AI analyzes your experience and creates a personalized, professional web presence that stands out.",
    features: [
      "One-click portfolio generation",
      "Custom design templates",
      "SEO optimization built-in",
      "Domain & hosting included",
    ],
    icon: Wand2,
    gradient: "from-rose-500 via-orange-500 to-amber-500",
    glowColor: "rgba(244, 63, 94, 0.4)",
    image: "/ai-resume-portfolio-generator-dark-futuristic.jpg",
  },
]

export function UpcomingProjects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [visibleProjects, setVisibleProjects] = useState<Set<string>>(new Set())
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-id")
            if (id) {
              setVisibleProjects((prev) => new Set([...prev, id]))
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    const items = containerRef.current?.querySelectorAll("[data-id]")
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={containerRef} className="relative py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Lab Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="space-y-24">
          {upcomingProjects.map((project, index) => {
            const Icon = project.icon
            const isVisible = visibleProjects.has(project.id)
            const isHovered = hoveredProject === project.id

            return (
              <div
                key={project.id}
                data-id={project.id}
                className={cn(
                  "relative transition-all duration-1000",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
                )}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div
                  className={cn(
                    "group relative rounded-3xl overflow-hidden",
                    "glass border border-transparent hover:border-accent/30",
                    "transition-all duration-500",
                    isHovered && "scale-[1.01]",
                  )}
                >
                  {/* Background Glow */}
                  <div
                    className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"
                    style={{
                      background: `radial-gradient(800px circle at ${isHovered ? "50% 50%" : "0% 0%"}, ${project.glowColor}, transparent 40%)`,
                    }}
                  />

                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Content Side */}
                    <div className={cn("p-10 lg:p-14", index % 2 === 1 && "lg:order-2")}>
                      {/* Status Badge */}
                      <div className="flex items-center gap-3 mb-6">
                        <div
                          className={cn(
                            "w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br",
                            project.gradient,
                          )}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <span
                          className={cn(
                            "px-3 py-1 text-xs font-mono rounded-full border",
                            project.status === "MVP"
                              ? "bg-accent/10 text-accent border-accent/20"
                              : "bg-muted text-muted-foreground border-border",
                          )}
                        >
                          {project.status}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="text-3xl md:text-4xl font-bold mb-2">
                        <span className={cn("bg-gradient-to-r bg-clip-text text-transparent", project.gradient)}>
                          {project.title}
                        </span>
                      </h3>
                      <p className="text-lg text-muted-foreground mb-6">{project.tagline}</p>

                      {/* Description */}
                      <p className="text-foreground/80 leading-relaxed mb-8">{project.description}</p>

                      {/* Features */}
                      <div className="space-y-3 mb-8">
                        {project.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div
                              className={cn(
                                "w-6 h-6 rounded-lg flex items-center justify-center bg-gradient-to-br",
                                project.gradient,
                              )}
                            >
                              <Sparkles className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <button
                        className={cn(
                          "inline-flex items-center gap-2 px-6 py-3 rounded-full",
                          "bg-gradient-to-r text-white font-medium",
                          "transition-all duration-300 hover:scale-105",
                          "hover:shadow-lg",
                          project.gradient,
                        )}
                        style={{
                          boxShadow: isHovered ? `0 10px 40px ${project.glowColor}` : "none",
                        }}
                      >
                        Get Early Access
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Image Side */}
                    <div
                      className={cn(
                        "relative aspect-square lg:aspect-auto overflow-hidden",
                        index % 2 === 1 && "lg:order-1",
                      )}
                    >
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent lg:bg-gradient-to-l" />

                      {/* Floating Tech Icons */}
                      <div className="absolute inset-0 pointer-events-none">
                        <div
                          className={cn(
                            "absolute top-10 right-10 w-16 h-16 rounded-2xl glass flex items-center justify-center",
                            "opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0",
                          )}
                        >
                          <Zap className="w-8 h-8 text-accent" />
                        </div>
                        <div
                          className={cn(
                            "absolute bottom-20 left-10 w-12 h-12 rounded-xl glass flex items-center justify-center",
                            "opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 translate-y-4 group-hover:translate-y-0",
                          )}
                        >
                          <Cpu className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Animated Border */}
                  <div
                    className={cn(
                      "absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-500",
                      isHovered ? "opacity-100" : "opacity-0",
                    )}
                    style={{
                      background: `linear-gradient(90deg, transparent, ${project.glowColor}, transparent)`,
                      backgroundSize: "200% 100%",
                      animation: isHovered ? "gradient-shift 3s linear infinite" : "none",
                      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      maskComposite: "exclude",
                      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      padding: "2px",
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <div className="inline-block p-8 rounded-3xl glass border border-accent/20">
            <h3 className="text-2xl font-bold mb-3">
              <span className="bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
                Stay Updated
              </span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Be the first to know when these innovations launch. Join the waitlist for early access.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-full bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
              />
              <button className="px-6 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
