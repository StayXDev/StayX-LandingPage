import { MetricWidget } from "@/components/metric-widget"
import { portfolioMetrics } from "@/lib/mock-data"

export function PortfolioMetrics() {
  return (
    <div>
      <h2 className="mb-4 font-display text-xl font-semibold">Portfolio Overview</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricWidget
          title="Total Labor Cost"
          value={`$${(portfolioMetrics.totalLaborCost / 1000).toFixed(0)}K`}
          subtitle="Across all locations"
          trend="down"
          trendValue={`${portfolioMetrics.laborVariance}%`}
          variant="success"
        />
        <MetricWidget
          title="Compliance Score"
          value={`${portfolioMetrics.avgComplianceScore}%`}
          subtitle="Network average"
          trend="up"
          trendValue="2.3%"
          variant="success"
        />
        <MetricWidget
          title="Waste Percentage"
          value={`${portfolioMetrics.avgWastePercentage}%`}
          subtitle="Of total inventory"
          trend="down"
          trendValue="0.8%"
          variant="warning"
        />
        <MetricWidget
          title="Reputation Score"
          value={portfolioMetrics.avgReputationScore.toFixed(1)}
          subtitle="Average rating"
          trend="up"
          trendValue="0.2"
          variant="success"
        />
        <MetricWidget
          title="Labor Efficiency"
          value={`${portfolioMetrics.avgLaborEfficiency}%`}
          subtitle="Productivity rate"
          trend="up"
          trendValue="3.1%"
          variant="default"
        />
        <MetricWidget
          title="YTD Savings"
          value={`$${(portfolioMetrics.totalSavingsYTD / 1000).toFixed(0)}K`}
          subtitle="Total cost reduction"
          variant="success"
        />
        <MetricWidget
          title="Active Alerts"
          value={portfolioMetrics.activeAlerts}
          subtitle="Require attention"
          variant="warning"
        />
        <MetricWidget title="Locations" value="8" subtitle="Under management" variant="default" />
      </div>
    </div>
  )
}
