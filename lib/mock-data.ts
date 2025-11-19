export interface Location {
  id: number
  name: string
  laborCost: number
  laborVariance: number
  complianceScore: number
  wastePercentage: number
  reputationScore: number
  laborEfficiency: number
  status: "healthy" | "warning" | "alert"
}

export interface Agent {
  id: string
  name: string
  specialty: string
  status: "active" | "analyzing" | "alert"
  currentTask: string
  confidence: number
  icon: string
  description: string
}

export interface Recommendation {
  id: string
  agentId: string
  agentName: string
  title: string
  description: string
  impact: string
  savings: number
  priority: "high" | "medium" | "low"
  locationId?: number
}

export const locations: Location[] = [
  {
    id: 1,
    name: "Downtown Seattle",
    laborCost: 42500,
    laborVariance: -8,
    complianceScore: 98,
    wastePercentage: 4.2,
    reputationScore: 4.8,
    laborEfficiency: 92,
    status: "healthy",
  },
  {
    id: 2,
    name: "Portland East",
    laborCost: 38200,
    laborVariance: 5,
    complianceScore: 94,
    wastePercentage: 6.1,
    reputationScore: 4.6,
    laborEfficiency: 88,
    status: "warning",
  },
  {
    id: 3,
    name: "San Francisco Marina",
    laborCost: 55800,
    laborVariance: 12,
    complianceScore: 91,
    wastePercentage: 5.8,
    reputationScore: 4.7,
    laborEfficiency: 85,
    status: "alert",
  },
  {
    id: 4,
    name: "Los Angeles Downtown",
    laborCost: 48900,
    laborVariance: -3,
    complianceScore: 96,
    wastePercentage: 4.9,
    reputationScore: 4.9,
    laborEfficiency: 94,
    status: "healthy",
  },
  {
    id: 5,
    name: "San Diego Gaslamp",
    laborCost: 41200,
    laborVariance: 15,
    complianceScore: 88,
    wastePercentage: 8.3,
    reputationScore: 4.4,
    laborEfficiency: 81,
    status: "alert",
  },
  {
    id: 6,
    name: "Phoenix Central",
    laborCost: 36500,
    laborVariance: -5,
    complianceScore: 97,
    wastePercentage: 3.8,
    reputationScore: 4.7,
    laborEfficiency: 93,
    status: "healthy",
  },
  {
    id: 7,
    name: "Denver Tech Center",
    laborCost: 39800,
    laborVariance: 8,
    complianceScore: 93,
    wastePercentage: 5.4,
    reputationScore: 4.5,
    laborEfficiency: 87,
    status: "warning",
  },
  {
    id: 8,
    name: "Austin Downtown",
    laborCost: 40500,
    laborVariance: -2,
    complianceScore: 95,
    wastePercentage: 4.6,
    reputationScore: 4.8,
    laborEfficiency: 91,
    status: "healthy",
  },
]

export const agents: Agent[] = [
  {
    id: "scheduling",
    name: "Scheduling Agent",
    specialty: "Workforce Optimization",
    status: "active",
    currentTask: "Analyzing Location #3 schedule patterns...",
    confidence: 94,
    icon: "calendar",
    description:
      "Optimizes staff schedules across all locations to reduce labor costs while maintaining service quality",
  },
  {
    id: "compliance",
    name: "Compliance Agent",
    specialty: "Regulatory Adherence",
    status: "analyzing",
    currentTask: "Reviewing Location #1 license renewals...",
    confidence: 98,
    icon: "shield-check",
    description:
      "Monitors regulations, tracks certifications, and ensures 100% compliance across your franchise network",
  },
  {
    id: "waste",
    name: "Waste Reduction Agent",
    specialty: "Cost Efficiency",
    status: "alert",
    currentTask: "Location #5 waste exceeds baseline by 23%",
    confidence: 89,
    icon: "trash-2",
    description: "Identifies waste patterns and provides actionable insights to reduce food waste and inventory costs",
  },
  {
    id: "reputation",
    name: "Reputation Agent",
    specialty: "Brand Management",
    status: "active",
    currentTask: "Monitoring 847 reviews across platforms...",
    confidence: 91,
    icon: "star",
    description: "Tracks online reputation, analyzes customer feedback, and alerts you to emerging issues",
  },
  {
    id: "cost",
    name: "Cost Optimization Agent",
    specialty: "Financial Intelligence",
    status: "active",
    currentTask: "Identifying cost reduction opportunities...",
    confidence: 87,
    icon: "trending-down",
    description: "Analyzes spending patterns and vendor costs to find savings opportunities across operations",
  },
  {
    id: "labor",
    name: "Labor Efficiency Agent",
    specialty: "Performance Analytics",
    status: "analyzing",
    currentTask: "Calculating productivity metrics for Q4...",
    confidence: 92,
    icon: "users",
    description: "Tracks labor productivity and provides insights to maximize team efficiency and reduce overtime",
  },
]

