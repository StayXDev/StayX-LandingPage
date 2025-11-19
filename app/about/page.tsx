import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Users, Zap, Shield } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About StayX - Transforming Franchise Operations with AI",
  description:
    "Learn about StayX's mission to revolutionize multi-location franchise operations through autonomous AI agents. Founded by franchise operators and AI engineers.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border bg-gradient-to-b from-background to-muted/30 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
                About StayX
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                We're on a mission to transform how multi-location businesses operate through autonomous AI intelligence.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-12 md:grid-cols-2">
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Target className="h-6 w-6" />
                  </div>
                  <h2 className="font-display text-3xl font-bold">Our Mission</h2>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    To empower franchise owners with autonomous AI agents that work 24/7 to optimize operations, reduce
                    costs, and eliminate operational blind spots across every location.
                  </p>
                </div>
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h2 className="font-display text-3xl font-bold">Our Vision</h2>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    A future where franchise networks operate with perfect efficiency, where every decision is
                    data-driven, and where owners can scale confidently knowing their operations are optimized
                    autonomously.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="border-y border-border bg-muted/30 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-display text-3xl font-bold text-center sm:text-4xl">Our Story</h2>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  StayX was founded in 2024 by franchise operators and AI engineers who experienced firsthand the
                  challenges of managing multiple locations. After years of struggling with manual processes, compliance
                  gaps, and operational inefficiencies, we realized that traditional software wasn't enough.
                </p>
                <p>
                  We built StayX to solve a simple but critical problem: franchise owners need intelligent systems that
                  work autonomously, not just tools that require constant human oversight. Our AI agents continuously
                  monitor, analyze, and optimize operations across your entire network.
                </p>
                <p>
                  Today, StayX helps franchise owners save $50K-$200K annually per location through intelligent
                  automation, predictive analytics, and autonomous decision-making. We're trusted by leading franchise
                  brands across QSR, retail, fitness, and service industries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Our Values</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The principles that guide everything we do at StayX
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
              <div className="rounded-lg border border-border bg-card p-6">
                <Shield className="mb-4 h-8 w-8 text-primary" />
                <h3 className="font-display text-xl font-bold">Trust & Security</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Your data is encrypted, secure, and never shared. We're SOC 2 compliant and committed to the highest
                  security standards.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <Users className="mb-4 h-8 w-8 text-primary" />
                <h3 className="font-display text-xl font-bold">Customer Success</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Your success is our success. We measure our impact by the savings and efficiency gains you achieve
                  with StayX.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <Zap className="mb-4 h-8 w-8 text-primary" />
                <h3 className="font-display text-xl font-bold">Innovation</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  We continuously improve our AI agents, adding new capabilities and learning from every interaction to
                  deliver better results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-muted/30 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl rounded-2xl border border-primary/50 bg-card p-12 text-center shadow-lg shadow-primary/10">
              <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl">
                Ready to Transform Your Operations?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Join hundreds of franchise owners who trust StayX to optimize their operations autonomously.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" className="bg-primary hover:bg-primary/90 h-12 px-8" asChild>
                  <Link href="/contact">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 bg-transparent" asChild>
                  <Link href="/team">Meet the Team</Link>
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

