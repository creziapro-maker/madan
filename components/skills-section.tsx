"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const skills = [
  { name: "Flutter & Dart", level: 95, color: "from-cyan-400 to-blue-500", description: "Cross-platform mobile apps" },
  { name: "Firebase Backend", level: 90, color: "from-orange-400 to-red-500", description: "Real-time database, auth" },
  { name: "Next.js & React", level: 85, color: "from-gray-400 to-gray-600", description: "Full stack web apps" },
  { name: "AI/ML & LLM", level: 82, color: "from-purple-400 to-pink-500", description: "GPT, code generation" },
  { name: "System Architecture", level: 80, color: "from-green-400 to-emerald-500", description: "Scalable systems" },
  { name: "UI/UX Design", level: 78, color: "from-pink-400 to-rose-500", description: "User interfaces, Figma" },
  { name: "Cloud & DevOps", level: 75, color: "from-yellow-400 to-orange-500", description: "AWS, GCP, CI/CD" },
  { name: "TypeScript", level: 85, color: "from-blue-400 to-indigo-500", description: "Type-safe JavaScript" },
]

export function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section className="relative py-32" aria-label="Technical skills and programming expertise">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2 tracking-wider">TECHNICAL EXPERTISE</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Programming Skills & Technologies
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expertise in Flutter mobile development, AI/ML integration, cloud architecture, and full stack web
            technologies
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4" role="list" aria-label="Programming skills proficiency">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              role="listitem"
              className={cn(
                "group relative p-6 rounded-2xl glass transition-all duration-500",
                "border border-transparent hover:border-primary/30",
                "cursor-pointer",
              )}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Glow Effect */}
              <div
                className={cn(
                  "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  `bg-gradient-to-br ${skill.color}`,
                )}
                style={{ filter: "blur(40px)", transform: "scale(0.8)" }}
              />

              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-1 text-foreground">{skill.name}</h3>
                <p className="text-xs text-muted-foreground mb-3">{skill.description}</p>

                {/* Progress Bar */}
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className={cn("h-full rounded-full transition-all duration-1000 bg-gradient-to-r", skill.color)}
                    style={{
                      width: hoveredSkill === skill.name ? `${skill.level}%` : "0%",
                    }}
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${skill.name} proficiency`}
                  />
                </div>

                <p className="mt-2 text-sm text-muted-foreground">{skill.level}% Proficiency</p>
              </div>

              {/* Holographic Shine */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
