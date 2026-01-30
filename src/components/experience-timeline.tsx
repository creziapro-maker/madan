"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import {
  Briefcase,
  Rocket,
  Code,
  Database,
  Cloud,
  Cpu,
  Users,
  Layers,
  Award,
  Zap,
  Globe,
  CheckCircle,
} from "lucide-react"

const experiences = [
  {
    id: "nuvrexio",
    company: "Nuvrexio",
    role: "Founder & AI Product Engineer",
    period: "Dec 2025 – Present",
    location: "Bengaluru, India",
    description:
      "Building AI-powered platforms and next-generation consumer applications. Architecting and developing entire products with modern engineering practices and intelligent automation.",
    products: [
      { name: "DailyKart", description: "Grocery delivery ecosystem (User app, Admin, backend workflows)" },
      { name: "MonoMode", description: "Fashion e-commerce platform with mobile app + storefront" },
      { name: "Nuvrexio.ai", description: "Upcoming AI development & automation platform" },
      { name: "CrezAIPro.com", description: "AI resume-to-portfolio website generator" },
      { name: "PlayNexa", description: "Sports partner-finding and activity discovery app (India + Germany)" },
    ],
    highlights: [
      { icon: Cpu, text: "Full-stack product architecture" },
      { icon: Code, text: "Flutter & Next.js development" },
      { icon: Database, text: "LLM pipelines & AI integration" },
      { icon: Rocket, text: "Product strategy & execution" },
    ],
    achievements: [
      "Architected and developed entire products using Flutter, Firebase, Next.js, Firestore, Cloud Functions, and LLM pipelines",
      "Designed clean, scalable UI/UX systems with Material3, animations, and responsive layout engines",
      "Built multi-environment CI/CD pipelines, release workflows (AAB/IPA), and integrated analytics, crash monitoring, and payment gateways",
      "Created internal AI tools and automation workflows to accelerate development",
      "Led product strategy, user research, roadmap creation, and end-to-end execution from idea → MVP → launch",
    ],
    skills: ["Flutter", "Dart", "Next.js", "Firebase", "Firestore", "Cloud Functions", "Python", "LLMs", "Gemini", "Llama", "React", "TypeScript", "Material3", "CI/CD"],
    color: "from-cyan-400 to-purple-500",
    glowColor: "cyan",
  },
  {
    id: "novafuze",
    company: "NovaFuze LLP",
    role: "Software Engineer",
    period: "2023 – 2025",
    location: "Bengaluru, India",
    description:
      "Founded and built a sports-tech startup with multi-app ecosystems serving coaches and athletes. Designed complete digital solutions for sports coaching and academy management.",
    products: [
      { name: "GSC Coach App", description: "For sports coaches to manage classes, attendance, and schedules" },
      { name: "GSC User App", description: "For athletes/trainees to book sessions, track progress, and manage profiles" },
      { name: "Admin Dashboards", description: "For managing coaches, payments, schedules, and academy operations" },
    ],
    highlights: [
      { icon: Layers, text: "Tri-app ecosystem (Coach, User, Admin)" },
      { icon: Cloud, text: "Firebase cloud architecture" },
      { icon: Database, text: "Firestore & real-time systems" },
      { icon: Users, text: "Operational product design" },
    ],
    achievements: [
      "Built a complete tri-app ecosystem (Coach App, User App, Admin Panel) using Flutter + Firebase",
      "Implemented Firestore architecture, rule-based access control, and real-time schedules",
      "Improved operations for academies using digital workflows for booking, coaching, and management",
      "Delivered full product lifecycle including UI/UX, backend, testing, deployment, and maintenance",
      "Gained hands-on experience working with academies, understanding pain points, and converting them into digital solutions",
    ],
    skills: ["Flutter", "Dart", "Firebase", "Firestore", "Cloud Functions", "Google Analytics", "Stripe", "Push Notifications", "Material Design", "REST APIs"],
    color: "from-blue-400 to-cyan-400",
    glowColor: "blue",
  },
  {
    id: "bluestock",
    company: "Bluestock™",
    role: "Software Engineer Intern",
    period: "Jun 2024 – Aug 2024",
    location: "Remote, Bengaluru",
    description:
      "Contributed to front-end development, clean architecture improvements, and production-ready features in an Agile remote environment.",
    products: [],
    highlights: [
      { icon: Code, text: "Modular UI components" },
      { icon: Zap, text: "Performance optimization" },
      { icon: Users, text: "API integration" },
      { icon: Award, text: "System design contributions" },
    ],
    achievements: [
      "Designed and implemented modular UI components with scalable architecture",
      "Improved product performance through debugging, code optimization, and refactoring",
      "Integrated APIs and assisted in building new feature modules",
      "Worked in an Agile remote environment with daily standups and collaborative sprints",
      "Participated in system design discussions and contributed code that improved reliability",
    ],
    skills: ["UI Development", "Software Design", "Modular Architecture", "API Integration", "Debugging", "Performance Optimization", "Agile Methodology", "Code Review"],
    color: "from-purple-400 to-pink-400",
    glowColor: "purple",
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
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

export function ExperienceTimeline() {
  const [activeExperience, setActiveExperience] = useState<string | null>(null)
  const [expandedExp, setExpandedExp] = useState<string | null>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={timelineRef}
      className="relative py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
      aria-label="Professional experience and career history"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 hidden lg:block" />

          <motion.div
            className="space-y-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            role="list"
          >
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0
              return (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  role="listitem"
                  className="relative group"
                  onMouseEnter={() => setActiveExperience(exp.id)}
                  onMouseLeave={() => setActiveExperience(null)}
                >
                  {/* Timeline Node - Animated */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-0 hidden lg:block -translate-y-1/2 z-20">
                    <motion.div
                      className="w-6 h-6 rounded-full bg-gradient-to-br border-2 border-cyan-400"
                      style={{
                        boxShadow:
                          activeExperience === exp.id
                            ? "0 0 30px rgba(6, 182, 212, 1), inset 0 0 15px rgba(6, 182, 212, 0.5)"
                            : "0 0 15px rgba(6, 182, 212, 0.3)",
                      }}
                      animate={{
                        scale: activeExperience === exp.id ? 1.8 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full border border-cyan-400"
                      animate={{
                        scale: activeExperience === exp.id ? 2.2 : 1.4,
                        opacity: activeExperience === exp.id ? 0.3 : 0.1,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  <div
                    className={cn(
                      "relative",
                      isEven ? "lg:mr-[calc(50%+3rem)] lg:pr-8" : "lg:ml-[calc(50%+3rem)] lg:pl-8",
                    )}
                  >
                    {/* Card with enhanced visual effects */}
                    <motion.article
                      className="relative group/card cursor-pointer"
                      onClick={() => setExpandedExp(expandedExp === exp.id ? null : exp.id)}
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                      itemScope
                      itemType="https://schema.org/OrganizationRole"
                    >
                      {/* Animated gradient glow background */}
                      <div
                        className={cn(
                          "absolute -inset-1 rounded-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 blur-xl",
                          `bg-gradient-to-br ${exp.color}`,
                        )}
                        style={{
                          opacity: activeExperience === exp.id ? 0.4 : 0,
                        }}
                      />

                      {/* Inner glow */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

                      {/* Glass effect container */}
                      <div className="relative p-8 rounded-3xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/8 to-white/3 border border-cyan-300/30 group-hover/card:border-cyan-300/60 transition-all duration-300">
                        {/* Top accent line */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

                        {/* Company Badge + Header */}
                        <div className="flex items-start justify-between mb-8 gap-6">
                          <div className="flex items-start gap-5">
                            {/* Icon */}
                            <motion.div
                              className={cn(
                                "w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br flex-shrink-0",
                                exp.color,
                              )}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Briefcase className="w-8 h-8 text-white" />
                            </motion.div>

                            {/* Company Info */}
                            <div className="flex-1">
                              <motion.span
                                className="inline-block px-4 py-1.5 rounded-full bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-semibold tracking-wider mb-3"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                              >
                                {activeExperience === exp.id ? "★ ACTIVE" : "EXPERIENCE"}
                              </motion.span>
                              <h3 className="text-3xl font-black text-white mb-2" itemProp="name">
                                {exp.company}
                              </h3>
                              <p
                                className="text-lg font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent"
                                itemProp="roleName"
                              >
                                {exp.role}
                              </p>
                            </div>
                          </div>

                          {/* Period Badge */}
                          <motion.div
                            className="text-right flex-shrink-0"
                            whileHover={{ scale: 1.05 }}
                          >
                            <div className="px-5 py-3 rounded-xl bg-gradient-to-br from-cyan-400/20 to-purple-400/20 border border-cyan-400/40 backdrop-blur">
                              <p className="text-sm font-mono text-cyan-300 font-bold">{exp.period}</p>
                              <p className="text-xs text-gray-400 mt-1.5 font-medium">{exp.location}</p>
                            </div>
                          </motion.div>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-gradient-to-r from-cyan-500/20 via-cyan-500/5 to-transparent mb-6" />

                        {/* Description with improved styling */}
                        <p className="text-gray-200 mb-8 leading-relaxed text-lg font-light" itemProp="description">
                          {exp.description}
                        </p>

                        {/* Highlights Grid - Enhanced */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                          {exp.highlights.map((highlight, i) => {
                            const Icon = highlight.icon
                            return (
                              <motion.div
                                key={i}
                                className="group/highlight relative p-4 rounded-xl overflow-hidden"
                                whileHover={{ x: 4, y: -2 }}
                              >
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 opacity-0 group-hover/highlight:opacity-100 transition-opacity duration-300 rounded-xl" />
                                <div className="absolute inset-0 border border-cyan-300/20 rounded-xl group-hover/highlight:border-cyan-300/50 transition-colors duration-300" />
                                <div className="relative z-10 flex items-center gap-3">
                                  <Icon className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                                  <span className="text-sm font-semibold text-gray-200">{highlight.text}</span>
                                </div>
                              </motion.div>
                            )
                          })}
                        </div>

                        {/* Expandable Section */}
                        <motion.div
                          initial={false}
                          animate={{
                            height: expandedExp === exp.id ? "auto" : 0,
                            opacity: expandedExp === exp.id ? 1 : 0,
                            marginTop: expandedExp === exp.id ? 24 : 0,
                          }}
                          transition={{ duration: 0.4 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6 border-t border-cyan-300/30 space-y-8">
                            {/* Products */}
                            {exp.products.length > 0 && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                              >
                                <h4 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                                  <Rocket className="w-5 h-5 text-cyan-400" />
                                  <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                                    Products Built
                                  </span>
                                </h4>
                                <div className="grid gap-3">
                                  {exp.products.map((product, idx) => (
                                    <motion.div
                                      key={product.name}
                                      className="p-4 rounded-xl border border-cyan-300/20 bg-white/3 hover:bg-white/5 hover:border-cyan-300/40 transition-all group/product"
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: idx * 0.05 }}
                                      whileHover={{ x: 4 }}
                                    >
                                      <p className="font-bold text-white mb-1 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-cyan-400" />
                                        {product.name}
                                      </p>
                                      <p className="text-sm text-gray-300">{product.description}</p>
                                    </motion.div>
                                  ))}
                                </div>
                              </motion.div>
                            )}

                            {/* Achievements */}
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.15 }}
                            >
                              <h4 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                                <Award className="w-5 h-5 text-cyan-400" />
                                <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                                  Key Achievements
                                </span>
                              </h4>
                              <ul className="space-y-3">
                                {exp.achievements.map((achievement, idx) => (
                                  <motion.li
                                    key={idx}
                                    className="flex gap-3 text-gray-300"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.15 + idx * 0.05 }}
                                  >
                                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm leading-relaxed font-light">{achievement}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>

                            {/* Skills */}
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                            >
                              <h4 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                                <Code className="w-5 h-5 text-cyan-400" />
                                <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                                  Tech Stack
                                </span>
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, idx) => (
                                  <motion.span
                                    key={skill}
                                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-cyan-400/15 text-cyan-300 border border-cyan-300/30 hover:bg-cyan-400/25 hover:border-cyan-300/60 transition-all cursor-default"
                                    whileHover={{ scale: 1.05 }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 + idx * 0.02 }}
                                  >
                                    {skill}
                                  </motion.span>
                                ))}
                              </div>
                            </motion.div>
                          </div>
                        </motion.div>

                        {/* Expand Toggle */}
                        <motion.button
                          className="flex items-center gap-2 text-cyan-400 mt-8 font-bold text-sm hover:gap-3 transition-all group/btn"
                          onClick={() => setExpandedExp(expandedExp === exp.id ? null : exp.id)}
                          whileHover={{ x: 2 }}
                        >
                          <span className="group-hover/btn:text-cyan-300">{expandedExp === exp.id ? "Hide Details" : "View All Details"}</span>
                          <motion.svg
                            className="w-5 h-5 group-hover/btn:text-cyan-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            animate={{ rotate: expandedExp === exp.id ? 180 : 0 }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </motion.svg>
                        </motion.button>
                      </div>
                    </motion.article>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Additional Skills Section */}
        <motion.section
          className="mt-24 p-12 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl" />
          <div className="absolute inset-0 backdrop-blur-sm bg-white/3 border border-cyan-300/20 rounded-2xl" />

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Globe className="w-6 h-6 text-cyan-400" /> Additional Expertise
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-cyan-300 font-semibold mb-4">AI & LLM Engineering</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Integrated Llama 3.1, Gemini Flash, DeepSeek-R1 into real applications. Built AI pipelines for resume extraction, portfolio generation, and code generation. Experimented with local GPU workloads via Ollama, Civo GPUs, and Groq Cloud.
                </p>
              </div>
              <div>
                <h4 className="text-cyan-300 font-semibold mb-4">Mobile & Web Engineering</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Shipped 4+ Flutter apps, full-stack admin dashboards, and real-time backend systems. Expertise in Firebase Authentication, Firestore, Storage, Cloud Functions, Analytics, and App Distribution.
                </p>
              </div>
              <div>
                <h4 className="text-cyan-300 font-semibold mb-4">DevOps & Release Management</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Managed Android/iOS app publishing, versioning, signing, AAB/IPA builds. Built multi-environment CI/CD pipelines and integrated analytics and crash monitoring.
                </p>
              </div>
              <div>
                <h4 className="text-cyan-300 font-semibold mb-4">Full-Stack Development</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  End-to-end product development from design and development to testing, deployment, and maintenance. Strong in UI/UX design, backend architecture, and production-grade deployments.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  )
}
