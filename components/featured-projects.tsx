"use client"

import { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Monomode",
    category: "Clothing Store App",
    description: "Premium fashion e-commerce platform with seamless shopping experience",
    image: "/fashion-clothing-app-dark-modern.jpg",
    link: "https://play.google.com/store/apps/details?id=io.github.monomode",
    gradient: "from-cyan-500/20 to-blue-500/20",
    badge: "Live",
  },
  {
    id: 2,
    title: "DailyKart",
    category: "Grocery Delivery App",
    description: "Fast and reliable grocery delivery with real-time tracking",
    image: "/grocery-delivery-app-modern-dark.jpg",
    link: "https://play.google.com/store/apps/details?id=com.dailykart.dailykart.app",
    gradient: "from-green-500/20 to-emerald-500/20",
    badge: "Live",
  },
  {
    id: 3,
    title: "GSC Coach",
    category: "Sports Coaching Platform",
    description: "Professional sports coaching and management system",
    image: "/sports-coaching-app-dark-modern.jpg",
    link: "https://play.google.com/store/apps/details?id=com.novafuze.coach",
    gradient: "from-orange-500/20 to-red-500/20",
    badge: "Live",
  },
  {
    id: 4,
    title: "GSC User",
    category: "Sports User App",
    description: "Connect, train, and compete with athletes in your sports community",
    image: "/sports-partner-finder-app-dark-modern.jpg",
    link: "#",
    gradient: "from-blue-500/20 to-indigo-500/20",
    badge: "Live",
  },
  {
    id: 5,
    title: "PlayNexa",
    category: "Sports Partner Finder",
    description: "AI-powered platform to find sports partners and organize games near you",
    image: "/sports-partner-finder-app-dark-modern.jpg",
    link: "#",
    gradient: "from-cyan-500/20 to-blue-500/20",
    badge: "Upcoming",
  },
  {
    id: 6,
    title: "Nuvrexio",
    category: "AI Code Generator",
    description: "Revolutionary AI-powered Flutter code generation platform",
    image: "/ai-code-generator-futuristic-dark.jpg",
    link: "#",
    gradient: "from-purple-500/20 to-pink-500/20",
    badge: "Upcoming",
  },
  {
    id: 7,
    title: "Monomode.in",
    category: "E-Commerce Website",
    description: "Premium fashion clothing store with responsive design and checkout integration",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=1200&h=900&fit=crop",
    link: "https://monomode.in",
    gradient: "from-rose-500/20 to-pink-500/20",
    badge: "Live",
  },
  {
    id: 8,
    title: "Monomode Admin",
    category: "Admin Dashboard",
    description: "Comprehensive clothing admin dashboard for inventory and order management",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=900&fit=crop",
    link: "https://monomode.space",
    gradient: "from-amber-500/20 to-orange-500/20",
    badge: "Live",
  },
  {
    id: 9,
    title: "DailyKart Landing",
    category: "Grocery Website",
    description: "Responsive grocery landing page with product showcase and online ordering",
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=1200&h=900&fit=crop",
    link: "https://dailykart.io",
    gradient: "from-emerald-500/20 to-teal-500/20",
    badge: "Live",
  },
  {
    id: 10,
    title: "DailyKart Admin",
    category: "Merchant Dashboard",
    description: "Grocery admin dashboard with delivery tracking and inventory management",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=900&fit=crop",
    link: "https://dailykart.space",
    gradient: "from-lime-500/20 to-green-500/20",
    badge: "Live",
  },
  {
    id: 11,
    title: "TEDx GCEM",
    category: "Event Website",
    description: "Dynamic event website for TEDx conference with speaker profiles and registration",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=900&fit=crop",
    link: "https://tedxgcem.com",
    gradient: "from-red-500/20 to-rose-500/20",
    badge: "Live",
  },
  {
    id: 12,
    title: "Protrainix",
    category: "Educational Academy",
    description: "Learning management system for online courses with student progress tracking",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=900&fit=crop",
    link: "https://protrainix.in",
    gradient: "from-indigo-500/20 to-purple-500/20",
    badge: "Live",
  },
  {
    id: 13,
    title: "HFB Academy",
    category: "Sports Tech Platform",
    description: "Sports training academy with class booking and performance analytics",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=900&fit=crop",
    link: "https://hfbacademy.in",
    gradient: "from-cyan-500/20 to-teal-500/20",
    badge: "Live",
  },
]

export function FeaturedProjects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const autoScrollTimer = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!isAutoScrolling) return

    autoScrollTimer.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length)
    }, 5000)

    return () => {
      if (autoScrollTimer.current) {
        clearInterval(autoScrollTimer.current)
      }
    }
  }, [isAutoScrolling])

  const scroll = (direction: "left" | "right") => {
    setIsAutoScrolling(false)
    const newIndex =
      direction === "left"
        ? (activeIndex - 1 + projects.length) % projects.length
        : (activeIndex + 1) % projects.length
    setActiveIndex(newIndex)

    setTimeout(() => setIsAutoScrolling(true), 3000)
  }

  const goToIndex = (index: number) => {
    setIsAutoScrolling(false)
    setActiveIndex(index)
    setTimeout(() => setIsAutoScrolling(true), 3000)
  }

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-primary font-mono text-sm mb-2 tracking-wider">FEATURED WORK</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Selected Projects
              </span>
            </h2>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full glass transition-all duration-300 hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/20"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-1 px-3 py-2 rounded-full glass">
              <div className="flex gap-1">
                {projects.map((_, i) => (
                  <motion.div
                    key={i}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      i === activeIndex ? "bg-primary w-6" : "bg-muted-foreground/30 w-1.5",
                    )}
                  />
                ))}
              </div>
            </div>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full glass transition-all duration-300 hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/20"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Projects Carousel */}
        <div ref={containerRef} className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: `calc(-${activeIndex * (100 / 3)}%)` }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className={cn(
                    "group relative rounded-2xl overflow-hidden transition-all duration-500",
                    "glass border border-transparent hover:border-primary/30",
                    hoveredId === project.id && "scale-[1.02]",
                  )}
                  style={{
                    transform:
                      hoveredId === project.id
                        ? "perspective(1000px) rotateY(-5deg) rotateX(5deg)"
                        : "perspective(1000px) rotateY(0deg) rotateX(0deg)",
                  }}
                >
                  {/* Project Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-t",
                        project.gradient,
                        "opacity-60 group-hover:opacity-80 transition-opacity duration-300",
                      )}
                    />

                    {/* Holographic Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Project Info */}
                  <div className="p-6 relative">
                    <div className="flex items-start justify-between mb-2">
                      <p className="text-xs font-mono text-primary tracking-wider uppercase">{project.category}</p>
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className={cn(
                          "text-xs font-mono px-2 py-1 rounded-full",
                          project.badge === "Live"
                            ? "bg-green-500/20 text-green-400 border border-green-500/30"
                            : "bg-purple-500/20 text-purple-400 border border-purple-500/30",
                        )}
                      >
                        {project.badge}
                      </motion.span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{project.description}</p>

                    {project.badge === "Live" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.badge === "Upcoming" && (
                      <button className="inline-flex items-center gap-2 text-sm text-muted-foreground cursor-default">
                        <span className="text-xs">Coming Soon...</span>
                      </button>
                    )}
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8 md:hidden">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                activeIndex === index ? "bg-primary w-6" : "bg-muted-foreground/30",
              )}
            />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
