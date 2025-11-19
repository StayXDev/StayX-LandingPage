import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { blogPosts } from "@/lib/data"

export const metadata: Metadata = {
  title: "StayX Blog - Insights on Franchise Operations & AI",
  description:
    "Read the latest insights on franchise operations, AI automation, cost optimization, and multi-location business management from the StayX team.",
}

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border bg-gradient-to-b from-background to-muted/30 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
                StayX Blog
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Insights on franchise operations, AI automation, and building efficient multi-location businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="group flex flex-col rounded-lg border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg"
                >
                  <div className="flex-1 p-6">
                    <div className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {post.category}
                    </div>
                    <h2 className="font-display text-xl font-bold leading-tight">{post.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                    <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  <div className="border-t border-border p-6">
                    <Button variant="ghost" className="w-full justify-between group-hover:text-primary" asChild>
                      <Link href={`/blog/${post.slug}`}>
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="border-y border-border bg-muted/30 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl rounded-2xl border border-primary/50 bg-card p-12 text-center shadow-lg shadow-primary/10">
              <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl">Stay Updated</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Get the latest insights on franchise operations and AI automation delivered to your inbox.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-md border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Subscribe
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

