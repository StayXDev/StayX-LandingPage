import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { data } from "@/lib/data"

export const metadata: Metadata = {
  title: "Meet the StayX Team | AI Experts for Franchise Operations",
  description:
    "Meet the team behind StayX - AI engineers, franchise experts, and innovators building autonomous agents for multi-location operations.",
}

export default function TeamPage() {
  const teamMembers = data.teamMembers.sort((a, b) => (a.order || 0) - (b.order || 0))
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border bg-gradient-to-b from-background to-muted/30 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
                Meet the StayX Team
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                We're a team of AI engineers, franchise operators, and product innovators on a mission to transform
                multi-location operations with autonomous intelligence.
              </p>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold">{member.name}</h3>
                    <p className="mt-1 text-sm font-medium text-primary">{member.title}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                    <div className="mt-4 flex gap-3">
                      <Link
                        href={member.linkedin}
                        className="text-muted-foreground transition-colors hover:text-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                      <Link
                        href={member.twitter}
                        className="text-muted-foreground transition-colors hover:text-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Section */}
        <section className="border-t border-border bg-muted/30 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl">Join Our Team</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                We're always looking for talented engineers, operators, and innovators to help us build the future of
                franchise operations.
              </p>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  View Open Positions
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
