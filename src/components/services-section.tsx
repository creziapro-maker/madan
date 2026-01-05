"use client"

import { motion } from "framer-motion"
import { Code2, Smartphone, Zap, Brain, Cloud, Layers } from "lucide-react"

interface Service {
  icon: typeof Code2
  title: string
  description: string
  gradient: string
  glowColor: string
}

const services: Service[] = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Build stunning cross-platform Flutter applications with seamless UI/UX and production-grade performance.",
    gradient: "from-cyan-500 to-blue-500",
    glowColor: "rgba(6, 182, 212, 0.3)",
  },
  {
    icon: Brain,
    title: "AI/ML Integration",
    description: "Integrate cutting-edge AI models, LLMs, and machine learning pipelines into your applications.",
    gradient: "from-purple-500 to-pink-500",
    glowColor: "rgba(168, 85, 247, 0.3)",
  },
  {
    icon: Cloud,
    title: "Backend Architecture",
    description: "Design scalable, secure Firebase backends and cloud infrastructure for enterprise applications.",
    gradient: "from-green-500 to-emerald-500",
    glowColor: "rgba(34, 197, 94, 0.3)",
  },
  {
    icon: Zap,
    title: "Full-Stack Engineering",
    description: "Complete end-to-end solutions combining Flutter frontends with Next.js backends and modern databases.",
    gradient: "from-orange-500 to-red-500",
    glowColor: "rgba(249, 115, 22, 0.3)",
  },
  {
    icon: Layers,
    title: "Startup MVPs",
    description: "Rapidly prototype and launch your startup idea with production-ready code and scalable architecture.",
    gradient: "from-indigo-500 to-purple-500",
    glowColor: "rgba(99, 102, 241, 0.3)",
  },
  {
    icon: Code2,
    title: "Code Generation Tools",
    description: "Leverage AI-powered code generation to accelerate development and reduce time-to-market.",
    gradient: "from-rose-500 to-pink-500",
    glowColor: "rgba(244, 63, 94, 0.3)",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function ServicesSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-wider uppercase">EXPERTISE</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Services & Solutions
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive technology solutions tailored to transform your vision into reality
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
                onMouseEnter={(e) => {
                  const el = e.currentTarget.querySelector(".glow-bg") as HTMLElement
                  if (el) el.style.opacity = "1"
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget.querySelector(".glow-bg") as HTMLElement
                  if (el) el.style.opacity = "0"
                }}
              >
                <div className="relative p-8 rounded-2xl glass border border-transparent hover:border-primary/30 transition-all duration-300 h-full">
                  <div
                    className="glow-bg absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 -z-10 blur-xl"
                    style={{
                      background: `radial-gradient(800px circle at 50% 50%, ${service.glowColor}, transparent 40%)`,
                    }}
                  />

                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${service.gradient} mb-6`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                  <div className="absolute bottom-6 right-6 w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary text-sm font-mono group-hover:scale-110 transition-transform">
                    ↗
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