export const recommendations: Recommendation[] = [
  {
    id: "rec-1",
    agentId: "scheduling",
    agentName: "Scheduling Agent",
    title: "Optimize Location #3 Schedule",
    description:
      "Current schedule has 12% overtime and peak hour understaffing. Recommended schedule reduces costs while improving coverage.",
    impact: "Save $2,400/month",
    savings: 2400,
    priority: "high",
    locationId: 3,
  },
  {
    id: "rec-2",
    agentId: "compliance",
    agentName: "Compliance Agent",
    title: "Location #1 License Renewal Due",
    description: "Health permit expires in 45 days. Application requires 30-day processing time.",
    impact: "Avoid compliance violation",
    savings: 0,
    priority: "high",
    locationId: 1,
  },
  {
    id: "rec-3",
    agentId: "waste",
    agentName: "Waste Reduction Agent",
    title: "Location #5 Food Waste Above Baseline",
    description: "Waste has increased 23% over 3 months. Analysis shows overproduction during slow periods.",
    impact: "Reduce waste by $1,800/month",
    savings: 1800,
    priority: "high",
    locationId: 5,
  },
  {
    id: "rec-4",
    agentId: "reputation",
    agentName: "Reputation Agent",
    title: "Address Service Speed Complaints",
    description:
      "12 recent reviews mention slow service at Location #2. Correlates with understaffing during peak hours.",
    impact: "Improve reputation score",
    savings: 0,
    priority: "medium",
    locationId: 2,
  },
  {
    id: "rec-5",
    agentId: "cost",
    agentName: "Cost Optimization Agent",
    title: "Vendor Contract Renegotiation",
    description: "Current food supplier pricing is 8% above market rate. Alternative vendors identified.",
    impact: "Save $3,200/month across all locations",
    savings: 3200,
    priority: "medium",
  },
]

export const portfolioMetrics = {
  totalLaborCost: 343400,
  laborVariance: 3.2,
  avgComplianceScore: 94.0,
  avgWastePercentage: 5.4,
  avgReputationScore: 4.7,
  avgLaborEfficiency: 88.9,
  totalSavingsYTD: 156800,
  activeAlerts: 3,
}

export const testimonials = [
  {
    quote:
      "StayX has completely transformed how we manage our 12 locations. Labor costs are down 28% and compliance is no longer a constant worry.",
    author: "Sarah Chen",
    title: "Multi-Unit Franchise Owner",
    company: "Quick Serve Restaurant Chain",
  },
  {
    quote:
      "The autonomous agents work 24/7 so I don't have to. I get actionable recommendations every morning instead of sifting through spreadsheets.",
    author: "Michael Rodriguez",
    title: "Regional Director",
    company: "Fitness Franchise Network",
  },
  {
    quote: "We've saved over $180,000 in the first year. The AI catches issues before they become expensive problems.",
    author: "Jennifer Park",
    title: "Operations Manager",
    company: "Retail Franchise Group",
  },
]
