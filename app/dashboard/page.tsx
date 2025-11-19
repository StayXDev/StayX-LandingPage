import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DashboardContent } from "@/components/dashboard-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interactive Demo - See StayX AI Agents in Action",
  description:
    "Experience the StayX dashboard with live AI agents, real-time recommendations, and portfolio metrics. See how autonomous agents optimize franchise operations.",
}

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1 bg-muted/30">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="font-display text-3xl font-bold">StayX Operations Dashboard</h1>
            <p className="mt-2 text-muted-foreground">
              Live simulation of autonomous AI agents optimizing your franchise network
            </p>
          </div>
          <DashboardContent />
        </div>
      </main>
      <Footer />
    </div>
  )
}
