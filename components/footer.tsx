"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ExternalLink, MessageSquare } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "https://github.com/Madancse013", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/madan-r-a55867282", label: "LinkedIn" },
    { icon: Mail, href: "mailto:madancse.gcem@gmail.com", label: "Email" },
    { icon: MessageSquare, href: "https://wa.me/919535318620", label: "WhatsApp" },
  ]

  const footerLinks = {
    Product: [
      { name: "Nuvrexio", href: "#" },
      { name: "CrezAIPro", href: "#" },
      { name: "PlayNexa", href: "#" },
      { name: "Monomode", href: "#" },
    ],
    Company: [
      { name: "About", href: "/about" },
      { name: "Experience", href: "/experience" },
      { name: "Projects", href: "/projects" },
      { name: "Contact", href: "/contact" },
    ],
    Resources: [
      { name: "Blog", href: "/blog" },
      { name: "Portfolio", href: "/" },
      { name: "Upcoming", href: "/upcoming" },
    ],
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="relative border-t border-purple-500/10 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-950 backdrop-blur-xl">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Top Section */}
          <motion.div variants={itemVariants} className="grid gap-8 md:grid-cols-4">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link href="/" className="group relative mb-6 inline-block">
                <span className="text-2xl font-[family-name:var(--font-great-vibes)] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 neon-text transition-all duration-300 group-hover:from-cyan-300 group-hover:via-purple-300 group-hover:to-cyan-300 tracking-wide">
                  Madan Rajendra
                </span>
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full rounded-full" />
              </Link>
              <p className="text-sm text-slate-400 leading-relaxed">
                Software Engineer & Application Developer. Founder of Nuvrexio, NovaFuze LLP, and MonoMode. Building AI-powered platforms and next-generation mobile applications.
              </p>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <motion.div key={category} variants={itemVariants} className="space-y-4">
                <h3 className="font-semibold tracking-widest text-sm uppercase text-slate-200">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="group flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                      >
                        {link.name}
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
          />

          {/* Bottom Section */}
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-slate-500">
                © {currentYear} Madan Rajendra. All rights reserved.
              </p>
              <p className="text-xs text-slate-600 mt-1">
                Specialized in Flutter, Firebase, Next.js, and AI/ML integration. Expert in full-stack development, mobile apps, and cloud architecture.
              </p>
            </div>

            {/* Social Links */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative p-2 rounded-lg bg-slate-800/50 hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-cyan-500/20 transition-colors duration-300 border border-slate-700/50 hover:border-purple-500/30"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/0 via-cyan-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:via-cyan-500/10 group-hover:to-pink-500/10 transition-all duration-300 pointer-events-none" />
                  </motion.a>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Glow Effect */}
          <div className="absolute -bottom-40 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-30 pointer-events-none" />
        </motion.div>
      </div>
    </footer>
  )
}
