"use client"

import type React from "react"

import { useState, useRef } from "react"
import { cn } from "@/lib/utils"
import { Send, Mail, Linkedin, Github, Clock, CheckCircle, Phone, AlertCircle } from "lucide-react"
import { sendContactEmail } from "@/app/actions/send-email"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const result = await sendContactEmail(formData)

      if (result.success) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", subject: "", message: "" })

        setTimeout(() => {
          setIsSubmitted(false)
        }, 3000)
      } else {
        setError(result.error || "Failed to send message. Please try again.")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const inputClasses = (field: string) =>
    cn(
      "w-full px-6 py-4 rounded-xl bg-muted/30 border transition-all duration-300",
      "text-foreground placeholder:text-muted-foreground",
      "focus:outline-none",
      focusedField === field ? "border-primary bg-muted/50 shadow-[0_0_20px_rgba(0,212,255,0.15)]" : "border-border",
    )

  return (
    <section className="relative py-16" aria-label="Contact Madan Rajendra for Flutter development and AI projects">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <aside className="lg:col-span-2 space-y-8" aria-label="Contact information">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Hire a Flutter Developer & AI Engineer</h2>
              <p className="text-muted-foreground leading-relaxed">
                Looking for an expert Flutter developer for your mobile app project? Need AI integration or custom
                software development?
                {
                  "I'm available for freelance projects, consulting, and full-time opportunities. Let's discuss how I can help bring your ideas to life."
                }
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <a
                href="mailto:madancse.gcem@gmail.com"
                className="group flex items-center gap-4 p-4 rounded-xl glass border border-transparent hover:border-primary/30 transition-all duration-300"
                aria-label="Send email to Madan Rajendra"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email for Project Inquiries</p>
                  <p className="text-foreground font-medium">madancse.gcem@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+919535318620"
                className="group flex items-center gap-4 p-4 rounded-xl glass border border-transparent hover:border-primary/30 transition-all duration-300"
                aria-label="Call Madan Rajendra"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone Number</p>
                  <p className="text-foreground font-medium">+91 9535318620</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/madan-r-a55867282"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl glass border border-transparent hover:border-primary/30 transition-all duration-300"
                aria-label="Connect with Madan Rajendra on LinkedIn"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Professional Network</p>
                  <p className="text-foreground font-medium">Connect on LinkedIn</p>
                </div>
              </a>

              <a
                href="https://github.com/Madancse013"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl glass border border-transparent hover:border-primary/30 transition-all duration-300"
                aria-label="View Madan Rajendra's code on GitHub"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Github className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Open Source & Code Samples</p>
                  <p className="text-foreground font-medium">View GitHub Profile</p>
                </div>
              </a>
            </div>

            <div className="p-6 rounded-xl glass border border-border/50">
              <h3 className="text-foreground font-medium mb-4">Services Offered</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Flutter Mobile App Development (iOS & Android)</li>
                <li>• Firebase Backend & Cloud Functions</li>
                <li>• AI/ML Integration & LLM Applications</li>
                <li>• Full Stack Web Development (Next.js, React)</li>
                <li>• Technical Consulting & Architecture Review</li>
                <li>• MVP Development for Startups</li>
              </ul>
            </div>

            {/* Additional Info */}
            <div className="p-6 rounded-xl glass border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-primary" aria-hidden="true" />
                <span className="text-foreground font-medium">Response Time</span>
              </div>
              <p className="text-sm text-muted-foreground">
                I typically respond within 24-48 hours. For urgent Flutter development projects or AI consulting
                inquiries, please mention it in the subject line.
              </p>
            </div>
          </aside>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="relative p-8 md:p-10 rounded-3xl glass-strong border border-primary/20">
              {/* Animated Border Glow */}
              <div
                className="absolute inset-0 rounded-3xl opacity-50 pointer-events-none"
                style={{
                  background: "linear-gradient(45deg, transparent, rgba(0, 212, 255, 0.1), transparent)",
                  animation: "gradient-shift 4s ease infinite",
                  backgroundSize: "200% 200%",
                }}
              />

              {/* Success State */}
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6 animate-pulse-glow">
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">{"Thank you for reaching out. I'll get back to you soon."}</p>
                </div>
              ) : error ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-destructive/20 flex items-center justify-center mb-6">
                    <AlertCircle className="w-10 h-10 text-destructive" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Oops!</h3>
                  <p className="text-muted-foreground mb-6">{error}</p>
                  <button
                    onClick={() => setError(null)}
                    className="px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Try Again
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="relative space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        className={inputClasses("name")}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        className={inputClasses("email")}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("subject")}
                      onBlur={() => setFocusedField(null)}
                      className={inputClasses("subject")}
                      placeholder="Project inquiry"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      rows={5}
                      className={cn(inputClasses("message"), "resize-none")}
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl",
                      "bg-primary text-primary-foreground font-medium",
                      "transition-all duration-300",
                      "hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(0,212,255,0.4)]",
                      "disabled:opacity-70 disabled:cursor-not-allowed",
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* Floating Particles */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary/20 animate-float" />
              <div
                className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-accent/20 animate-float"
                style={{ animationDelay: "2s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
