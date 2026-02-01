"use client"

import { motion } from "framer-motion"
import { MessageSquare } from "lucide-react"

export function WhatsAppFAB() {
  return (
    <motion.a
      href="https://wa.me/919535318620"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-shadow hover:shadow-[0_0_30px_rgba(37,211,102,0.6)]"
      aria-label="Contact on WhatsApp"
    >
      <div className="relative">
        <MessageSquare className="h-8 w-8 fill-current" />
        <span className="absolute -right-1 -top-1 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex h-4 w-4 rounded-full bg-white/20"></span>
        </span>
      </div>
    </motion.a>
  )
}
