"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

interface Stat {
  value: number
  label: string
  suffix?: string
}

const stats: Stat[] = [
  { value: 4, label: "Applications Built", suffix: "" },
  { value: 2, label: "Years Experience", suffix: "+" },
  { value: 3, label: "Happy Clients", suffix: "+" },
  { value: 100, label: "Code Quality", suffix: "%" },
]

function CounterAnimation({ stat }: { stat: Stat }) {
  const [count, setCount] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const hasStarted = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true
          const target = stat.value
          const increment = target / 50

          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, 30)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.5 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [stat.value])

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center"
    >
      <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 neon-text mb-2">
        {count}
        {stat.suffix}
      </div>
      <p className="text-muted-foreground text-lg font-medium">{stat.label}</p>
    </motion.div>
  )
}

export function StatsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Impact By Numbers
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Delivering excellence through code, innovation, and dedication to creating transformative digital solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <CounterAnimation key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
