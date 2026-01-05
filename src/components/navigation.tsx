"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X, Rocket, User } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/providers/auth-provider"

const publicNavItems = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Documentation", href: "/docs" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()
  const { user } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent",
          isScrolled ? "bg-slate-950/80 backdrop-blur-md border-slate-800 py-3" : "py-6",
        )}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Rocket className="h-8 w-8 text-blue-500 transition-transform group-hover:rotate-12" />
            <span className="text-xl font-bold tracking-tight">FlutterAI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {publicNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            {user ? (
              <Link href="/dashboard">
                <Button variant="default" size="sm">
                  Dashboard
                </Button>
              </Link>
            ) : (
              <div className="flex items-center gap-4">
                <Link href="/login" className="text-sm font-medium text-slate-400 hover:text-white">
                  Log in
                </Link>
                <Link href="/signup">
                  <Button size="sm">Get Started</Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="md:hidden p-2 text-foreground">
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-500",
          isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl" />
        <div className="relative h-full flex flex-col items-center justify-center gap-8">
          {publicNavItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileOpen(false)}
              className="text-2xl font-medium text-slate-400 hover:text-white"
            >
              {item.name}
            </Link>
          ))}
          {user ? (
            <Link href="/dashboard" onClick={() => setIsMobileOpen(false)}>
              <Button size="lg">Dashboard</Button>
            </Link>
          ) : (
            <div className="flex flex-col gap-4 w-full px-12">
              <Link href="/login" className="w-full">
                <Button variant="outline" className="w-full" size="lg">Log in</Button>
              </Link>
              <Link href="/signup" className="w-full">
                <Button className="w-full" size="lg">Get Started</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
