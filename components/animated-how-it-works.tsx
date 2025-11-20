"use client"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  ShieldCheck,
  Trash2,
  Star,
  TrendingDown,
  Users,
  ArrowRight,
  Check,
  Zap,
  Database,
  BarChart3,
  MessageSquare,
} from "lucide-react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"

const agents = [
  { id: "scheduling", name: "Scheduling", icon: Calendar, color: "text-cyan-400" },
  { id: "compliance", name: "Compliance", icon: ShieldCheck, color: "text-blue-400" },
  { id: "waste", name: "Waste Reduction", icon: Trash2, color: "text-green-400" },
  { id: "reputation", name: "Reputation", icon: Star, color: "text-yellow-400" },
  { id: "cost", name: "Cost Optimization", icon: TrendingDown, color: "text-orange-400" },
  { id: "labor", name: "Labor Efficiency", icon: Users, color: "text-purple-400" },
]

const dataStreams = [
  { name: "POS Systems", color: "from-cyan-500 to-blue-500" },
  { name: "Scheduling", color: "from-purple-500 to-pink-500" },
  { name: "Compliance", color: "from-blue-500 to-cyan-500" },
  { name: "Reviews", color: "from-yellow-500 to-orange-500" },
  { name: "Labor Data", color: "from-green-500 to-emerald-500" },
]

