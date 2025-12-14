"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import {
  ExternalLink,
  Smartphone,
  Globe,
  Rocket,
  AppWindow,
  Brain,
  Github,
  ArrowUpRight,
  Star,
  Download,
} from "lucide-react"

const mobileApps = [
  {
    id: "monomode",
    title: "MonoMode",
    subtitle: "Fashion E-commerce",
    description: "Premium fashion e-commerce app with Razorpay payments, real-time inventory, and seamless checkout",
    playStore: "https://play.google.com/store/apps/details?id=io.github.monomode",
    appStore: "https://apps.apple.com/app/monomode",
    websites: ["monomode.in", "monomode.space"],
    tech: ["Flutter", "Firebase", "Razorpay", "Cloud Functions"],
    gradient: "from-purple-500 via-pink-500 to-purple-600",
    icon: "👗",
    rating: "4.8",
  },
  {
    id: "dailykart",
    title: "DailyKart",
    subtitle: "Grocery Delivery",
    description: "On-demand grocery delivery with GPS tracking, real-time updates, and smart inventory management",
    playStore: "https://play.google.com/store/apps/details?id=com.dailykart.dailykart.app",
    appStore: "https://apps.apple.com/app/dailykart",
    websites: ["dailykart.io", "dailykart.space"],
    tech: ["Flutter", "Google Maps", "Firebase", "Push Notifications"],
    gradient: "from-green-500 via-emerald-500 to-green-600",
    icon: "🛒",
    rating: "4.7",
  },
  {
    id: "gsc-user",
    title: "GSC User",
    subtitle: "Sports Training App",
    description: "Book coaching sessions, track fitness progress, and connect with professional sports coaches",
    playStore: "https://play.google.com/store/apps/details?id=com.novafuze.gsc",
    appStore: "https://apps.apple.com/app/gsc-user",
    websites: [],
    tech: ["Flutter", "Firebase", "Stripe", "Real-time Database"],
    gradient: "from-orange-500 via-red-500 to-orange-600",
    icon: "⚽",
    rating: "4.6",
  },
  {
    id: "gsc-coach",
    title: "GSC Coach",
    subtitle: "Sports Management",
    description: "Manage coaching programs, track student progress, and organize training schedules efficiently",
    playStore: "https://play.google.com/store/apps/details?id=com.novafuze.coach",
    appStore: "https://apps.apple.com/app/gsc-coach",
    websites: [],
    tech: ["Flutter", "Firestore", "Cloud Messaging", "Analytics"],
    gradient: "from-blue-500 via-cyan-500 to-blue-600",
    icon: "🏋️",
    rating: "4.9",
  },
]

const websites = [
  {
    name: "dailykart.io",
    title: "DailyKart Hub",
    description: "Main website for DailyKart grocery delivery platform",
    icon: "🌐",
  },
  {
    name: "dailykart.space",
    title: "DailyKart Community",
    description: "Community portal and blog for DailyKart users",
    icon: "🌌",
  },
  {
    name: "monomode.in",
    title: "MonoMode India",
    description: "Fashion destination for Indian market",
    icon: "🇮🇳",
  },
  {
    name: "monomode.space",
    title: "MonoMode Global",
    description: "International fashion platform",
    icon: "🌍",
  },
  {
    name: "tedxgcem.com",
    title: "TEDx GCEM",
    description: "Tech event platform for TEDx talks",
    icon: "🎤",
  },
  {
    name: "protraininx.in",
    title: "ProTraininX",
    description: "Professional fitness training programs",
    icon: "💪",
  },
  {
    name: "hfbacademy.in",
    title: "HFB Academy",
    description: "Online education and learning management",
    icon: "📚",
  },
]

