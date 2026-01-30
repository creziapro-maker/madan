"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Instagram, Youtube, Zap, TrendingUp, Rocket, ArrowRight } from "lucide-react"
import Link from "next/link"

interface Package {
  name: string
  price: string
  description: string
  target: string
  instagram: {
    reels: string
    posters: string
    stories: string
    support: string
  }
  youtube: {
    ads: string
    optimization: string
  }
  support: string[]
  gradient: string
  glowColor: string
  popular?: boolean
}

const packages: Package[] = [
  {
    name: "Basic Visibility Package",
    price: "₹15,000",
    description: "Best for small & local businesses starting digital marketing",
    target: "Online presence & Consistent posting",
    instagram: {
      reels: "8 AI-generated reels (8s each)",
      posters: "6 professional posters",
      stories: "8–10 Instagram stories",
      support: "Captions & hashtag support",
    },
    youtube: {
      ads: "1 AI-generated YouTube video ad (10s)",
      optimization: "Basic brand alignment",
    },
    support: ["Monthly content planning"],
    gradient: "from-cyan-500 to-blue-500",
    glowColor: "rgba(6, 182, 212, 0.2)",
  },
  {
    name: "Business Growth Package",
    price: "₹25,000",
    description: "Ideal for brands focused on growth and leads",
    target: "Engagement, Reach & Lead generation",
    instagram: {
      reels: "12 AI-generated reels (8s each)",
      posters: "8 professional posters",
      stories: "12–15 Instagram stories",
      support: "Advanced captions & hashtag strategy",
    },
    youtube: {
      ads: "2 AI-generated YouTube video ads (10s each)",
      optimization: "Script, hook & CTA optimization",
    },
    support: ["Monthly content calendar", "Posting-time optimization"],
    gradient: "from-purple-500 to-pink-500",
    glowColor: "rgba(168, 85, 247, 0.2)",
    popular: true,
  },
  {
    name: "Brand Dominance Package",
    price: "₹30,000",
    description: "For brands that want aggressive marketing & authority",
    target: "Aggressive marketing & Authority",
    instagram: {
      reels: "16 AI-generated reels (8s each)",
      posters: "12 premium posters",
      stories: "20+ Instagram stories",
      support: "High-conversion captions & CTAs",
    },
    youtube: {
      ads: "3 AI-generated YouTube video ads (10s each)",
      optimization: "Ads Setup (Google & Instagram)",
    },
    support: ["Weekly optimization", "Performance insights", "Priority support"],
    gradient: "from-orange-500 to-rose-500",
    glowColor: "rgba(251, 113, 133, 0.2)",
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

export function PricingSection() {
  return (
    <section className="relative py-32 overflow-hidden" id="packages">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-wider uppercase">PRICING</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Social Media & Video Ads Packages
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Scale your brand with AI-powered content designed for maximum engagement and conversion.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-3 gap-8 mb-20"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative group ${pkg.popular ? "scale-105 z-10" : ""}`}
            >
              <div className="relative h-full p-8 rounded-3xl glass border border-primary/10 hover:border-primary/30 transition-all duration-500 flex flex-col">
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${pkg.gradient} mb-6`}>
                  {index === 0 ? <TrendingUp className="w-6 h-6 text-white" /> : 
                   index === 1 ? <Zap className="w-6 h-6 text-white" /> : 
                   <Rocket className="w-6 h-6 text-white" />}
                </div>

                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold">{pkg.price}</span>
                  <span className="text-muted-foreground">/ Month</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">{pkg.description}</p>

                <div className="space-y-6 flex-grow">
                  <div>
                    <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-foreground">
                      <Instagram className="w-4 h-4 text-pink-500" />
                      Instagram Content
                    </div>
                    <ul className="space-y-2">
                      {[pkg.instagram.reels, pkg.instagram.posters, pkg.instagram.stories, pkg.instagram.support].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-foreground">
                      <Youtube className="w-4 h-4 text-red-500" />
                      YouTube Ads
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {pkg.youtube.ads}
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {pkg.youtube.optimization}
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider text-[10px]">Support & Strategy</div>
                    <ul className="space-y-2">
                      {pkg.support.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-primary/10">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-4">Best For</div>
                  <div className="text-sm font-medium mb-6">{pkg.target}</div>
                  <Link
                    href="/contact"
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      pkg.popular 
                        ? "bg-primary text-primary-foreground hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]" 
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Notes and Add-ons */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl glass border border-primary/10"
          >
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-500" />
              Optional Add-Ons
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm border-b border-primary/5 pb-2">
                <span className="text-muted-foreground">Extra AI Reel</span>
                <span className="font-semibold">₹500 / reel</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-primary/5 pb-2">
                <span className="text-muted-foreground">Extra YouTube Ad</span>
                <span className="font-semibold">₹1,500 / video</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-primary/5 pb-2">
                <span className="text-muted-foreground">Daily DM Management</span>
                <span className="font-semibold">₹3,000 / month</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Advanced Analytics Report</span>
                <span className="font-semibold">₹2,000 / month</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl glass border border-primary/10"
          >
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-destructive">
              ⚠️ Important Notes
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-destructive shrink-0 mt-1.5" />
                Ad spend (Google / Instagram) is not included
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-destructive shrink-0 mt-1.5" />
                Influencer marketing is not included
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-destructive shrink-0 mt-1.5" />
                Daily DM / comment management is not included (Available as add-on)
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
