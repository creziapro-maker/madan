"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import {
  Code2,
  Cpu,
  Database,
  Layers,
  Palette,
  Server,
  Sparkles,
  Zap,
  Globe,
  Rocket,
  Award,
} from "lucide-react"

const skills = [
  {
    name: "Flutter & Dart",
    icon: Layers,
    color: "from-cyan-400 to-blue-500",
    description: "Cross-platform mobile app development",
  },
  {
    name: "Firebase & Backend",
    icon: Database,
    color: "from-orange-400 to-amber-500",
    description: "Real-time database, authentication, cloud functions",
  },
  {
    name: "Next.js & React",
    icon: Server,
    color: "from-neutral-400 to-neutral-600",
    description: "Full stack web development",
  },
  {
    name: "AI & LLM Integration",
    icon: Cpu,
    color: "from-purple-400 to-pink-500",
    description: "GPT, machine learning, code generation",
  },
  {
    name: "Cloud & DevOps",
    icon: Zap,
    color: "from-yellow-400 to-orange-500",
    description: "AWS, GCP, GPU cloud, CI/CD",
  },
  {
    name: "UI/UX Design",
    icon: Palette,
    color: "from-pink-400 to-rose-500",
    description: "User interface design, Figma, prototyping",
  },
  {
    name: "System Architecture",
    icon: Sparkles,
    color: "from-green-400 to-emerald-500",
    description: "Scalable systems, microservices",
  },
  {
    name: "Mobile Development",
    icon: Code2,
    color: "from-blue-400 to-indigo-500",
    description: "iOS, Android, cross-platform apps",
  },
]

