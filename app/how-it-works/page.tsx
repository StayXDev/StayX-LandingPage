"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedHowItWorks } from "@/components/animated-how-it-works"

// Note: metadata export not available in client components, handled via layout
export default function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <AnimatedHowItWorks />
      <Footer />
    </div>
  )
}
