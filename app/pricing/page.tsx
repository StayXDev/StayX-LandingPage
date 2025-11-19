import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing Plans - Flexible Plans for Growing Franchises",
  description:
    "Choose the perfect StayX plan for your franchise network. Starter, Growth, or Enterprise. All plans include 6 AI agents, 14-day free trial, and no credit card required.",
}

const pricingTiers = [
  {
    name: "Starter",
    price: 299,
    description: "Perfect for franchise owners with 1-3 locations getting started with AI operations",
    popular: false,
    features: [
      { name: "Up to 3 locations", included: true },
      { name: "4 core agents (Scheduling, Compliance, Waste, Reputation)", included: true },
      { name: "Basic insights dashboard", included: true },
      { name: "Email support (48h response)", included: true },
      { name: "Monthly operational reports", included: true },
      { name: "POS integration (1 system)", included: true },
      { name: "All 6 agents", included: false },
      { name: "Advanced analytics", included: false },
      { name: "API access", included: false },
      { name: "Custom integrations", included: false },
      { name: "Priority support", included: false },
      { name: "Dedicated account manager", included: false },
    ],
  },
  {
    name: "Professional",
    price: 799,
    description: "The complete solution for growing franchises with 4-15 locations",
    popular: true,
    features: [
      { name: "Up to 15 locations", included: true },
      { name: "All 6 agents included", included: true },
      { name: "Advanced analytics & forecasting", included: true },
      { name: "Priority phone & email support (12h response)", included: true },
      { name: "Weekly optimization reports", included: true },
      { name: "Unlimited POS integrations", included: true },
      { name: "API access for custom workflows", included: true },
      { name: "Multi-location benchmarking", included: true },
      { name: "Custom alert configurations", included: true },
      { name: "Quarterly business reviews", included: true },
      { name: "Dedicated account manager", included: false },
      { name: "White-label options", included: false },
    ],
  },
  {
    name: "Enterprise",
    price: null,
    description: "Tailored solutions for large franchise networks with 15+ locations",
    popular: false,
    features: [
      { name: "Unlimited locations", included: true },
      { name: "All 6 agents with custom configuration", included: true },
      { name: "Enterprise analytics & BI integration", included: true },
      { name: "Dedicated support team (4h SLA)", included: true },
      { name: "Real-time operational insights", included: true },
      { name: "Custom integration development", included: true },
      { name: "Full API access & webhooks", included: true },
      { name: "Advanced ML model customization", included: true },
      { name: "White-label platform options", included: true },
      { name: "Dedicated account manager & CSM", included: true },
      { name: "On-site implementation support", included: true },
      { name: "Custom SLA guarantees", included: true },
    ],
  },
]