function Section1Problem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  const problems = [
    "Manual scheduling",
    "Compliance violations",
    "Food waste",
    "Negative reviews",
    "Hidden costs",
    "Labor inefficiency",
  ]

  return (
    <section ref={ref} className="relative bg-background py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">The Problem</h2>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-muted-foreground">
            Running multiple franchise locations is chaos without intelligent systems
          </p>
        </motion.div>

        <div className="relative mx-auto mt-8 sm:mt-12 lg:mt-16 max-w-4xl">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {problems.map((problem, i) => (
              <motion.div
                key={problem}
                initial={{ x: -50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-lg border border-red-500/50 bg-red-500/10 p-3 sm:p-4 text-center text-sm sm:text-base font-medium text-red-400"
              >
                {problem}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 sm:mt-12 rounded-2xl border-2 border-red-500 bg-red-500/10 p-6 sm:p-8 text-center"
          >
            <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-red-400">$50K-$200K</div>
            <div className="mt-2 text-base sm:text-lg lg:text-xl text-red-300">Lost annually per franchise owner</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Section2MeetAgents() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  return (
    <section ref={ref} className="relative bg-muted/30 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Meet Your AI Agents</h2>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-muted-foreground">
            Six specialized agents working together to optimize every aspect of your operations
          </p>
        </motion.div>

        <div className="relative mx-auto mt-8 sm:mt-12 lg:mt-16 max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent, i) => (
              <motion.div
                key={agent.id}
                initial={{ scale: 0, rotate: -10 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -10 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group relative overflow-hidden rounded-xl border border-primary/20 bg-card p-6 text-center shadow-lg transition-all hover:scale-105 hover:shadow-primary/20"
              >
                <motion.div
                  animate={isInView ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                  className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 ${agent.color}`}
                >
                  <agent.icon className="h-8 w-8" />
                </motion.div>
                <h3 className="mt-4 font-display text-lg font-bold">{agent.name}</h3>
                <div className="mt-2 text-xs font-medium text-primary">Agent</div>

                {/* Connection lines */}
                {isInView && i < agents.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: (i + 1) * 0.15 }}
                    className="absolute -right-3 top-1/2 hidden h-0.5 w-6 origin-left bg-primary/50 lg:block"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Section3DataFlowing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  return (
    <section ref={ref} className="relative bg-background py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Data Streams In</h2>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-muted-foreground">
            Real-time data from all your operational systems flows into the agents
          </p>
        </motion.div>

        <div className="relative mx-auto mt-8 sm:mt-12 lg:mt-16 max-w-4xl">
          <div className="flex flex-col gap-8">
            {dataStreams.map((stream, i) => (
              <motion.div
                key={stream.name}
                initial={{ x: -100, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className={`h-3 rounded-full bg-gradient-to-r ${stream.color}`}>
                      {isInView && (
                        <motion.div
                          initial={{ x: "-100%" }}
                          animate={{ x: "200%" }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                          className="h-full w-1/3 rounded-full bg-white/50"
                        />
                      )}
                    </div>
                  </div>
                  <Database className="h-6 w-6 text-primary" />
                  <span className="min-w-[140px] text-sm font-medium">{stream.name}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-6 py-3 text-sm font-medium text-primary">
              <Zap className="h-4 w-4" />
              Agents receiving data in real-time
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Section4AgentsAnalyzing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  const analyses = [
    { agent: "Scheduling", task: "Finding patterns in labor data", confidence: 87 },
    { agent: "Cost", task: "Calculating $2,400/month savings", confidence: 92 },
    { agent: "Compliance", task: "Validating certifications", confidence: 100 },
    { agent: "Waste", task: "Analyzing waste heat maps", confidence: 89 },
    { agent: "Reputation", task: "Processing review sentiment", confidence: 85 },
    { agent: "Labor", task: "Identifying efficiency gaps", confidence: 91 },
  ]

  return (
    <section ref={ref} className="relative bg-muted/30 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Agents Analyzing</h2>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-muted-foreground">
            Each agent processes data with AI to find actionable insights
          </p>
        </motion.div>

        <div className="relative mx-auto mt-8 sm:mt-12 lg:mt-16 max-w-5xl">
          <div className="grid gap-4 sm:grid-cols-2">
            {analyses.map((item, i) => (
              <motion.div
                key={item.agent}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card p-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-display text-sm font-bold text-primary">{item.agent} Agent</div>
                    <div className="mt-1 text-sm text-muted-foreground">{item.task}</div>
                  </div>
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <div className="mt-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Confidence</span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                      className="font-bold text-primary"
                    >
                      {item.confidence}%
                    </motion.span>
                  </div>
                  <div className="mt-1 h-2 overflow-hidden rounded-full bg-muted">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${item.confidence}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: i * 0.1 + 0.2 }}
                      className="h-full rounded-full bg-primary"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Section5Collaboration() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  const conversations = [
    { from: "Scheduling", to: "Cost", message: "I found scheduling inefficiency" },
    { from: "Cost", to: "Scheduling", message: "Saves $2,400/month" },
    { from: "Compliance", to: "All Agents", message: "100% compliant ✓" },
    { from: "Waste", to: "Cost", message: "Reducing waste saves $1,800" },
    { from: "Labor", to: "Scheduling", message: "Optimize staffing levels" },
  ]

  return (
    <section ref={ref} className="relative bg-background py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Agents Collaborate</h2>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-muted-foreground">
            Agents communicate with each other to validate insights and reach consensus
          </p>
        </motion.div>

        <div className="relative mx-auto mt-8 sm:mt-12 lg:mt-16 max-w-4xl">
          <div className="space-y-4">
            {conversations.map((conv, i) => (
              <motion.div
                key={i}
                initial={{ x: i % 2 === 0 ? -50 : 50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: i % 2 === 0 ? -50 : 50, opacity: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className={`flex items-center gap-3 ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <MessageSquare className="h-5 w-5 text-primary" />
                <div className="max-w-md rounded-xl border border-primary/20 bg-card p-4 shadow-lg">
                  <div className="text-xs font-bold text-primary">
                    {conv.from} → {conv.to}
                  </div>
                  <div className="mt-1 text-sm">{conv.message}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-green-500 bg-green-500/10 px-8 py-4 text-lg font-bold text-green-400">
              <Check className="h-6 w-6" />
              Consensus Reached
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Section6Recommendation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })
  const [approved, setApproved] = useState(false)

  return (
    <section ref={ref} className="relative bg-muted/30 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Smart Recommendation</h2>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-muted-foreground">
            Agents present a validated, high-confidence recommendation
          </p>
        </motion.div>

        <div className="relative mx-auto mt-8 sm:mt-12 lg:mt-16 max-w-2xl">
          <motion.div
            initial={{ scale: 0, rotate: -5 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -5 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="relative overflow-hidden rounded-2xl border-2 border-primary bg-card p-8 shadow-2xl"
          >
            {!approved ? (
              <>
                <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  New Recommendation
                </div>
                <h3 className="font-display text-2xl font-bold">Optimize Location #3 Schedule</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Current schedule has 12% overtime during weekdays and peak hour understaffing on weekends. Recommended
                  schedule reduces costs while improving coverage.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-lg bg-muted p-4 text-center">
                    <div className="text-xs text-muted-foreground">Impact</div>
                    <div className="mt-1 font-display text-xl font-bold text-primary">$2,400/mo</div>
                  </div>
                  <div className="rounded-lg bg-muted p-4 text-center">
                    <div className="text-xs text-muted-foreground">Confidence</div>
                    <div className="mt-1 font-display text-xl font-bold text-primary">87%</div>
                  </div>
                  <div className="rounded-lg bg-muted p-4 text-center">
                    <div className="text-xs text-muted-foreground">Validated By</div>
                    <div className="mt-1 font-display text-xl font-bold text-primary">5 Agents</div>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <Button className="flex-1" onClick={() => setApproved(true)}>
                    <Check className="mr-2 h-4 w-4" />
                    APPROVE
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    LEARN MORE
                  </Button>
                  <Button variant="ghost" className="flex-1">
                    DISMISS
                  </Button>
                </div>
              </>
            ) : (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20">
                  <Check className="h-10 w-10 text-green-400" />
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold text-green-400">Approved!</h3>
                <p className="mt-2 text-muted-foreground">Recommendation is being executed...</p>
              </motion.div>
            )}

            {/* Particles effect on approval */}
            {approved && (
              <>
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, x: 0, y: 0 }}
                    animate={{
                      scale: [0, 1, 0],
                      x: Math.cos((i / 12) * Math.PI * 2) * 200,
                      y: Math.sin((i / 12) * Math.PI * 2) * 200,
                    }}
                    transition={{ duration: 1, delay: 0.1 }}
                    className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-green-400"
                  />
                ))}
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Section7Results() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  const metrics = [
    { label: "Labor Cost", before: "$12,400", after: "$10,000", improvement: "-19%" },
    { label: "Compliance", before: "85%", after: "96%", improvement: "+11%" },
    { label: "Efficiency", before: "Baseline", after: "+15%", improvement: "+15%" },
    { label: "Reputation", before: "4.3 ★", after: "4.6 ★", improvement: "+7%" },
  ]

  return (
    <section ref={ref} className="relative bg-background py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Real-Time Results</h2>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-muted-foreground">
            Dashboard updates immediately as the recommendation is executed
          </p>
        </motion.div>

        <div className="relative mx-auto mt-8 sm:mt-12 lg:mt-16 max-w-4xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="text-sm font-medium text-muted-foreground">{metric.label}</div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground">Before</div>
                    <div className="font-display text-2xl font-bold line-through opacity-50">{metric.before}</div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-xs text-muted-foreground">After</div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.15 + 0.3 }}
                      className="font-display text-2xl font-bold text-green-400"
                    >
                      {metric.after}
                    </motion.div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-green-500/10 py-2">
                  <Check className="h-4 w-4 text-green-400" />
                  <span className="text-sm font-bold text-green-400">{metric.improvement}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Section8Learning() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  return (
    <section ref={ref} className="relative bg-muted/30 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Continuous Learning</h2>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-muted-foreground">
            Agents learn from outcomes and replicate success across your entire network
          </p>
        </motion.div>

        <div className="relative mx-auto mt-8 sm:mt-12 lg:mt-16 max-w-4xl">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid gap-6 sm:grid-cols-3">
              {agents.slice(0, 3).map((agent, i) => (
                <motion.div
                  key={agent.id}
                  animate={isInView ? { scale: [1, 1.05, 1] } : {}}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.3 }}
                  className={`rounded-xl border-2 border-primary bg-card p-6 text-center ${agent.color}`}
                >
                  <agent.icon className="mx-auto h-12 w-12" />
                  <div className="mt-3 text-sm font-bold">{agent.name}</div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: [0, 1, 0] } : {}}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.3 }}
                    className="mt-2 text-xs text-muted-foreground"
                  >
                    Learning...
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 text-center"
            >
              <div className="inline-block rounded-xl border border-primary/50 bg-primary/10 px-6 py-4">
                <div className="text-sm font-medium text-primary">Pattern Replicated to 7 Other Locations</div>
                <div className="mt-2 font-display text-3xl font-bold text-primary">System Getting Smarter</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Section9Finale() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  return (
    <section ref={ref} className="relative bg-gradient-to-b from-background to-primary/10 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">Perfect Sync</h2>
          <p className="mt-4 sm:mt-6 text-xl sm:text-2xl text-muted-foreground">
            All 6 agents working together, optimizing your entire franchise network 24/7
          </p>

          <div className="relative mx-auto mt-8 sm:mt-12 lg:mt-16 max-w-3xl">
            <div className="grid grid-cols-3 gap-4">
              {agents.map((agent, i) => (
                <motion.div
                  key={agent.id}
                  animate={isInView ? { y: [0, -10, 0] } : {}}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                  className={`rounded-xl border-2 border-primary bg-card p-4 ${agent.color}`}
                >
                  <agent.icon className="mx-auto h-8 w-8" />
                  <div className="mt-2 text-xs font-bold">{agent.name}</div>
                </motion.div>
              ))}
            </div>

            {/* Connection lines between all agents */}
            <svg className="pointer-events-none absolute inset-0 h-full w-full">
              {agents.map((_, i) =>
                agents
                  .slice(i + 1)
                  .map((__, j) => (
                    <motion.line
                      key={`${i}-${j}`}
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 1.5, delay: i * 0.1 }}
                      x1={`${((i % 3) + 0.5) * 33.33}%`}
                      y1={`${(Math.floor(i / 3) + 0.5) * 50}%`}
                      x2={`${(((i + j + 1) % 3) + 0.5) * 33.33}%`}
                      y2={`${(Math.floor((i + j + 1) / 3) + 0.5) * 50}%`}
                      stroke="rgb(6, 182, 212)"
                      strokeWidth="1"
                      strokeOpacity="0.3"
                    />
                  )),
              )}
            </svg>
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16"
          >
            <h3 className="font-display text-3xl font-bold text-balance">Your Entire Franchise Network Improving</h3>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/dashboard">
                  See Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">Start Free Trial</Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export function AnimatedHowItWorks() {
  return (
    <main className="flex-1">
      <Section1Problem />
      <Section2MeetAgents />
      <Section3DataFlowing />
      <Section4AgentsAnalyzing />
      <Section5Collaboration />
      <Section6Recommendation />
      <Section7Results />
      <Section8Learning />
      <Section9Finale />
    </main>
  )
}
