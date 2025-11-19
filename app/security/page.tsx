import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Shield, Lock, Eye, CheckCircle2, Server, Key } from "lucide-react"
import type { Metadata } from "next"
import { contactInfo } from "@/lib/data"

export const metadata: Metadata = {
  title: "Security - StayX",
  description:
    "Learn about StayX's security measures, compliance certifications, and data protection practices. Your data is encrypted and secure.",
}

export default function SecurityPage() {
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
                <span className="text-sm font-medium text-primary">Enterprise-Grade Security</span>
              </div>
              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
                Security & Compliance
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Your data security is our top priority. We implement industry-leading security measures to protect your
                franchise operations data.
              </p>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Security Measures</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Multi-layered security to protect your data at every level
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-border bg-card p-6">
                <Lock className="mb-4 h-8 w-8 text-primary" />
                <h3 className="font-display text-xl font-bold">Encryption</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Your operational data is protected
                  with bank-level encryption.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <Key className="mb-4 h-8 w-8 text-primary" />
                <h3 className="font-display text-xl font-bold">Access Controls</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Role-based access control, multi-factor authentication, and single sign-on (SSO) ensure only
                  authorized users can access your data.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <Server className="mb-4 h-8 w-8 text-primary" />
                <h3 className="font-display text-xl font-bold">Infrastructure</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Hosted on AWS with 99.99% uptime SLA. Regular security audits, penetration testing, and continuous
                  monitoring.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <Eye className="mb-4 h-8 w-8 text-primary" />
                <h3 className="font-display text-xl font-bold">Monitoring</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  24/7 security monitoring, automated threat detection, and real-time alerts for any suspicious
                  activity.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <Shield className="mb-4 h-8 w-8 text-primary" />
                <h3 className="font-display text-xl font-bold">Compliance</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  SOC 2 Type II certified, GDPR compliant, and following industry best practices for data protection and
                  privacy.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <CheckCircle2 className="mb-4 h-8 w-8 text-primary" />
                <h3 className="font-display text-xl font-bold">Backup & Recovery</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Automated daily backups with point-in-time recovery. Your data is protected against loss with
                  redundant storage systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="border-y border-border bg-muted/30 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="font-display text-3xl font-bold text-center sm:text-4xl">Compliance & Certifications</h2>
              <div className="mt-12 grid gap-8 md:grid-cols-2">
                <div className="rounded-lg border border-border bg-card p-6">
                  <h3 className="font-display text-xl font-bold">SOC 2 Type II</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Independently audited for security, availability, processing integrity, confidentiality, and privacy.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card p-6">
                  <h3 className="font-display text-xl font-bold">GDPR Compliant</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Full compliance with EU General Data Protection Regulation. Your data rights are protected.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card p-6">
                  <h3 className="font-display text-xl font-bold">CCPA Compliant</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Compliant with California Consumer Privacy Act. California residents have full control over their
                    data.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card p-6">
                  <h3 className="font-display text-xl font-bold">ISO 27001</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Information security management system certified to international standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Protection */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-display text-3xl font-bold text-center sm:text-4xl">Data Protection</h2>
              <div className="mt-8 space-y-6 text-muted-foreground">
                <p>
                  We never sell your data. Your operational data belongs to you and is used solely to provide and
                  improve our services. We implement strict data access controls and audit logs to track all data
                  access.
                </p>
                <p>
                  Data retention policies ensure we only keep data as long as necessary. You can request data deletion
                  at any time, and we'll comply within 30 days.
                </p>
                <p>
                  Regular security assessments, vulnerability scanning, and third-party audits ensure we maintain the
                  highest security standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="border-t border-border bg-muted/30 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl rounded-2xl border border-primary/50 bg-card p-12 text-center shadow-lg shadow-primary/10">
              <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl">Security Questions?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our security team is available to answer any questions about our security practices and compliance.
              </p>
              <div className="mt-8">
                {contactInfo.emails.security && (
                  <a
                    href={`mailto:${contactInfo.emails.security}`}
                    className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Contact Security Team
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

