"use client"

import { Card } from "@/components/ui/card"
import { ArrowRight, MessageSquare, CheckCircle2 } from "lucide-react"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function AgentCollaboration() {
  const [activeStep, setActiveStep] = useState(0)
  const [messageHistory, setMessageHistory] = useState<string[]>([])

  const collaborationFlow = [
    {
      from: "Scheduling Agent",
      to: "Cost Agent",
      message: "Proposed schedule saves $2.4K but increases labor hours by 8%",
      timestamp: "2s ago",
    },
    {
      from: "Cost Agent",
      to: "Compliance Agent",
      message: "Analyzing if increased hours meet minimum wage requirements",
      timestamp: "5s ago",
    },
    {
      from: "Compliance Agent",
      to: "Scheduling Agent",
      message: "Schedule complies with all regulations. Approved.",
      timestamp: "8s ago",
    },
    {
      from: "Waste Agent",
      to: "Cost Agent",
      message: "Location #5 waste pattern identified. Potential $1.8K/month savings.",
      timestamp: "12s ago",
    },
    {
      from: "Reputation Agent",
      to: "Scheduling Agent",
      message: "Peak hour complaints correlate with understaffing. Recommend +2 staff.",
      timestamp: "15s ago",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % collaborationFlow.length)
      const currentMessage = collaborationFlow[activeStep]?.message
      if (currentMessage && !messageHistory.includes(currentMessage)) {
        setMessageHistory((prev) => [currentMessage, ...prev].slice(0, 3))
      }
    }, 4000)

    return () => clearInterval(interval)
  }, [activeStep])

  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-display text-xl font-semibold">Agent Collaboration</h2>
        <div className="flex items-center gap-2">
          <MessageSquare className="h-4 w-4 text-primary" />
          <span className="text-xs text-muted-foreground">Live</span>
        </div>
      </div>
      <div className="space-y-4">
        <AnimatePresence mode="wait">
          {collaborationFlow.slice(0, 3).map((flow, index) => {
            const isActive = index === activeStep % 3
            const displayIndex = (activeStep + index) % collaborationFlow.length
            const displayFlow = collaborationFlow[displayIndex]

            return (
              <motion.div
                key={`${displayIndex}-${activeStep}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isActive ? 1 : 0.5, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className={`flex items-center gap-4 rounded-lg border p-4 transition-all ${
                  isActive ? "border-primary bg-primary/5 shadow-md ring-1 ring-primary/20" : "border-border bg-card"
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-sm">
                    <motion.span
                      animate={isActive ? { color: "#3b82f6" } : {}}
                      className="font-semibold"
                    >
                      {displayFlow.from}
                    </motion.span>
                    <motion.div
                      animate={isActive ? { x: [0, 5, 0] } : {}}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </motion.div>
                    <motion.span
                      animate={isActive ? { color: "#3b82f6" } : {}}
                      className="font-semibold"
                    >
                      {displayFlow.to}
                    </motion.span>
                    <span className="ml-auto text-xs text-muted-foreground">{displayFlow.timestamp}</span>
                  </div>
                  <motion.p
                    key={displayFlow.message}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-sm text-muted-foreground"
                  >
                    {displayFlow.message}
                  </motion.p>
                </div>
                {isActive && (
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="h-2 w-2 rounded-full bg-primary"
                  />
                )}
                {!isActive && index === 0 && (
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" />
                )}
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
      <div className="mt-4 rounded-lg bg-muted/50 p-3">
        <p className="text-xs text-muted-foreground">
          <span className="font-semibold">6 agents</span> collaborating in real-time to ensure recommendations are optimized across all operational areas
        </p>
      </div>
    </Card>
  )
}
