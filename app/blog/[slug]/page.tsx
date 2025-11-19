import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { blogPosts } from "@/lib/data"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | StayX Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const content = post.content || `
    <p>${post.excerpt}</p>
    <p>Full article content coming soon. This is a preview of the blog post about ${post.title}.</p>
    <p>Stay tuned for the complete article with detailed insights, case studies, and actionable strategies.</p>
  `

  // Find related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3)

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border bg-gradient-to-b from-background to-muted/30 py-12 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <Link
                href="/blog"
                className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
              <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                {post.category}
              </div>
              <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl md:text-5xl">
                {post.title}
              </h1>
              <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-12 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div
                className="prose prose-invert max-w-none prose-headings:font-display prose-headings:font-bold prose-p:text-muted-foreground prose-p:leading-relaxed prose-ul:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-strong:font-semibold prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: content }}
              />

              {/* Share Section */}
              <div className="mt-12 rounded-lg border border-border bg-card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-lg font-semibold">Share this article</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Help others discover this content</p>
                  </div>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="border-y border-border bg-muted/30 py-12 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-6xl">
                <h2 className="font-display text-2xl font-bold sm:text-3xl">Related Articles</h2>
                <div className="mt-8 grid gap-6 md:grid-cols-3">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.slug}`}
                      className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
                    >
                      <div className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {relatedPost.category}
                      </div>
                      <h3 className="font-display text-lg font-bold leading-tight group-hover:text-primary">
                        {relatedPost.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {relatedPost.date}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl rounded-2xl border border-primary/50 bg-card p-12 text-center shadow-lg shadow-primary/10">
              <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl">
                Ready to Transform Your Operations?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                See how StayX's AI agents can optimize your franchise network. Start your free 14-day trial today.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" className="bg-primary hover:bg-primary/90 h-12 px-8" asChild>
                  <Link href="/contact">
                    Start Free Trial
                    <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 bg-transparent" asChild>
                  <Link href="/dashboard">View Demo</Link>
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

