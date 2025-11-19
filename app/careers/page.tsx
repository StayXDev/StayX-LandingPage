import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Clock, Users, Code, TrendingUp, Briefcase, Settings, BarChart } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { data } from "@/lib/data"

export const metadata: Metadata = {
  title: "Careers at StayX - Join Our Team",
  description:
    "Join StayX and help build the future of autonomous franchise operations. We're hiring AI engineers, product managers, and franchise operations experts.",
}

// Icon mapping for job positions
const iconMap = {
  code: Code,
  "trending-up": TrendingUp,
  users: Users,
  briefcase: Briefcase,
  settings: Settings,
  "bar-chart": BarChart,
}

export default function CareersPage() {
  const { jobPositions } = data

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border bg-gradient-to-b from-background to-muted/30 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
                Join the StayX Team
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Help us build the future of autonomous franchise operations. We're looking for talented engineers,
                operators, and innovators.
              </p>
            </div>
          </div>
        </section>

        {/* Why Join */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Why Join StayX?</h2>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-display text-xl font-bold">Impact at Scale</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Your work directly helps franchise owners save millions annually and transform how multi-location
                  businesses operate.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-display text-xl font-bold">Cutting-Edge AI</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Work with the latest AI technologies including multi-agent systems, reinforcement learning, and
                  predictive analytics.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-display text-xl font-bold">Growth & Learning</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Fast-paced startup environment with opportunities to learn, grow, and take on significant ownership
                  of products and features.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="border-y border-border bg-muted/30 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Open Positions</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We're always looking for exceptional talent. Don't see a role that fits? We'd still love to hear from
                you.
              </p>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6">
              {jobPositions.map((position) => {
                const Icon = iconMap[position.icon] || Code
                return (
                  <div
                    key={position.id}
                    className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-display text-xl font-bold">{position.title}</h3>
                          <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {position.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {position.type}
                            </span>
                            <span>{position.department}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" className="shrink-0" asChild>
                        <Link href="/contact">
                          Apply Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Benefits & Perks</h2>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-display text-lg font-bold">Competitive Compensation</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Top-tier salary, equity, and performance bonuses. We believe in rewarding exceptional work.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-display text-lg font-bold">Health & Wellness</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Comprehensive health, dental, and vision insurance. Mental health support and wellness programs.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-display text-lg font-bold">Flexible Work</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Remote-first culture with flexible hours. Work from anywhere, with optional office space in SF.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-display text-lg font-bold">Learning & Development</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Annual learning budget, conference attendance, and mentorship programs to support your growth.
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
                Don't See the Right Role?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                We're always interested in connecting with talented people. Send us your resume and let's start a
                conversation.
              </p>
              <div className="mt-10">
                <Button size="lg" className="bg-primary hover:bg-primary/90 h-12 px-8" asChild>
                  <Link href="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
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

