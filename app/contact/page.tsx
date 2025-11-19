import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react"
import type { Metadata } from "next"
import { data } from "@/lib/data"

export const metadata: Metadata = {
  title: "Contact Sales - Get Started with StayX Today",
  description:
    "Schedule a personalized demo of StayX AI agents. Start your 14-day free trial and see how we can save you $50K-$200K annually. Our team responds within 24 hours.",
}

export default function ContactPage() {
  const { contactInfo } = data

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border bg-gradient-to-b from-background to-muted/30 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
                Get Started with StayX
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Transform your franchise operations with autonomous AI agents. Start your free 14-day trial or schedule
                a personalized demo.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <h2 className="font-display text-3xl font-bold">Let's Talk</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Fill out the form and our team will reach out within 24 hours to discuss how StayX can optimize your
                  franchise operations.
                </p>
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="mb-6 font-display text-2xl font-bold">Other Ways to Connect</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Email Us</h4>
                        <p className="mt-1 text-sm text-muted-foreground">{contactInfo.emails.general.description}</p>
                        <a
                          href={`mailto:${contactInfo.emails.general.address}`}
                          className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
                        >
                          {contactInfo.emails.general.address}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Call Us</h4>
                        <p className="mt-1 text-sm text-muted-foreground">{contactInfo.phone.hours}</p>
                        <a
                          href={`tel:${contactInfo.phone.number}`}
                          className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
                        >
                          {contactInfo.phone.formatted}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <MessageSquare className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Live Chat</h4>
                        <p className="mt-1 text-sm text-muted-foreground">{contactInfo.liveChat.description}</p>
                        <button className="mt-2 inline-block text-sm font-medium text-primary hover:underline">
                          {contactInfo.liveChat.label}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Headquarters</h4>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {contactInfo.headquarters.address.map((line, index) => (
                            <span key={index}>
                              {line}
                              {index < contactInfo.headquarters.address.length - 1 && <br />}
                            </span>
                          ))}
                          <br />
                          {contactInfo.headquarters.city}, {contactInfo.headquarters.state} {contactInfo.headquarters.zip}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-display text-xl font-semibold">What Happens Next?</h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                        1
                      </div>
                      <div>
                        <p className="text-sm font-medium">Initial Consultation</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          We'll discuss your franchise operations and pain points
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                        2
                      </div>
                      <div>
                        <p className="text-sm font-medium">Custom Demo</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          See StayX in action with your specific use cases
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                        3
                      </div>
                      <div>
                        <p className="text-sm font-medium">Quick Setup</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Get up and running in 48 hours with our team's support
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="border-t border-border bg-muted/30 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-primary">500+</div>
                <p className="mt-2 text-sm text-muted-foreground">Franchise Locations Optimized</p>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-primary">$12M+</div>
                <p className="mt-2 text-sm text-muted-foreground">Total Cost Savings</p>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-primary">98%</div>
                <p className="mt-2 text-sm text-muted-foreground">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
