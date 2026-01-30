"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  avatar: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    name: "Mohan",
    role: "Founder",
    company: "Monomode",
    content: "Madan really understood what we were trying to build with Monomode. He didn't just build the app; he helped us figure out the best way to handle our fashion inventory in Flutter. The final product is smooth, and our customers love the feel of it.",
    avatar: "M",
    rating: 5,
  },
  {
    name: "Darshith D",
    role: "Founder & CEO",
    company: "DailyKart",
    content: "The grocery delivery space is tough, but Madan made the tech side look easy. He set up a Firebase backend that actually scales when we have spikes in orders. He's fast, reliable, and actually thinks about the business side of things too.",
    avatar: "DD",
    rating: 5,
  },
  {
    name: "Vamsi",
    role: "Founder",
    company: "NovaFuze",
    content: "Building NovaFuze with Madan was a great experience. He's got a real knack for solving the 'impossible' problems in sports tech. Whether it's complex scheduling or real-time updates, he just gets it done.",
    avatar: "V",
    rating: 5,
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

export function TestimonialsSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-wider uppercase">TESTIMONIALS</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Trusted By Innovators
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Real feedback from founders, CTOs, and product leaders I've worked with
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
              onMouseEnter={(e) => {
                const el = e.currentTarget.querySelector(".card-glow") as HTMLElement
                if (el) el.style.opacity = "1"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget.querySelector(".card-glow") as HTMLElement
                if (el) el.style.opacity = "0"
              }}
            >
              <div className="relative p-8 rounded-2xl glass border border-transparent hover:border-primary/30 transition-all duration-300">
                <div
                  className="card-glow absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 -z-10 blur-xl"
                  style={{
                    background: "radial-gradient(800px circle at 50% 50%, rgba(6, 182, 212, 0.2), transparent 40%)",
                  }}
                />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-400 flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
