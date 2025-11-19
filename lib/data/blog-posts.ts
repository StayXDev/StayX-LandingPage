import type { BlogPost } from "./types"
import { blogContent } from "./blog-content"

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How AI Agents Reduce Labor Costs by 30% in Multi-Location Franchises",
    excerpt:
      "Discover how autonomous AI agents analyze scheduling patterns, optimize staffing levels, and eliminate overtime across your franchise network.",
    date: "January 15, 2026",
    readTime: "5 min read",
    category: "Operations",
    slug: "ai-agents-reduce-labor-costs",
    content: blogContent["ai-agents-reduce-labor-costs"],
  },
  {
    id: "2",
    title: "The Hidden Cost of Manual Compliance Management",
    excerpt:
      "Learn why manual compliance tracking costs franchise owners $50K+ annually and how AI agents automate 95% of compliance tasks.",
    date: "January 8, 2026",
    readTime: "7 min read",
    category: "Compliance",
    slug: "hidden-cost-manual-compliance",
    content: blogContent["hidden-cost-manual-compliance"],
  },
  {
    id: "3",
    title: "5 Ways AI Agents Transform Franchise Reputation Management",
    excerpt:
      "See how AI agents monitor reviews, identify sentiment trends, and automatically generate response templates to protect your brand.",
    date: "December 28, 2025",
    readTime: "6 min read",
    category: "Reputation",
    slug: "ai-agents-reputation-management",
    content: blogContent["ai-agents-reputation-management"],
  },
  {
    id: "4",
    title: "From Spreadsheets to AI: A Franchise Owner's Journey",
    excerpt:
      "A case study of how one franchise owner eliminated 20+ hours of weekly manual work by implementing StayX's autonomous agents.",
    date: "December 20, 2025",
    readTime: "8 min read",
    category: "Case Study",
    slug: "spreadsheets-to-ai-journey",
    content: blogContent["spreadsheets-to-ai-journey"],
  },
  {
    id: "5",
    title: "Predictive Analytics: Forecasting Demand Across Locations",
    excerpt:
      "How AI agents use historical data and external factors to predict demand, optimize inventory, and reduce waste by 40%.",
    date: "December 12, 2025",
    readTime: "6 min read",
    category: "Analytics",
    slug: "predictive-analytics-demand-forecasting",
    content: blogContent["predictive-analytics-demand-forecasting"],
  },
  {
    id: "6",
    title: "The ROI of Autonomous Operations: Real Numbers from Real Franchises",
    excerpt:
      "Data-driven analysis of cost savings, efficiency gains, and revenue improvements from franchise owners using StayX.",
    date: "December 5, 2025",
    readTime: "9 min read",
    category: "ROI",
    slug: "roi-autonomous-operations",
    content: blogContent["roi-autonomous-operations"],
  },
  {
    id: "7",
    title: "Scaling Your Franchise Network: Lessons from 100+ Locations",
    excerpt:
      "Best practices for managing rapid growth across multiple locations, from hiring to operations to technology infrastructure.",
    date: "November 28, 2025",
    readTime: "7 min read",
    category: "Operations",
    slug: "scaling-franchise-network",
    content: blogContent["scaling-franchise-network"],
  },
  {
    id: "8",
    title: "Waste Reduction Strategies That Actually Work",
    excerpt:
      "How AI-powered waste tracking and predictive ordering can reduce food waste by 40% while maintaining quality standards.",
    date: "November 20, 2025",
    readTime: "6 min read",
    category: "Cost Optimization",
    slug: "waste-reduction-strategies",
    content: blogContent["waste-reduction-strategies"],
  },
]