const faqs = [
  {
    question: "How long does it take to set up StayX?",
    answer:
      "Most franchises are fully operational within 48 hours. Our team handles all integration work, and you'll start seeing recommendations within the first week as agents learn your operational patterns.",
  },
  {
    question: "What if I have more locations than my plan allows?",
    answer:
      "You can upgrade your plan at any time. For the Starter and Professional plans, additional locations can be added for a small monthly fee. Enterprise plans include unlimited locations.",
  },
  {
    question: "Do I need to cancel my existing software?",
    answer:
      "No. StayX integrates with your current POS, scheduling, and review management systems. We enhance what you already have rather than replacing it.",
  },
  {
    question: "What integrations do you support?",
    answer:
      "We integrate with 50+ systems including Square, Toast, Clover, Revel, 7shifts, When I Work, Homebase, Google Reviews, Yelp, and more. Custom integrations are available on Enterprise plans.",
  },
  {
    question: "Can I try StayX before committing?",
    answer:
      "Yes! We offer a 14-day free trial with full access to all agents and features. No credit card required to start your trial.",
  },
  {
    question: "What kind of ROI can I expect?",
    answer:
      "Most franchise owners see 3-5x ROI within the first 6 months through labor cost reduction, waste elimination, and compliance savings. Average savings are $50K+ per location annually.",
  },
]

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border bg-gradient-to-b from-background to-muted/30 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
                Simple, Transparent Pricing
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Choose the plan that fits your franchise network. All plans include autonomous AI agents, no hidden
                fees, and cancel anytime.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                14-day free trial • No credit card required
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative flex flex-col rounded-xl border ${
                    tier.popular ? "border-primary shadow-xl ring-2 ring-primary/20" : "border-border bg-card"
                  } p-8`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="font-display text-2xl font-bold">{tier.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tier.description}</p>
                  </div>

                  <div className="mb-6">
                    {tier.price ? (
                      <>
                        <span className="font-display text-5xl font-bold">${tier.price}</span>
                        <span className="text-muted-foreground">/month</span>
                      </>
                    ) : (
                      <span className="font-display text-5xl font-bold">Custom</span>
                    )}
                  </div>

                  <ul className="mb-8 flex-1 space-y-3">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm">
                        {feature.included ? (
                          <Check className="h-5 w-5 shrink-0 text-primary" />
                        ) : (
                          <X className="h-5 w-5 shrink-0 text-muted-foreground/40" />
                        )}
                        <span className={feature.included ? "" : "text-muted-foreground/60"}>{feature.name}</span>
                      </li>
                    ))}
                  </ul>

                  {tier.price ? (
                    <Button className="w-full" variant={tier.popular ? "default" : "outline"} size="lg" asChild>
                      <Link href="/contact">Start Free Trial</Link>
                    </Button>
                  ) : (
                    <Button className="w-full bg-transparent" variant="outline" size="lg" asChild>
                      <Link href="/contact">Contact Sales</Link>
                    </Button>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground">
                All plans include 24/7 agent monitoring, automatic updates, and secure data encryption.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Annual billing available with 20% discount.{" "}
                <Link href="/contact" className="font-medium text-primary hover:underline">
                  Contact sales
                </Link>{" "}
                for details.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="border-y border-border bg-muted/30 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl">Compare Plans</h2>
              <p className="mt-4 text-lg text-muted-foreground">Find the perfect fit for your franchise network</p>
            </div>

            <div className="mx-auto max-w-4xl overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="pb-4 pr-4 text-left font-display text-lg font-semibold">Feature</th>
                    <th className="px-4 pb-4 text-center font-display text-lg font-semibold">Starter</th>
                    <th className="px-4 pb-4 text-center font-display text-lg font-semibold">Professional</th>
                    <th className="px-4 pb-4 text-center font-display text-lg font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-4 pr-4 text-sm font-medium">Locations Included</td>
                    <td className="px-4 py-4 text-center text-sm">1-3</td>
                    <td className="px-4 py-4 text-center text-sm">4-15</td>
                    <td className="px-4 py-4 text-center text-sm">Unlimited</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 pr-4 text-sm font-medium">AI Agents</td>
                    <td className="px-4 py-4 text-center text-sm">4 Core</td>
                    <td className="px-4 py-4 text-center text-sm">All 6</td>
                    <td className="px-4 py-4 text-center text-sm">All 6 + Custom</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 pr-4 text-sm font-medium">Support Response Time</td>
                    <td className="px-4 py-4 text-center text-sm">48 hours</td>
                    <td className="px-4 py-4 text-center text-sm">12 hours</td>
                    <td className="px-4 py-4 text-center text-sm">4 hours</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 pr-4 text-sm font-medium">API Access</td>
                    <td className="px-4 py-4 text-center text-sm">
                      <X className="mx-auto h-5 w-5 text-muted-foreground/40" />
                    </td>
                    <td className="px-4 py-4 text-center text-sm">
                      <Check className="mx-auto h-5 w-5 text-primary" />
                    </td>
                    <td className="px-4 py-4 text-center text-sm">
                      <Check className="mx-auto h-5 w-5 text-primary" />
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 pr-4 text-sm font-medium">Custom Integrations</td>
                    <td className="px-4 py-4 text-center text-sm">
                      <X className="mx-auto h-5 w-5 text-muted-foreground/40" />
                    </td>
                    <td className="px-4 py-4 text-center text-sm">
                      <X className="mx-auto h-5 w-5 text-muted-foreground/40" />
                    </td>
                    <td className="px-4 py-4 text-center text-sm">
                      <Check className="mx-auto h-5 w-5 text-primary" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl">Frequently Asked Questions</h2>
            </div>

            <div className="mx-auto max-w-3xl space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="rounded-lg border border-border bg-card p-6">
                  <h3 className="font-display text-lg font-semibold">{faq.question}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-muted/30 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl">Ready to Get Started?</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Start your 14-day free trial today. No credit card required.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/contact">Start Free Trial</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/dashboard">See Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
