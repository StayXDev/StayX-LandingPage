"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Zap } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AgentCard } from "@/components/agent-card"
import { agents, testimonials } from "@/lib/mock-data"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function HomePage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 })
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Parallax transforms
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  return (
    <div ref={containerRef} className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/5 via-transparent to-transparent py-20 md:py-32"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/50 border border-border px-4 py-1.5 text-sm font-medium text-muted-foreground"
              >
                <Zap className="h-4 w-4 text-primary" />
                Autonomous AI Operations Platform
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-display text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Your Franchise Operations Partner <span className="text-gradient">That Never Sleeps</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
              >
                AI agents that autonomously optimize multi-location operations. Reduce labor costs by 30%, automate
                compliance, and never miss an operational issue.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90 h-12 px-8" asChild>
                  <Link href="/contact">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 bg-transparent" asChild>
                  <Link href="/dashboard">View Live Demo</Link>
                </Button>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-6 text-sm text-muted-foreground"
              >
                No credit card required • 14-day free trial • Set up in minutes
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* Social Proof */}
        <SocialProofSection />

        {/* Problem Statement */}
        <ProblemStatementSection />

        {/* Key Metrics */}
        <KeyMetricsSection />

        {/* Agents Section */}
        <AgentsSection />

        {/* How It Works */}
        <HowItWorksSection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Pricing Preview */}
        <PricingSection />

        {/* CTA Section */}
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}

// Animated Section Components
function SocialProofSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const brands = ["QSR Brand", "Fitness Co", "Retail Group", "Service Pro"]

  return (
    <motion.section
      ref={ref}
      style={{ y, opacity }}
      className="border-b border-border bg-card/30 py-12"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground"
        >
          TRUSTED BY LEADING FRANCHISE BRANDS
        </motion.p>
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 opacity-50 md:grid-cols-4">
          {brands.map((brand, index) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="font-display text-2xl font-bold">{brand}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function ProblemStatementSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.section ref={ref} style={{ scale, opacity }} className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="font-display text-3xl font-bold leading-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Multi-Franchise Owners Lose <span className="text-primary">$50K-$200K</span> Annually to Operational
            Inefficiencies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            Manual scheduling, compliance gaps, unchecked waste, and missed cost optimizations drain profits across
            your locations. Traditional software requires constant human oversight. StayX's AI agents work
            autonomously to solve these problems.
          </motion.p>
        </div>
      </div>
    </motion.section>
  )
}

function KeyMetricsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const metrics = [
    { value: "30%", label: "Labor Cost Reduction" },
    { value: "95%", label: "Compliance Automation" },
    { value: "$50K+", label: "Annual Savings Per Location" },
  ]

  return (
    <motion.section ref={ref} style={{ y }} className="border-y border-border bg-card/30 py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.2, type: "spring" }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.2, type: "spring" }}
                className="font-display text-5xl font-bold text-primary md:text-6xl"
              >
                {metric.value}
              </motion.div>
              <p className="mt-3 text-sm font-medium text-muted-foreground md:text-base">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function AgentsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.section id="agents" ref={ref} style={{ opacity }} className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="font-display text-3xl font-bold leading-tight text-balance sm:text-4xl md:text-5xl">
            Meet Your <span className="text-gradient">AI Operations Team</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Each agent specializes in a critical operational area, continuously monitoring, analyzing, and
            recommending actions across your franchise network.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <AgentCard name={agent.name} description={agent.description} icon={agent.icon} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [80, -80])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const steps = [
    {
      number: "1",
      title: "Connect Data",
      description: "Integrate your POS, scheduling, and review platforms in minutes",
    },
    {
      number: "2",
      title: "Agents Analyze",
      description: "AI continuously monitors operations and identifies inefficiencies",
    },
    {
      number: "3",
      title: "Get Recommendations",
      description: "Receive prioritized actions with clear financial impact",
    },
    {
      number: "4",
      title: "Approve & Learn",
      description: "Agents learn from outcomes and improve recommendations over time",
    },
  ]

  return (
    <motion.section ref={ref} style={{ y, opacity }} className="border-y border-border bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="font-display text-3xl font-bold leading-tight text-balance sm:text-4xl md:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            StayX agents work autonomously to detect problems, collaborate on solutions, and deliver actionable
            recommendations.
          </p>
        </motion.div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative w-full rounded-lg border border-border bg-card p-6 text-center transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.2, type: "spring" }}
                  className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-transform group-hover:scale-110"
                >
                  <span className="font-display text-2xl font-bold">{step.number}</span>
                </motion.div>
                <h3 className="mb-3 font-display text-xl font-semibold text-card-foreground">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.98])

  return (
    <motion.section ref={ref} style={{ scale }} className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="font-display text-3xl font-bold leading-tight text-balance sm:text-4xl md:text-5xl">
            Franchise Owners Trust StayX
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="leading-relaxed text-card-foreground text-pretty">"{testimonial.quote}"</p>
              <div className="mt-6">
                <p className="font-semibold text-card-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [60, -60])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const plans = [
    {
      name: "Starter",
      description: "Best for 1-3 locations",
      price: "$299",
      period: "/month",
      features: ["Core agents included", "Basic insights dashboard", "Email support"],
      buttonText: "Learn More",
      buttonHref: "/pricing",
      buttonVariant: "outline" as const,
      popular: false,
    },
    {
      name: "Professional",
      description: "Best for 4-15 locations",
      price: "$799",
      period: "/month",
      features: ["All 6 agents", "Advanced analytics", "API access", "Priority phone support"],
      buttonText: "Get Started",
      buttonHref: "/pricing",
      buttonVariant: "default" as const,
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Best for 15+ locations",
      price: "Custom",
      period: "",
      features: ["Custom agent configuration", "White-label options", "Dedicated support & SLA"],
      buttonText: "Contact Sales",
      buttonHref: "/contact",
      buttonVariant: "outline" as const,
      popular: false,
    },
  ]

  return (
    <motion.section ref={ref} style={{ y, opacity }} className="border-y border-border bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="font-display text-3xl font-bold leading-tight text-balance sm:text-4xl md:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Choose the plan that fits your franchise network
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-lg border ${plan.popular ? "border-2 border-primary shadow-lg" : "border-border"} bg-card p-8`}
            >
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground"
                >
                  Most Popular
                </motion.div>
              )}
              <h3 className="font-display text-2xl font-bold text-card-foreground">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              <div className="mt-6">
                <span className="font-display text-4xl font-bold text-card-foreground">{plan.price}</span>
                {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: index * 0.15 + featureIndex * 0.1 }}
                    className="flex items-start gap-3 text-sm"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-card-foreground">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
              >
                <Button
                  className={`mt-8 w-full ${plan.buttonVariant === "outline" ? "bg-transparent" : ""}`}
                  variant={plan.buttonVariant}
                  asChild
                >
                  <Link href={plan.buttonHref}>{plan.buttonText}</Link>
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <motion.section ref={ref} style={{ scale, opacity }} className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl rounded-2xl border border-primary/50 bg-card p-8 text-center shadow-lg shadow-primary/10 text-primary-foreground md:p-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-3xl font-bold text-balance sm:text-4xl md:text-5xl"
          >
            Ready to Transform Your Franchise Operations?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-lg leading-relaxed opacity-90"
          >
            Join hundreds of franchise owners who trust StayX to optimize their operations autonomously.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 h-12 px-8" asChild>
              <Link href="/contact">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 bg-transparent" asChild>
              <Link href="/dashboard">View Live Demo</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
