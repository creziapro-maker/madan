import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display, JetBrains_Mono, Great_Vibes } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" })
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400", variable: "--font-great-vibes" })

export const metadata: Metadata = {
  title: "Madan Rajendra | Hire Top Flutter Developer, AI Engineer & Software Architect | Premium Tech Talent",
  description:
    "Madan Rajendra - Award-winning Flutter developer, AI engineer, and software architect available for hire. Expert in building scalable mobile apps, AI-powered platforms, and MVP development. Founder of Nuvrexio, NovaFuze LLP, and MonoMode. Available for freelance projects, full-time roles, and tech consulting. 4+ production apps on Google Play Store.",
  generator: "v0.app",
  keywords: [
    "Madan Rajendra",
    "hire Flutter developer",
    "hire software engineer",
    "hire AI engineer",
    "hire mobile app developer",
    "Flutter developer for hire",
    "freelance Flutter developer",
    "software architect for hire",
    "tech talent India",
    "remote developer available",
    "hire Madan Rajendra",
    "Nuvrexio",
    "NovaFuze LLP",
    "MonoMode",
    "Flutter app development",
    "Flutter expert",
    "Flutter specialist",
    "cross-platform mobile apps",
    "AI engineer for hire",
    "machine learning engineer",
    "Firebase backend expert",
    "Next.js full stack developer",
    "React Native developer",
    "Dart programming expert",
    "iOS Android developer",
    "custom app development",
    "MVP development services",
    "startup tech development",
    "AI code generation",
    "LLM integration",
    "GPT integration services",
    "cloud architecture",
    "scalable system design",
    "e-commerce app development",
    "sports app development",
    "delivery app development",
    "SaaS development",
    "web3 development",
    "blockchain integration",
    "freelance software developer",
    "contract software engineer",
    "tech consulting services",
    "product architecture",
    "system design",
    "performance optimization",
    "database design Firebase",
    "DevOps engineer",
    "CI/CD pipeline setup",
    "Google Play Store apps",
    "App Store apps",
    "mobile UI/UX design",
    "responsive web design",
    "project-based hiring",
    "dedicated developer",
    "development team",
    "tech startup advisor",
    "software development company",
    "application developer",
    "full stack engineer",
    "backend engineer",
    "frontend developer",
  ],
  authors: [{ name: "Madan Rajendra", url: "https://madanrajendra.com" }],
  creator: "Madan Rajendra",
  publisher: "Madan Rajendra",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Madan Rajendra | Hire Top Flutter Developer & AI Engineer",
    description:
      "Hire Madan Rajendra for premium Flutter development, AI engineering, and custom app development. Available for full-time, freelance, and project-based work.",
    siteName: "Madan Rajendra - Software Engineer & AI Architect",
    url: "https://madanrajendra.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Madan Rajendra | Flutter Developer & AI Engineer",
    description: "Premium tech talent - Flutter expert, AI engineer, and software architect. Available for hire.",
    creator: "@madanrajendra",
  },
  alternates: {
    canonical: "https://madanrajendra.com",
  },
  category: "technology",
  verification: {
    google: "your-google-search-console-verification-code",
  },
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
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Madan Rajendra",
    url: "https://madanrajendra.com",
    image: "https://madanrajendra.com/og-image.png",
    description: "Flutter Developer, AI Engineer, and Software Architect",
    sameAs: [
      "https://github.com/Madancse013",
      "https://www.linkedin.com/in/madan-r-a55867282",
    ],
    jobTitle: [
      "Founder of Nuvrexio",
      "Founder of NovaFuze LLP",
      "Founder of MonoMode",
      "Software Engineer",
      "Application Developer",
    ],
    knowsAbout: [
      "Flutter",
      "Dart",
      "Firebase",
      "Next.js",
      "React",
      "AI/ML",
      "LLM Integration",
      "Mobile App Development",
      "Full Stack Development",
    ],
    workLocation: {
      "@type": "City",
      name: "Bengaluru, India",
    },
  }

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <meta property="og:image" content="https://madanrajendra.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="https://madanrajendra.com/og-image.png" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} ${greatVibes.variable} font-sans antialiased bg-slate-950`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