const aiProjects = [
  {
    id: "mental-health",
    title: "Mental Health Prediction",
    subtitle: "ML Model",
    description: "Advanced machine learning model for predicting mental health conditions. Uses NLP and behavioral data analysis to provide early detection and risk assessment.",
    features: ["NLP Processing", "Behavioral Analysis", "Risk Prediction", "Data Visualization"],
    tech: ["Python", "TensorFlow", "Pandas", "Scikit-learn", "NLTK"],
    gradient: "from-violet-500 via-purple-500 to-violet-600",
    icon: "🧠",
    status: "Research & Production",
  },
  {
    id: "crezaipro",
    title: "CrezAIPro",
    subtitle: "AI Portfolio Generator",
    description: "Transform resumes into stunning portfolio websites. AI-powered design, content generation, and automatic SEO optimization.",
    features: ["Resume Parsing", "AI Design", "Content Generation", "SEO Ready"],
    tech: ["Next.js", "OpenAI API", "Tailwind CSS", "Python"],
    gradient: "from-rose-500 via-pink-500 to-rose-600",
    icon: "🎨",
    status: "In Development",
  },
  {
    id: "playnexa",
    title: "PlayNexa",
    subtitle: "Sports Social Network",
    description: "Connect sports enthusiasts, find game partners, and organize events. AI-powered matching based on location, skill level, and preferences.",
    features: ["Geolocation Matching", "Event Scheduling", "Social Chat", "Community Building"],
    tech: ["Flutter", "Firebase", "Google Maps", "WebSockets"],
    gradient: "from-orange-500 via-red-500 to-orange-600",
    icon: "🎮",
    status: "MVP Ready",
  },
  {
    id: "nuvrexio",
    title: "Nuvrexio.ai",
    subtitle: "Code Generation",
    description: "Revolutionary AI platform for Flutter code generation. Transform product ideas into production-ready applications with LLM intelligence.",
    features: ["Code Generation", "Architecture Design", "Testing", "Deployment"],
    tech: ["Python", "LLMs", "Flutter", "Firebase", "Next.js"],
    gradient: "from-cyan-500 via-blue-500 to-cyan-600",
    icon: "⚡",
    status: "Building",
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

export function ProjectsShowcase() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<"live" | "websites" | "upcoming">("live")

  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" aria-label="Portfolio of Flutter apps and web projects">
      <div className="max-w-7xl mx-auto px-6">
        {/* Tab Navigation - Enhanced */}
        <motion.nav
          className="flex justify-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          aria-label="Project categories"
        >
          <div className="inline-flex p-2 rounded-2xl backdrop-blur-xl bg-white/5 border border-cyan-400/30">
            {[
              { id: "live", label: "Mobile Apps", icon: Smartphone },
              { id: "websites", label: "Websites", icon: Globe },
              { id: "upcoming", label: "AI Projects", icon: Rocket },
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 text-sm font-bold",
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/50"
                    : "text-gray-400 hover:text-cyan-300",
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-selected={activeTab === tab.id}
              >
                <tab.icon className="w-5 h-5" aria-hidden="true" />
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.nav>

        {/* Mobile Apps Grid */}
        <motion.div
          className={cn("grid gap-6", activeTab === "live" ? "grid-cols-1 md:grid-cols-2" : "hidden")}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          role="list"
        >
          {mobileApps.map((app, idx) => (
            <motion.article
              key={app.id}
              variants={itemVariants}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredProject(app.id)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ y: -8 }}
            >
              {/* Animated glow */}
              <div
                className={cn(
                  "absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10",
                  `bg-gradient-to-br ${app.gradient}`,
                )}
              />

              {/* Card */}
              <div className="relative p-8 rounded-3xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/8 to-white/3 border border-cyan-300/30 group-hover:border-cyan-300/60 transition-all duration-300">
                {/* Header */}
                <div className="flex items-start justify-between mb-6 gap-4">
                  <div>
                    <div className="text-5xl mb-3">{app.icon}</div>
                    <h3 className="text-3xl font-black text-white mb-1">{app.title}</h3>
                    <p className="text-cyan-300 font-semibold">{app.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-yellow-400/20 border border-yellow-400/40">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-bold text-yellow-300">{app.rating}</span>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-cyan-500/20 via-cyan-500/5 to-transparent mb-6" />

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">{app.description}</p>

                {/* Download Buttons */}
                <div className="flex gap-3 mb-6">
                  <motion.a
                    href={app.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/40 text-green-300 font-semibold hover:border-green-400/60 transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Download className="w-5 h-5" />
                    Play Store
                  </motion.a>
                  <motion.a
                    href={app.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-gray-500/20 to-gray-600/20 border border-gray-400/40 text-gray-300 font-semibold hover:border-gray-400/60 transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Download className="w-5 h-5" />
                    App Store
                  </motion.a>
                </div>

                {/* Websites */}
                {app.websites.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {app.websites.map((website) => (
                      <motion.a
                        key={website}
                        href={`https://${website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg text-sm font-semibold text-cyan-300 bg-cyan-400/10 border border-cyan-300/30 hover:border-cyan-300/60 hover:bg-cyan-400/15 transition-all"
                        whileHover={{ scale: 1.05 }}
                      >
                        {website}
                      </motion.a>
                    ))}
                  </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {app.tech.map((tech, i) => (
                    <span key={tech} className="px-2.5 py-1 text-xs font-semibold rounded-full bg-cyan-400/15 text-cyan-300 border border-cyan-300/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Websites Grid */}
        <motion.div
          className={cn("grid gap-6", activeTab === "websites" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "hidden")}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          role="list"
        >
          {websites.map((website) => (
            <motion.a
              key={website.name}
              href={`https://${website.name}`}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              whileHover={{ y: -4 }}
            >
              {/* Glow */}
              <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg -z-10 bg-gradient-to-br from-cyan-500 to-blue-500" />

              {/* Card */}
              <div className="relative p-8 rounded-2xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/8 to-white/3 border border-cyan-300/30 group-hover:border-cyan-300/50 transition-all duration-300">
                <div className="text-5xl mb-4">{website.icon}</div>
                <h3 className="text-2xl font-black text-white mb-2">{website.title}</h3>
                <p className="text-cyan-300 font-mono text-sm mb-3">{website.name}</p>
                <p className="text-gray-400 text-sm">{website.description}</p>
                <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* AI Projects Grid */}
        <motion.div
          className={cn("grid gap-6", activeTab === "upcoming" ? "grid-cols-1 md:grid-cols-2" : "hidden")}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          role="list"
        >
          {aiProjects.map((project) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ y: -8 }}
            >
              {/* Animated glow */}
              <div
                className={cn(
                  "absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10",
                  `bg-gradient-to-br ${project.gradient}`,
                )}
              />

              {/* Card */}
              <div className="relative p-8 rounded-3xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/8 to-white/3 border border-cyan-300/30 group-hover:border-cyan-300/60 transition-all duration-300">
                {/* Status Badge */}
                <div className="inline-block mb-4 px-3 py-1.5 rounded-full bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-semibold">
                  {project.status}
                </div>

                {/* Header */}
                <div className="mb-6">
                  <div className="text-5xl mb-3">{project.icon}</div>
                  <h3 className="text-3xl font-black text-white mb-1">{project.title}</h3>
                  <p className="text-cyan-300 font-semibold">{project.subtitle}</p>
                </div>

                <div className="h-px bg-gradient-to-r from-cyan-500/20 via-cyan-500/5 to-transparent mb-6" />

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-semibold rounded-full bg-purple-400/15 text-purple-300 border border-purple-300/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
