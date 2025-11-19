"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { recommendations } from "@/lib/mock-data"
import { AlertCircle, CheckCircle, TrendingUp, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface RecommendationsWidgetProps {
  selectedLocation: number | null
}

export function RecommendationsWidget({ selectedLocation }: RecommendationsWidgetProps) {
  const [expandedRec, setExpandedRec] = useState<string | null>(null)
  const [approvedRecs, setApprovedRecs] = useState<Set<string>>(new Set())
  const [newRecs, setNewRecs] = useState<Set<string>>(new Set())

  const filteredRecommendations = selectedLocation
    ? recommendations.filter((rec) => rec.locationId === selectedLocation || !rec.locationId)
    : recommendations

  // Simulate new recommendations appearing
  useEffect(() => {
    const timer = setTimeout(() => {
      if (filteredRecommendations.length > 0) {
        const randomRec = filteredRecommendations[Math.floor(Math.random() * filteredRecommendations.length)]
        setNewRecs((prev) => new Set([...prev, randomRec.id]))
        setTimeout(() => setNewRecs((prev) => {
          const next = new Set(prev)
          next.delete(randomRec.id)
          return next
        }), 3000)
      }
    }, 5000)
    return () => clearTimeout(timer)
  }, [filteredRecommendations])

  const priorityColors = {
    high: "bg-red-500/10 text-red-700 border-red-500/20",
    medium: "bg-yellow-500/10 text-yellow-700 border-yellow-500/20",
    low: "bg-blue-500/10 text-blue-700 border-blue-500/20",
  }

  const priorityIcons = {
    high: AlertCircle,
    medium: TrendingUp,
    low: CheckCircle,
  }

  const handleApprove = (recId: string) => {
    setApprovedRecs((prev) => new Set([...prev, recId]))
  }

  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-display text-xl font-semibold">Top Recommendations</h2>
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="h-4 w-4 text-primary" />
          </motion.div>
          <Badge variant="secondary">{filteredRecommendations.length} Active</Badge>
        </div>
      </div>

      <div className="space-y-4">
        <AnimatePresence>
          {filteredRecommendations.map((rec, index) => {
            const PriorityIcon = priorityIcons[rec.priority]
            const isExpanded = expandedRec === rec.id
            const isApproved = approvedRecs.has(rec.id)
            const isNew = newRecs.has(rec.id)

            return (
              <motion.div
                key={rec.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`relative rounded-lg border transition-all cursor-pointer ${priorityColors[rec.priority]} p-4 ${
                  isNew ? "ring-2 ring-primary/50" : ""
                } ${isApproved ? "bg-green-500/5 border-green-500/30" : ""}`}
              >
                {isNew && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground"
                  >
                    <span className="text-xs font-bold">NEW</span>
                  </motion.div>
                )}
                <div className="flex items-start gap-3">
                  <motion.div
                    animate={isNew ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <PriorityIcon className="mt-0.5 h-5 w-5 shrink-0" />
                  </motion.div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-semibold leading-tight">{rec.title}</h3>
                        <p className="mt-1 text-xs opacity-75">{rec.agentName}</p>
                      </div>
                      {rec.savings > 0 && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <Badge variant="secondary" className="shrink-0">
                            ${rec.savings.toLocaleString()}/mo
                          </Badge>
                        </motion.div>
                      )}
                    </div>

                    <p className="text-sm leading-relaxed">{rec.description}</p>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 overflow-hidden rounded-md bg-background/50 p-3 text-sm"
                        >
                          <p className="font-semibold">Why this recommendation?</p>
                          <p className="mt-2 text-xs leading-relaxed opacity-90">
                            Our {rec.agentName} analyzed 90 days of operational data and identified this pattern using
                            machine learning algorithms. This recommendation has a 94% confidence score based on similar
                            successful implementations across our network.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="mt-4 flex gap-2">
                      <Button
                        size="sm"
                        variant={isApproved ? "default" : "default"}
                        onClick={() => handleApprove(rec.id)}
                        disabled={isApproved}
                        className={isApproved ? "bg-green-600 hover:bg-green-700" : ""}
                      >
                        {isApproved ? "✓ Approved" : "Approve"}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setExpandedRec(isExpanded ? null : rec.id)}
                      >
                        {isExpanded ? "Hide" : "Learn More"}
                      </Button>
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