const journeyTimeline = [
  {
    year: "2023",
    title: "Journey Begins",
    description: "Started with a passion for building digital solutions and mastering core technologies",
    icon: Rocket,
  },
  {
    year: "2024",
    title: "NovaFuze LLP Founded",
    description: "Launched NovaFuze LLP, developed GSC Coach & GSC User - sports coaching platforms",
    icon: Award,
  },
  {
    year: "2025",
    title: "Multi-Product Success",
    description: "Deployed 4+ production apps on Play Store, served thousands of users across e-commerce & sports",
    icon: Globe,
  },
  {
    year: "Nov 2025",
    title: "Nuvrexio Launch",
    description: "Founded Nuvrexio, focusing on AI-powered developer tools and next-generation platforms",
    icon: Sparkles,
  },
  {
    year: "2026",
    title: "AI-Driven Revolution",
    description: "Launching CrezAIPro, PlayNexa, and pioneering Nuvrexio.ai with cutting-edge generative AI",
    icon: Cpu,
  },
  {
    year: "Future",
    title: "Global AI Ecosystem",
    description: "Scaling AI platforms globally while advancing expertise in intelligent systems and data-driven products",
    icon: Rocket,
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

export function AboutContent() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative pt-32 pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
      aria-label="About Madan Rajendra - Flutter Developer and AI Engineer"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header with Animation */}
        <motion.header
          className="text-center mb-20"
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
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            About Madan Rajendra
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Flutter Developer & AI Engineer
            </span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Building innovative mobile applications, AI-powered developer tools, and next-generation digital ecosystems
          </motion.p>
        </motion.header>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Left: Bio Section */}
          <motion.article
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            itemScope
            itemType="https://schema.org/Person"
          >
            <motion.div variants={itemVariants} className="relative p-8 rounded-3xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-transparent rounded-3xl" />
              <div className="absolute inset-0 backdrop-blur-md bg-white/5 border border-cyan-300/20 rounded-3xl" />

              <div className="relative z-10">
                <div className="absolute -top-4 -left-4 text-6xl font-serif text-cyan-400/20">{'"'}</div>
                <p className="text-xl md:text-2xl leading-relaxed text-white font-light" itemProp="description">
                  I'm a{" "}
                  <span className="text-cyan-300 font-semibold" itemProp="jobTitle">
                    Flutter developer and AI experimenter
                  </span>{" "}
                  who loves turning complex ideas into simple, beautiful apps.
                </p>

                <div className="mt-6 h-px bg-gradient-to-r from-cyan-500/50 via-purple-500/20 to-transparent" />

                <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                  I'm the{" "}
                  <span className="text-cyan-300 font-semibold">
                    founder of Nuvrexio
                  </span>
                  , where I build tools that help developers move faster. My journey has taken me from building sports coaching platforms with NovaFuze to exploring the boundaries of generative AI.
                </p>

                <p className="mt-4 text-gray-300 leading-relaxed">
                  I don't just write code; I build products. With 4+ apps live on the Play Store, I've learned that the best solutions come from understanding the person on the other side of the screen.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="grid gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  title: "My Why",
                  text: "I believe technology should feel like magic but work like a tool. I'm driven by the challenge of making AI accessible and building mobile experiences that actually stick.",
                  icon: Rocket,
                },
                {
                  title: "How I Work",
                  text: "Clean code is just the baseline. I focus on scalable architecture and thoughtful design patterns that allow products to grow without breaking.",
                  icon: Code2,
                },
                {
                  title: "The Result",
                  text: "From e-commerce to sports tech, I've built platforms that solve real problems for real people. If it doesn't make someone's life easier, I'm not finished.",
                  icon: Globe,
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    className="group relative p-6 rounded-2xl overflow-hidden cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl" />
                    <div className="absolute inset-0 backdrop-blur-sm bg-white/3 border border-cyan-300/10 rounded-2xl group-hover:border-cyan-300/30 transition-colors duration-300" />

                    <div className="relative z-10 flex gap-4">
                      <Icon className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-sm font-mono text-cyan-300 mb-2 tracking-wide uppercase">{item.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.article>

          {/* Right: Skills Section */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            aria-label="Technical skills and expertise"
          >
            <div className="sticky top-32">
              <h2 className="text-2xl font-bold mb-2 text-white">Technical Stack</h2>
              <p className="text-gray-400 mb-8 text-sm">Full stack, mobile, AI/ML, and cloud infrastructure</p>

              <motion.div
                className="grid grid-cols-2 gap-4 mb-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                role="list"
              >
                {skills.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      role="listitem"
                      className="group relative p-6 rounded-2xl overflow-hidden cursor-pointer"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div
                        className={cn(
                          "absolute inset-0 bg-gradient-to-br rounded-2xl transition-opacity duration-300",
                          skill.color,
                          hoveredSkill === skill.name ? "opacity-10" : "opacity-0",
                        )}
                      />
                      <div className="absolute inset-0 backdrop-blur-sm bg-white/3 border border-cyan-300/10 rounded-2xl group-hover:border-cyan-300/30 transition-all duration-300" />

                      <div className="relative z-10 flex flex-col items-center text-center">
                        <div
                          className={cn(
                            "w-12 h-12 rounded-xl flex items-center justify-center mb-3",
                            "bg-gradient-to-br",
                            skill.color,
                            "bg-opacity-20",
                          )}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-sm font-semibold text-white">{skill.name}</h3>
                        <p className="text-xs text-gray-400 mt-2">{skill.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>

              <motion.div
                className="grid grid-cols-3 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { label: "Apps Built", value: "4+" },
                  { label: "Years Coding", value: "2+" },
                  { label: "Tech Mastered", value: "15+" },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    className="p-4 rounded-xl border border-cyan-300/10 backdrop-blur-sm bg-white/3 text-center hover:border-cyan-300/30 transition-colors"
                  >
                    <div className="text-2xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.aside>
        </div>

        {/* Journey Timeline */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-2 text-center">Professional Journey</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            From founding NovaFuze to building Nuvrexio, a timeline of growth and innovation
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-cyan-500/0" />

            <motion.div
              className="space-y-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {journeyTimeline.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.year}
                    variants={itemVariants}
                    className={cn("grid grid-cols-2 gap-8 items-center", index % 2 === 1 && "direction-rtl")}
                  >
                    {index % 2 === 0 ? (
                      <>
                        <div className="text-right">
                          <h3 className="text-2xl font-bold text-cyan-400 mb-1">{item.year}</h3>
                          <p className="text-white font-semibold text-lg mb-2">{item.title}</p>
                          <p className="text-gray-400 text-sm">{item.description}</p>
                        </div>
                        <div className="flex justify-center">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center z-10 relative">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex justify-center">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center z-10 relative">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="text-left">
                          <h3 className="text-2xl font-bold text-cyan-400 mb-1">{item.year}</h3>
                          <p className="text-white font-semibold text-lg mb-2">{item.title}</p>
                          <p className="text-gray-400 text-sm">{item.description}</p>
                        </div>
                      </>
                    )}
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </motion.section>



        {/* Call to Action */}
        <motion.section
          className="relative p-12 rounded-3xl overflow-hidden text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/5 to-cyan-500/10 rounded-3xl" />
          <div className="absolute inset-0 backdrop-blur-sm bg-white/3 border border-cyan-300/20 rounded-3xl" />

          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Build Something Amazing?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Whether you need a Flutter app, AI integration, or scalable web platform, let's create transformative
              solutions together
            </p>
            <motion.button
              className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>
          </div>
        </motion.section>
      </div>
    </section>
  )
}
