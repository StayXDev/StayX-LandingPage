import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" })

export const metadata: Metadata = {
  title: {
    default: "StayX - AI Agents for Multi-Location Franchise Operations",
    template: "%s | StayX",
  },
  description:
    "Transform your franchise operations with 6 autonomous AI agents. Save $50K-$200K annually with intelligent scheduling, compliance, waste reduction, and cost optimization. 14-day free trial.",
  keywords: [
    "franchise management",
    "AI agents",
    "multi-location operations",
    "franchise automation",
    "scheduling optimization",
    "compliance management",
    "cost reduction",
    "franchise software",
  ],
  authors: [{ name: "StayX Team" }],
  creator: "StayX",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stayx.ai",
    title: "StayX - AI Agents for Multi-Location Franchise Operations",
    description:
      "Transform your franchise operations with 6 autonomous AI agents. Save $50K-$200K annually with intelligent automation.",
    siteName: "StayX",
  },
  twitter: {
    card: "summary_large_image",
    title: "StayX - AI Agents for Franchise Operations",
    description: "Save $50K-$200K annually with autonomous AI agents for your franchise network.",
    creator: "@stayx",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0A0B1A",
  width: "device-width",
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
