"use client"

import { motion } from "framer-motion"
import { Lightbulb, Zap, Cog, CheckCircle, BarChart3, ArrowRight } from "lucide-react"

interface ProcessStep {
  icon: typeof Lightbulb
  title: string
  description: string
  number: string
  gradient: string
  glowColor: string
}

const steps: ProcessStep[] = [
  {
    icon: Lightbulb,
    title: "Discovery & Strategy",
    description: "Deep dive into your vision, goals, and requirements. Planning architecture and tech stack.",
    number: "01",
    gradient: "from-yellow-500 via-orange-500 to-red-500",
    glowColor: "rgba(251, 146, 60, 0.4)",
  },
  {
    icon: Zap,
    title: "Rapid Development",
    description: "Agile development sprints with weekly demos, updates, and continuous integration.",
    number: "02",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    glowColor: "rgba(6, 182, 212, 0.4)",
  },
  {
    icon: Cog,
    title: "Testing & Optimization",
    description: "Comprehensive testing, performance optimization, and security hardening of the codebase.",
    number: "03",
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    glowColor: "rgba(168, 85, 247, 0.4)",
  },
  {
    icon: CheckCircle,
    title: "Deployment & Launch",
    description: "Seamless deployment to production with CI/CD pipelines and monitoring setup.",
    number: "04",
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    glowColor: "rgba(34, 197, 94, 0.4)",
  },
  {
    icon: BarChart3,
    title: "Analytics & Growth",
    description: "Post-launch support, analytics integration, and continuous improvement strategies.",
    number: "05",
    gradient: "from-blue-500 via-purple-500 to-pink-500",
    glowColor: "rgba(59, 130, 246, 0.4)",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export function ProcessSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 1,
          }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-cyan-500/10 to-transparent rounded-full blur-3xl"
        />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-primary font-mono text-sm mb-2 tracking-wider uppercase"
          >
            PROCESS
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent neon-text">
              How I Work
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A proven methodology combining agile practices with cutting-edge technology to deliver exceptional results
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
                whileHover="hover"
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                    className="absolute left-[27px] top-24 w-0.5 h-12 origin-top"
                    style={{
                      background: `linear-gradient(to bottom, ${steps[index].glowColor}, transparent)`,
                    }}
                  />
                )}

                <div className="flex gap-6 md:gap-8">
                  {/* Number Circle with Icon */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="relative flex-shrink-0"
                  >
                    {/* Outer glow ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute -inset-2 rounded-full"
                      style={{
                        background: `conic-gradient(from 0deg, transparent, ${steps[index].glowColor}, transparent)`,
                        opacity: 0.5,
                      }}
                    />

                    {/* Inner circle */}
                    <div
                      className={`relative w-14 h-14 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-bold text-lg border-2 border-white/20 shadow-2xl`}
                      style={{
                        boxShadow: `0 0 30px ${steps[index].glowColor}, inset 0 0 20px rgba(255,255,255,0.1)`,
                      }}
                    >
                      <span className="relative z-10">{step.number}</span>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: `radial-gradient(circle, ${steps[index].glowColor}, transparent)`,
                          opacity: 0.3,
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    className="flex-1 relative p-8 rounded-3xl overflow-hidden group/card"
                    whileHover={{
                      y: -5,
                      transition: { duration: 0.3 },
                    }}
                  >
                    {/* Background glass */}
                    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-3xl" />

                    {/* Animated glow on hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 rounded-3xl -z-10"
                      style={{
                        background: `radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${steps[index].glowColor}, transparent 40%)`,
                      }}
                    />

                    {/* Top border accent line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.15 }}
                      className="absolute top-0 left-0 right-0 h-0.5 origin-left"
                      style={{
                        background: `linear-gradient(90deg, ${steps[index].glowColor}, transparent)`,
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10 space-y-4">
                      {/* Icon + Title */}
                      <div className="flex items-start gap-4">
                        <motion.div
                          whileHover={{ rotate: 20, scale: 1.1 }}
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
                          style={{
                            boxShadow: `0 0 20px ${steps[index].glowColor}`,
                          }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 pt-1">
                          {step.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 text-sm leading-relaxed ml-16">
                        {step.description}
                      </p>

                      {/* Arrow indicator */}
                      {index < steps.length - 1 && (
                        <motion.div
                          initial={{ x: 0 }}
                          whileHover={{ x: 8 }}
                          className="absolute right-6 bottom-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 h-1 bg-gradient-to-r from-cyan-500/0 via-purple-500/50 to-cyan-500/0 rounded-full origin-center"
        />
      </div>
    </section>
  )
}
