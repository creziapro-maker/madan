"use client"

import { motion } from "framer-motion"
import { ParticleBackground } from "./particle-background"
import { ProjectsShowcase } from "./projects-showcase"

export function ProjectsPageContent() {
  return (
    <main className="relative min-h-screen bg-slate-950">
      <ParticleBackground />

      {/* Page Header */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-slate-950 via-slate-900 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-cyan-400 font-mono text-sm mb-4 tracking-widest uppercase"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Portfolio Showcase
            </motion.p>
            <motion.h1
              className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Projects & Products
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Live applications, stunning websites, and cutting-edge AI projects showcasing expertise in Flutter, Firebase, Next.js, and machine learning
            </motion.p>
          </motion.div>
        </div>
      </section>

      <ProjectsShowcase />

      {/* Footer */}
      <footer className="relative py-12 border-t border-cyan-400/10 bg-gradient-to-b from-slate-950 to-slate-950/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">© 2025 Madan Rajendra. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/madan-r-a55867282"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Madancse013"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
