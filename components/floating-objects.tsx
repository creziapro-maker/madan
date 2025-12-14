"use client"

import { useEffect, useState } from "react"

export function FloatingObjects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large Gradient Orb - Background */}
      <div
        className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, oklch(0.75 0.15 195 / 0.4) 0%, transparent 70%)",
          transform: `translate(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.5}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />

      {/* Medium Orb - Midground */}
      <div
        className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, oklch(0.7 0.18 280 / 0.5) 0%, transparent 70%)",
          transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px)`,
          transition: "transform 0.2s ease-out",
        }}
      />

      {/* Floating Glass Panels */}
      <div
        className="absolute top-1/3 left-1/4 w-32 h-32 glass rounded-2xl animate-float"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) rotate(12deg)`,
          animationDelay: "0s",
        }}
      />

      <div
        className="absolute top-1/2 right-1/4 w-24 h-24 glass rounded-xl animate-float"
        style={{
          transform: `translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px) rotate(-8deg)`,
          animationDelay: "2s",
        }}
      />

      <div
        className="absolute bottom-1/3 left-1/3 w-20 h-20 glass rounded-lg animate-float"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) rotate(20deg)`,
          animationDelay: "4s",
        }}
      />

      {/* Glowing Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.75 0.15 195)" stopOpacity="0" />
            <stop offset="50%" stopColor="oklch(0.75 0.15 195)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="oklch(0.75 0.15 195)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="10%" y1="20%" x2="40%" y2="80%" stroke="url(#lineGradient)" strokeWidth="1" />
        <line x1="60%" y1="10%" x2="90%" y2="60%" stroke="url(#lineGradient)" strokeWidth="1" />
      </svg>

      {/* Dot Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(oklch(0.75 0.15 195) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  )
}
