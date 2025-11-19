"use client"

import { useState } from "react"
import { AgentStatusPanel } from "@/components/agent-status-panel"
import { RecommendationsWidget } from "@/components/recommendations-widget"
import { PortfolioMetrics } from "@/components/portfolio-metrics"
import { LocationsTable } from "@/components/locations-table"
import { AgentCollaboration } from "@/components/agent-collaboration"
import { InteractiveDemo } from "@/components/interactive-demo"

export function DashboardContent() {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null)

  return (
    <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
      {/* Left Sidebar - Agent Status */}
      <div className="space-y-6">
        <AgentStatusPanel />
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        {/* Top Recommendations */}
        <RecommendationsWidget selectedLocation={selectedLocation} />

        {/* Portfolio Metrics */}
        <PortfolioMetrics />

        {/* Agent Collaboration */}
        <AgentCollaboration />

        <InteractiveDemo />

        {/* Locations Table */}
        <LocationsTable onLocationSelect={setSelectedLocation} selectedLocation={selectedLocation} />
      </div>
    </div>
  )
}
