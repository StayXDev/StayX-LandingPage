"use client"

import { Card } from "@/components/ui/card"
import { Calendar, ShieldCheck, Trash2, Star, TrendingDown, Users } from "lucide-react"
import { agents } from "@/lib/mock-data"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const iconMap = {
  calendar: Calendar,
  "shield-check": ShieldCheck,
  "trash-2": Trash2,
  star: Star,
  "trending-down": TrendingDown,
  users: Users,
}

const taskVariations: Record<string, string[]> = {
  scheduling: [
    "Analyzing Location #3 schedule patterns...",
    "Optimizing weekend staffing levels...",
    "Identifying overtime reduction opportunities...",
    "Reviewing peak hour coverage...",
  ],
  compliance: [
    "Reviewing Location #1 license renewals...",
    "Validating certification requirements...",
    "Checking regulatory compliance status...",
    "Monitoring certification expiration dates...",
  ],
  waste: [
    "Location #5 waste exceeds baseline by 23%",
    "Analyzing waste patterns across locations...",
    "Identifying inventory optimization opportunities...",
    "Reviewing food waste reduction strategies...",
  ],
  reputation: [
    "Monitoring 847 reviews across platforms...",
    "Analyzing sentiment trends...",
    "Tracking response rates...",
    "Identifying emerging reputation issues...",
  ],
  cost: [
    "Identifying cost reduction opportunities...",
    "Analyzing vendor pricing trends...",
    "Reviewing operational expenses...",
    "Calculating potential savings...",
  ],
  labor: [
    "Calculating productivity metrics for Q4...",
    "Analyzing labor efficiency patterns...",
    "Reviewing overtime trends...",
    "Optimizing workforce allocation...",
  ],
}

export function AgentStatusPanel() {
  const [animatedAgents, setAnimatedAgents] = useState(agents)
  const [updatingAgent, setUpdatingAgent] = useState<string | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      const agentToUpdate = agents[Math.floor(Math.random() * agents.length)]
      setUpdatingAgent(agentToUpdate.id)
      
      setTimeout(() => {
        setAnimatedAgents((prev) =>
          prev.map((agent) => {
            if (agent.id === agentToUpdate.id) {
              const variations = taskVariations[agent.id] || [agent.currentTask]
              return {
                ...agent,
                confidence: Math.min(99, Math.max(85, agent.confidence + (Math.random() - 0.5) * 2)),
                currentTask: variations[Math.floor(Math.random() * variations.length)],
                status: Math.random() > 0.7 
                  ? (["active", "analyzing", "alert"] as const)[Math.floor(Math.random() * 3)]
                  : agent.status,
              }
            }
            return {
              ...agent,
              confidence: Math.min(99, Math.max(85, agent.confidence + (Math.random() - 0.5) * 1)),
            }
          }),
        )
        setUpdatingAgent(null)
      }, 500)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-display text-xl font-semibold">Agent Status</h2>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
          <span className="text-xs text-muted-foreground">Live</span>
        </div>
      </div>
      <div className="space-y-4">
        <AnimatePresence>
          {animatedAgents.map((agent, index) => {
            const Icon = iconMap[agent.icon as keyof typeof iconMap]
            const statusColors = {
              active: "bg-green-500",
              analyzing: "bg-yellow-500",
              alert: "bg-red-500",
            }
            const isUpdating = updatingAgent === agent.id

            return (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`group rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-md cursor-pointer ${
                  isUpdating ? "ring-2 ring-primary/20" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <motion.div
                    animate={isUpdating ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.5 }}
                    className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary`}
                  >
                    <Icon className="h-5 w-5" />
                    <motion.div
                      animate={agent.status === "analyzing" ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`absolute -right-1 -top-1 h-3 w-3 rounded-full ${statusColors[agent.status]}`}
                    />
                  </motion.div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-semibold leading-tight">{agent.name}</h3>
                      <motion.span
                        key={Math.round(agent.confidence)}
                        animate={{ scale: [1.2, 1] }}
                        transition={{ duration: 0.3 }}
                        className="shrink-0 text-xs font-medium text-primary"
                      >
                        {Math.round(agent.confidence)}%
                      </motion.span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{agent.specialty}</p>
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={agent.currentTask}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 text-xs leading-relaxed text-foreground/80"
                      >
                        {agent.currentTask}
                      </motion.p>
                    </AnimatePresence>
                    <div className="mt-2 h-1 overflow-hidden rounded-full bg-muted">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${agent.confidence}%` }}
                        transition={{ duration: 0.5 }}
                        className="h-full bg-primary"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </Card>
  )
}
