"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { ParticleBackground } from "@/components/particle-background"
import { Navigation } from "@/components/navigation"
import { blogPosts } from "@/lib/blog-data"
import { getProjectsByBlog } from "@/lib/upcoming-projects-data"
import { Calendar, Clock, Tag, ArrowLeft, Sparkles } from "lucide-react"

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3)

  const relatedProjects = getProjectsByBlog(post.slug)

  return (
    <main className="relative min-h-screen bg-background">
      <ParticleBackground />
      <Navigation />

      <article className="relative pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="space-y-6">
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
                  {post.category}
                </span>
                <span className="px-4 py-2 rounded-full bg-accent/10 text-accent">{post.readTime} min read</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                  {post.title}
                </span>
              </h1>

              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-muted-foreground pt-6 border-t border-border/50">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <div>By {post.author}</div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime} minutes
                </div>
              </div>
            </div>
          </motion.div>

          {post.image && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12 rounded-2xl overflow-hidden h-96 md:h-[500px]"
            >
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-invert max-w-none space-y-6 mb-12"
          >
            {post.content.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("#")) {
                const level = paragraph.match(/^#+/)?.[0].length || 1
                const text = paragraph.replace(/^#+\s/, "")

                if (level === 1) {
                  return (
                    <h1 key={index} className="text-4xl font-bold text-foreground mt-12 mb-6">
                      {text}
                    </h1>
                  )
                } else if (level === 2) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-foreground mt-10 mb-4">
                      {text}
                    </h2>
                  )
                } else if (level === 3) {
                  return (
                    <h3 key={index} className="text-xl font-bold text-foreground mt-8 mb-3">
                      {text}
                    </h3>
                  )
                }
              }

              if (paragraph.startsWith("```")) {
                const codeContent = paragraph.replace(/```\w*\n?/, "").replace(/\n```/, "")
                return (
                  <pre key={index} className="bg-muted/50 border border-border rounded-lg p-6 overflow-x-auto mb-6">
                    <code className="text-sm text-foreground font-mono whitespace-pre-wrap">{codeContent}</code>
                  </pre>
                )
              }

              if (paragraph.startsWith("-") || paragraph.startsWith("•")) {
                const items = paragraph.split("\n").filter((line) => line.trim())
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 text-muted-foreground">
                    {items.map((item, i) => (
                      <li key={i} className="ml-4">
                        {item.replace(/^[-•]\s/, "")}
                      </li>
                    ))}
                  </ul>
                )
              }

              if (paragraph.match(/^\d+\./)) {
                const items = paragraph.split("\n").filter((line) => line.trim())
                return (
                  <ol key={index} className="list-decimal list-inside space-y-2 text-muted-foreground">
                    {items.map((item, i) => (
                      <li key={i} className="ml-4">
                        {item.replace(/^\d+\.\s/, "")}
                      </li>
                    ))}
                  </ol>
                )
              }

              return (
                <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-t border-b border-border/50 py-8 mb-12"
          >
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/30 text-foreground">
                  <Tag className="w-4 h-4" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {relatedProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8 mb-12"
            >
              <h3 className="text-2xl font-bold text-foreground">Related Projects</h3>

              <div className="grid gap-6">
                {relatedProjects.map((project) => (
                  <Link key={project.id} href={`/upcoming#${project.id}`}>
                    <div className="p-6 rounded-xl glass border border-border/50 hover:border-accent/50 transition-all duration-300 cursor-pointer hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors mb-1">
                            {project.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">{project.tagline}</p>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium whitespace-nowrap ml-4">
                          {project.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-accent" />
                        <span className="text-xs text-accent font-medium">Launching: {project.launchDate}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          {relatedPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-foreground">Related Articles</h3>

              <div className="grid gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                    <div className="p-6 rounded-xl glass border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]">
                      <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{relatedPost.excerpt}</p>
                      <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
                        <span>{relatedPost.date}</span>
                        <span>{relatedPost.readTime} min read</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </article>

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
