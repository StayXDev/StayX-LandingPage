import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FileText, Scale, AlertCircle } from "lucide-react"
import type { Metadata } from "next"
import { contactInfo } from "@/lib/data"

export const metadata: Metadata = {
  title: "Terms of Service - StayX",
  description: "StayX terms of service. Read our terms and conditions for using the StayX platform.",
}

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border bg-gradient-to-b from-background to-muted/30 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                <FileText className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">Last Updated: January 2025</span>
              </div>
              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
                Terms of Service
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Please read these terms carefully before using StayX services.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl space-y-12">
              <div>
                <h2 className="font-display text-2xl font-bold">1. Acceptance of Terms</h2>
                <div className="mt-4 space-y-4 text-muted-foreground">
                  <p>
                    By accessing or using StayX services, you agree to be bound by these Terms of Service and all
                    applicable laws and regulations. If you do not agree with any of these terms, you are prohibited
                    from using our services.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold">2. Description of Service</h2>
                <div className="mt-4 space-y-4 text-muted-foreground">
                  <p>
                    StayX provides an AI-powered operations platform for multi-location franchise businesses. Our
                    services include autonomous AI agents that monitor, analyze, and optimize franchise operations
                    across your network.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold">3. User Accounts</h2>
                <div className="mt-4 space-y-4 text-muted-foreground">
                  <p>To use our services, you must:</p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Provide accurate and complete information when creating an account</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Notify us immediately of any unauthorized access</li>
                    <li>Be responsible for all activities under your account</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold">4. Subscription and Billing</h2>
                <div className="mt-4 space-y-4 text-muted-foreground">
                  <p>
                    Our services are provided on a subscription basis. You agree to pay all fees associated with your
                    subscription plan. Subscriptions automatically renew unless cancelled. We offer a 14-day free trial
                    with no credit card required.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold">5. Acceptable Use</h2>
                <div className="mt-4 space-y-4 text-muted-foreground">
                  <p>You agree not to:</p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Use the service for any illegal purpose</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Interfere with or disrupt the service</li>
                    <li>Reverse engineer or attempt to extract source code</li>
                    <li>Share your account credentials with others</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold">6. Intellectual Property</h2>
                <div className="mt-4 space-y-4 text-muted-foreground">
                  <p>
                    All content, features, and functionality of the StayX platform are owned by StayX and are protected
                    by international copyright, trademark, and other intellectual property laws. You may not reproduce,
                    distribute, or create derivative works without our written permission.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold">7. Limitation of Liability</h2>
                <div className="mt-4 space-y-4 text-muted-foreground">
                  <p>
                    StayX provides services "as is" without warranties of any kind. We are not liable for any indirect,
                    incidental, or consequential damages arising from your use of our services. Our total liability is
                    limited to the amount you paid us in the 12 months preceding the claim.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold">8. Termination</h2>
                <div className="mt-4 space-y-4 text-muted-foreground">
                  <p>
                    Either party may terminate this agreement at any time. Upon termination, your access to the service
                    will cease, and we may delete your account and data in accordance with our data retention policies.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold">9. Changes to Terms</h2>
                <div className="mt-4 space-y-4 text-muted-foreground">
                  <p>
                    We reserve the right to modify these terms at any time. We will notify you of material changes via
                    email or through our platform. Continued use of our services after changes constitutes acceptance of
                    the new terms.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold">10. Contact Information</h2>
                <div className="mt-4 space-y-4 text-muted-foreground">
                  <p>
                    For questions about these Terms of Service, please contact us at{" "}
                    {contactInfo.emails.legal ? (
                      <a href={`mailto:${contactInfo.emails.legal}`} className="text-primary hover:underline">
                        {contactInfo.emails.legal}
                      </a>
                    ) : (
                      <span className="text-primary">legal@stayx.ai</span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

