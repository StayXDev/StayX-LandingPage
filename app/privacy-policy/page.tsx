import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Shield, Lock, Eye, FileText } from "lucide-react"
import type { Metadata } from "next"
import { contactInfo } from "@/lib/data"

export const metadata: Metadata = {
  title: "Privacy Policy - StayX",
  description: "StayX's privacy policy. Learn how we collect, use, and protect your data.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border bg-gradient-to-b from-background to-muted/30 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">Last Updated: January 2025</span>
              </div>
              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
                Privacy Policy
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl space-y-12">
              <div>
                <h2 className="font-display text-2xl font-bold">1. Information We Collect</h2>
                <div className="mt-4 space-y-4 text-muted-foreground">
                  <p>
                    We collect information that you provide directly to us, including account information, business
                    details, and operational data from your franchise locations. We also automatically collect certain
                    information about your use of our services.
                  </p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Account and contact information (name, email, phone number)</li>
                    <li>Business information (company name, locations, operational data)</li>
                    <li>Usage data (how you interact with our platform)</li>
                    <li>Technical data (IP address, browser type, device information)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold">2. How We Use Your Information</h2>
                <div className="mt-4 space-y-4 text-muted-foreground">
                  <p>We use the information we collect to:</p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices, updates, and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Monitor and analyze trends and usage</li>
                    <li>Detect, prevent, and address technical issues</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold">3. Data Security</h2>
                <div className="mt-4 space-y-4 text-muted-foreground">
                  <p>
                    We implement industry-standard security measures to protect your data, including encryption,
                    access controls, and regular security audits. We are SOC 2 Type II certified and comply with
                    industry best practices for data protection.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold">4. Data Sharing</h2>
                <div className="mt-4 space-y-4 text-muted-foreground">
                  <p>
                    We do not sell your personal information. We may share your information only in the following
                    circumstances:
                  </p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>With your explicit consent</li>
                    <li>To comply with legal obligations</li>
                    <li>With service providers who assist us in operating our platform</li>
                    <li>In connection with a business transfer or merger</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold">5. Your Rights</h2>
                <div className="mt-4 space-y-4 text-muted-foreground">
                  <p>You have the right to:</p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Access and receive a copy of your personal data</li>
                    <li>Rectify inaccurate or incomplete data</li>
                    <li>Request deletion of your personal data</li>
                    <li>Object to processing of your personal data</li>
                    <li>Request restriction of processing</li>
                    <li>Data portability</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold">6. Contact Us</h2>
                <div className="mt-4 space-y-4 text-muted-foreground">
                  <p>
                    If you have questions about this Privacy Policy, please contact us at{" "}
                    {contactInfo.emails.privacy ? (
                      <a href={`mailto:${contactInfo.emails.privacy}`} className="text-primary hover:underline">
                        {contactInfo.emails.privacy}
                      </a>
                    ) : (
                      <span className="text-primary">privacy@stayx.ai</span>
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

