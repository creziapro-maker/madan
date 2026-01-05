"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ParticleBackground } from "@/components/particle-background"
import { Navigation } from "@/components/navigation"
import { blogPosts } from "@/lib/blog-data"
import { upcomingProjectsData } from "@/lib/upcoming-projects-data"
import { Search, Calendar, Clock, Tag, ArrowRight, Sparkles } from "lucide-react"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(blogPosts.map((post) => post.category)))

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory = !selectedCategory || post.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

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
      transition: { duration: 0.5 },
    },
  }

  return (
    <main className="relative min-h-screen bg-background">
      <ParticleBackground />
      <Navigation />

      <section className="relative pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-mono text-sm mb-4 tracking-wider">INSIGHTS & KNOWLEDGE</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                AI & Dev Blog
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore articles on AI, web development, mobile apps, and the future of technology.
            </p>
          </motion.div>

          <motion.div
            className="space-y-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-3 rounded-xl bg-muted/30 border border-border placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === null
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/30 text-muted-foreground hover:text-foreground"
                }`}
              >
                All Articles
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted/30 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-6">
          {filteredPosts.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-8 md:gap-10"
            >
              {filteredPosts.map((post) => (
                <motion.div key={post.id} variants={itemVariants}>
                  <Link href={`/blog/${post.slug}`}>
                    <article className="group relative overflow-hidden rounded-2xl glass border border-border/50 hover:border-primary/50 transition-all duration-300 p-8 cursor-pointer hover:shadow-[0_0_30px_rgba(0,212,255,0.1)]">
                      <div className="grid md:grid-cols-3 gap-8 items-start">
                        {post.image && (
                          <div className="md:col-span-1 relative h-56 rounded-xl overflow-hidden">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        )}

                        <div className="md:col-span-2 space-y-4">
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                              {post.category}
                            </span>
                            <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm">
                              {post.readTime} min read
                            </span>
                          </div>

                          <h2 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {post.title}
                          </h2>

                          <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>

                          <div className="flex flex-wrap gap-2 pt-2">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span key={tag} className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Tag className="w-3 h-3" />
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {post.date}
                            </div>
                            <span>By {post.author}</span>
                          </div>

                          <div className="pt-4">
                            <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                              Read Article
                              <span className="text-lg">→</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No articles found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      <section className="relative py-20 border-t border-border/50 bg-gradient-to-b from-muted/20 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
                Projects We&apos;re Building
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the upcoming products and tools inspired by the topics we write about
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 mb-8"
          >
            {upcomingProjectsData.slice(0, 4).map((project) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={project.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                >
                  <Link href={`/upcoming#${project.id}`}>
                    <div className="group relative overflow-hidden rounded-xl glass border border-border/50 hover:border-accent/50 p-6 transition-all duration-300 cursor-pointer hover:shadow-[0_0_30px_rgba(0,212,255,0.1)] h-full">
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                          {project.status}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">{project.tagline}</p>

                      <div className="flex items-center gap-2 text-xs text-accent font-medium">
                        <Sparkles className="w-3 h-3" />
                        {project.launchDate}
                      </div>

                      <div className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="w-6 h-6 text-accent/50 m-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <Link
              href="/upcoming"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 text-accent hover:bg-accent/20 font-medium transition-colors"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <footer className="relative py-8 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Madan Rajendra. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/madan-r-a55867282"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Madancse013"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
