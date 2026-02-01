import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/providers/auth-provider"
import { WhatsAppFAB } from "@/components/whatsapp-fab"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "AI Flutter App Generator | Production-Grade Flutter Apps in Minutes",
  description: "Generate production-ready Flutter + Firebase applications using AI from a simple prompt.",
}

export const viewport: Viewport = {
  themeColor: "#0a0f1a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-slate-950 text-slate-50`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <AuthProvider>
            <main className="min-h-screen">
              {children}
            </main>
            <Analytics />
            <WhatsAppFAB />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
