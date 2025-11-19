"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Play,
  ChevronRight,
  ChevronLeft,
  Star,
  TrendingDown,
  TrendingUp,
  DollarSign,
  Users,
  AlertCircle,
  CheckCircle2,
  Brain,
  Zap,
  Search,
  Calendar,
  ClipboardCheck,
  X,
  Info,
  Check,
} from "lucide-react"

type DemoScreen = "entry" | "problem" | "analysis" | "recommendations" | "execution" | "results"

interface Recommendation {
  id: string
  title: string
  priority: "urgent" | "high" | "medium"
  icon: React.ElementType
  problem: string
  actions: string[]
  results: {
    rating: string
    revenue: string
    sentiment: string
    extra: string
  }
  confidence: number
  approved: boolean
}

export function InteractiveDemo() {
  const [screen, setScreen] = useState<DemoScreen>("entry")
  const [isAnimating, setIsAnimating] = useState(false)
  const [analysisProgress, setAnalysisProgress] = useState(0)
  const [executionProgress, setExecutionProgress] = useState<Record<string, number>>({})
  const [recommendations, setRecommendations] = useState<Recommendation[]>([
    {
      id: "1",
      title: "Respond to Negative Reviews Immediately",
      priority: "urgent",
      icon: Zap,
      problem:
        "Location #2 has 5 negative reviews with ZERO responses. Every day without a response costs you customers.",
      actions: [
        "Respond to each negative review (templates below)",
        "Personally reach out to upset customers",
        "Schedule staff training for Location #2 (this week)",
      ],
      results: {
        rating: "3.8★ → 4.1★ (+0.3 stars)",
        revenue: "+$600/week",
        sentiment: "-50%",
        extra: "Repeat customer rate: +18%",
      },
      confidence: 98,
      approved: false,
    },
    {
      id: "2",
      title: "Investigate Food Quality (Location #4)",
      priority: "high",
      icon: Search,
      problem:
        "Food quality complaints at Location #4 started 2 weeks ago. This is killing your reputation AND revenue.",
      actions: [
        "Audit your food supplier's quality",
        "Inspect current food prep procedures",
        "Retrain kitchen staff on quality standards",
        "Check for recent menu/supply changes",
      ],
      results: {
        rating: "3.5★ → 4.2★ (+0.7 stars)",
        revenue: "+$400/week",
        sentiment: "Stop negative trend immediately",
        extra: "Competitive advantage restored",
      },
      confidence: 94,
      approved: false,
    },
    {
      id: "3",
      title: "Reduce Wait Times (Peak Hours)",
      priority: "medium",
      icon: Calendar,
      problem: "Customers complaining about long waits at lunch and dinner time. Every 5-min wait = 1 lost customer.",
      actions: [
        "Add 2 extra staff during 12:00pm-2:00pm",
        "Add 3 extra staff during 6:00pm-8:00pm",
        "Optimize ordering process (faster checkout)",
        'Set customer expectations ("~8 min wait")',
      ],
      results: {
        rating: "+0.3★ from this alone",
        revenue: "+$300/week",
        sentiment: "Customer satisfaction: +22%",
        extra: "Reduce wait time: 15 min → 8 min",
      },
      confidence: 87,
      approved: false,
    },
  ])

  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const goToScreen = (newScreen: DemoScreen) => {
    setIsAnimating(true)
    setTimeout(() => {
      setScreen(newScreen)
      setIsAnimating(false)
    }, 300)
  }

  // Analysis progress animation
  useEffect(() => {
    if (screen === "analysis" && analysisProgress < 100) {
      const timer = setTimeout(() => {
        setAnalysisProgress((prev) => Math.min(prev + 2, 100))
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [screen, analysisProgress])

  // Execution progress animation
  useEffect(() => {
    if (screen === "execution") {
      const actions = ["templates", "training", "schedules", "audit"]
      const targets = [100, 30, 100, 40]

      actions.forEach((action, index) => {
        const timer = setInterval(
          () => {
            setExecutionProgress((prev) => {
              const current = prev[action] || 0
              if (current < targets[index]) {
                return { ...prev, [action]: Math.min(current + 5, targets[index]) }
              }
              return prev
            })
          },
          100 + index * 50,
        )
      })
    }
  }, [screen])

  const approveRecommendation = (id: string) => {
    setRecommendations((prev) => prev.map((rec) => (rec.id === id ? { ...rec, approved: true } : rec)))
  }

  const approveAll = () => {
    setRecommendations((prev) => prev.map((rec) => ({ ...rec, approved: true })))
  }

  const allApproved = recommendations.every((rec) => rec.approved)

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "destructive"
      case "high":
        return "default"
      case "medium":
        return "secondary"
      default:
        return "secondary"
    }
  }

  if (screen === "entry") {
    return (
      <Card className="overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5">
        <div className="p-8 text-center md:p-12">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Play className="h-8 w-8 text-primary" />
          </div>
          <h2 className="font-display text-2xl font-bold md:text-3xl">Interactive Demo: See StayX in Action</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Watch how AI agents solve real franchise challenges
          </p>
          <div className="mt-8">
            <div className="mx-auto max-w-xl rounded-lg border bg-card p-6 text-left">
              <h3 className="mb-2 font-semibold">Use Case: Review Management</h3>
              <p className="text-sm text-muted-foreground">"How we turned negative reviews into growth"</p>
            </div>
          </div>
          <Button size="lg" className="mt-8 gap-2 text-lg" onClick={() => goToScreen("problem")}>
            <Play className="h-5 w-5" />
            Launch Interactive Demo
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">Takes ~3 minutes • See real results • Full walkthrough</p>
        </div>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden border-2 border-primary/20">
      {/* Progress Indicator */}
      <div className="border-b bg-muted/50 px-6 py-3">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span className="font-medium">Interactive Demo</span>
            <Badge variant="secondary" className="text-xs">
              {screen === "problem" && "Step 1/5"}
              {screen === "analysis" && "Step 2/5"}
              {screen === "recommendations" && "Step 3/5"}
              {screen === "execution" && "Step 4/5"}
              {screen === "results" && "Step 5/5"}
            </Badge>
          </div>
          <Button variant="ghost" size="sm" onClick={() => goToScreen("entry")} className="gap-1 text-xs">
            <X className="h-3 w-3" />
            Exit Demo
          </Button>
        </div>
      </div>

      <div className={`transition-opacity duration-300 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
        {/* Screen 1: Problem Overview */}
        {screen === "problem" && (
          <div className="p-6 md:p-8">
            <h2 className="mb-6 font-display text-2xl font-bold">Your Review Situation (Today)</h2>

            <div className="space-y-6">
              {/* Location Performance */}
              <div>
                <h3 className="mb-3 font-semibold">Location Performance:</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between rounded-lg border bg-card p-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Location #1: 4.2</span>
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    </div>
                    <div className="flex items-center gap-1 text-orange-500">
                      <TrendingDown className="h-4 w-4" />
                      <span className="text-sm">0.6 this week</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-red-500/50 bg-red-500/10 p-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">Location #2: 3.8</span>
                      <Star className="h-4 w-4 fill-red-500 text-red-500" />
                    </div>
                    <div className="flex items-center gap-1 text-red-500">
                      <TrendingDown className="h-4 w-4" />
                      <span className="text-sm font-medium">1.2 - CRITICAL</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-green-500/50 bg-green-500/10 p-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Location #3: 4.7</span>
                      <Star className="h-4 w-4 fill-green-500 text-green-500" />
                    </div>
                    <div className="flex items-center gap-1 text-green-500">
                      <TrendingUp className="h-4 w-4" />
                      <span className="text-sm">0.3 - Good!</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-orange-500/50 bg-orange-500/10 p-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Location #4: 3.5</span>
                      <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
                    </div>
                    <div className="flex items-center gap-1 text-orange-500">
                      <TrendingDown className="h-4 w-4" />
                      <span className="text-sm">0.9 - WARNING</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Negative Reviews */}
              <div>
                <h3 className="mb-3 font-semibold">Recent Negative Reviews:</h3>
                <div className="space-y-2">
                  <div className="rounded-lg border bg-card p-3">
                    <div className="flex items-start gap-2">
                      <Star className="mt-0.5 h-4 w-4 text-red-500" />
                      <div className="flex-1 text-sm">
                        <p className="font-medium">"Rude staff" (Location #2)</p>
                        <p className="text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-card p-3">
                    <div className="flex items-start gap-2">
                      <Star className="mt-0.5 h-4 w-4 text-red-500" />
                      <div className="flex-1 text-sm">
                        <p className="font-medium">"Food quality down" (Location #4)</p>
                        <p className="text-muted-foreground">4 hours ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-card p-3">
                    <div className="flex items-start gap-2">
                      <Star className="mt-0.5 h-4 w-4 text-red-500" />
                      <div className="flex-1 text-sm">
                        <p className="font-medium">"Long wait times" (Location #1)</p>
                        <p className="text-muted-foreground">8 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Impact */}
              <div className="rounded-lg border-2 border-destructive/50 bg-destructive/5 p-4">
                <h3 className="mb-3 font-semibold">Business Impact This Week:</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-red-500" />
                    <span>Estimated revenue loss: $2,400</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingDown className="h-4 w-4 text-red-500" />
                    <span>Website traffic down: -18%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-red-500" />
                    <span>Customer acquisition cost up: +32%</span>
                  </div>
                </div>
              </div>

              <p className="text-center font-medium text-destructive">This is costing you money. Let's fix it.</p>
            </div>

            <div className="mt-8 flex justify-center">
              <Button size="lg" onClick={() => goToScreen("analysis")} className="gap-2">
                See How StayX Solves This
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        )}

        {/* Screen 2: Analysis */}
        {screen === "analysis" && (
          <div className="p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold">Reputation Agent: Deep Analysis</h2>
                <div className="mt-1 flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                    <div className="h-2 w-2 rounded-full bg-muted" style={{ animationDelay: "0.2s" }} />
                    <div className="h-2 w-2 animate-pulse rounded-full bg-red-500" style={{ animationDelay: "0.4s" }} />
                  </div>
                  <span className="text-sm text-muted-foreground">Analyzing Your Reviews</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-4 font-semibold">Key Insights Discovered:</h3>
                <div className="space-y-4">
                  {/* Critical Issue */}
                  <div className="rounded-lg border-2 border-red-500/50 bg-red-500/5 p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                      <span className="font-semibold text-red-500">CRITICAL: Location #2 Staff Issues</span>
                    </div>
                    <ul className="ml-7 space-y-1 text-sm">
                      <li>5 reviews mentioning "rude" or "unfriendly"</li>
                      <li>Zero responses to these reviews (!)</li>
                      <li>Trend: Worsening over 2 weeks</li>
                    </ul>
                    <div className="mt-3">
                      <div className="text-xs text-muted-foreground">Confidence Level:</div>
                      <div className="mt-1 h-2 overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full bg-red-500 transition-all duration-1000"
                          style={{ width: `${Math.min(analysisProgress, 98)}%` }}
                        />
                      </div>
                      <div className="mt-1 text-right text-xs font-medium">98%</div>
                    </div>
                  </div>

                  {/* Warning Issue */}
                  <div className="rounded-lg border-2 border-orange-500/50 bg-orange-500/5 p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-orange-500" />
                      <span className="font-semibold text-orange-500">WARNING: Location #4 Food Quality</span>
                    </div>
                    <ul className="ml-7 space-y-1 text-sm">
                      <li>3 reviews about quality drop</li>
                      <li>Pattern started 2 weeks ago</li>
                      <li>Comparison: Other locations not affected</li>
                    </ul>
                    <div className="mt-3">
                      <div className="text-xs text-muted-foreground">Confidence Level:</div>
                      <div className="mt-1 h-2 overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full bg-orange-500 transition-all duration-1000"
                          style={{ width: `${Math.min(analysisProgress, 94)}%` }}
                        />
                      </div>
                      <div className="mt-1 text-right text-xs font-medium">94%</div>
                    </div>
                  </div>

                  {/* Notice */}
                  <div className="rounded-lg border-2 border-yellow-500/50 bg-yellow-500/5 p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <Info className="h-5 w-5 text-yellow-600" />
                      <span className="font-semibold text-yellow-700">NOTICE: Long Wait Times (Multi-location)</span>
                    </div>
                    <ul className="ml-7 space-y-1 text-sm">
                      <li>Locations #1 & #4 mentioned waits</li>
                      <li>Peak times: 12:00pm-2:00pm, 6:00pm-8:00pm</li>
                      <li>Customer sentiment: Frustrated</li>
                    </ul>
                    <div className="mt-3">
                      <div className="text-xs text-muted-foreground">Confidence Level:</div>
                      <div className="mt-1 h-2 overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full bg-yellow-500 transition-all duration-1000"
                          style={{ width: `${Math.min(analysisProgress, 87)}%` }}
                        />
                      </div>
                      <div className="mt-1 text-right text-xs font-medium">87%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Agent Collaboration */}
              <div className="rounded-lg border bg-card p-4">
                <h3 className="mb-3 font-semibold">Agent Collaboration:</h3>
                <p className="mb-3 text-sm text-muted-foreground">Reputation Agent is consulting with:</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Scheduling Agent (about wait times)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Operations Agent (about quality issues)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Labor Agent (about staff performance)</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-sm text-muted-foreground">Building unified recommendations...</div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full bg-primary transition-all duration-500"
                      style={{ width: `${analysisProgress}%` }}
                    />
                  </div>
                  <div className="mt-1 text-right text-xs font-medium">{analysisProgress}%</div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-between">
              <Button variant="outline" onClick={() => goToScreen("problem")} className="gap-2">
                <ChevronLeft className="h-4 w-4" />
                Back
              </Button>
              <Button
                size="lg"
                onClick={() => goToScreen("recommendations")}
                disabled={analysisProgress < 100}
                className="gap-2"
              >
                See Recommendations
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        )}

        {/* Screen 3: Recommendations */}
        {screen === "recommendations" && (
          <div className="p-6 md:p-8">
            <h2 className="mb-6 font-display text-2xl font-bold">Smart Recommendations</h2>

            <div className="space-y-4">
              {recommendations.map((rec, index) => {
                const Icon = rec.icon
                const isExpanded = expandedCard === rec.id

                return (
                  <Card
                    key={rec.id}
                    className={`overflow-hidden transition-all hover:shadow-md ${
                      rec.approved ? "border-green-500 bg-green-500/5" : ""
                    }`}
                  >
                    <div className="p-4">
                      <div className="mb-3 flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <div
                            className={`mt-0.5 flex h-10 w-10 items-center justify-center rounded-full ${
                              rec.priority === "urgent"
                                ? "bg-red-500/10"
                                : rec.priority === "high"
                                  ? "bg-orange-500/10"
                                  : "bg-yellow-500/10"
                            }`}
                          >
                            <Icon
                              className={`h-5 w-5 ${
                                rec.priority === "urgent"
                                  ? "text-red-500"
                                  : rec.priority === "high"
                                    ? "text-orange-500"
                                    : "text-yellow-600"
                              }`}
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold">{rec.title}</h3>
                            <div className="mt-1 flex flex-wrap items-center gap-2">
                              <Badge variant={getPriorityColor(rec.priority)}>{rec.priority.toUpperCase()}</Badge>
                              <span className="text-xs text-muted-foreground">{rec.confidence}% confident</span>
                            </div>
                          </div>
                        </div>
                        {rec.approved && (
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
                            <Check className="h-5 w-5 text-white" />
                          </div>
                        )}
                      </div>

                      <div className="space-y-3">
                        <div>
                          <h4 className="mb-1 text-sm font-medium">The Problem:</h4>
                          <p className="text-sm text-muted-foreground">{rec.problem}</p>
                        </div>

                        {isExpanded && (
                          <>
                            <div>
                              <h4 className="mb-2 text-sm font-medium">What You Should Do:</h4>
                              <ul className="space-y-1">
                                {rec.actions.map((action, i) => (
                                  <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                    <span>{action}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="rounded-lg bg-muted/50 p-3">
                              <h4 className="mb-2 text-sm font-medium">Expected Results:</h4>
                              <div className="space-y-1 text-sm">
                                <div className="flex items-center gap-2">
                                  <TrendingUp className="h-4 w-4 text-green-500" />
                                  <span>Rating improvement: {rec.results.rating}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <DollarSign className="h-4 w-4 text-green-500" />
                                  <span>Revenue recovery: {rec.results.revenue}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Users className="h-4 w-4 text-green-500" />
                                  <span>{rec.results.sentiment}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                                  <span>{rec.results.extra}</span>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <Button
                          size="sm"
                          onClick={() => approveRecommendation(rec.id)}
                          disabled={rec.approved}
                          className="gap-1"
                        >
                          {rec.approved ? (
                            <>
                              <Check className="h-4 w-4" />
                              Approved
                            </>
                          ) : (
                            <>
                              <CheckCircle2 className="h-4 w-4" />
                              Approve
                            </>
                          )}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setExpandedCard(isExpanded ? null : rec.id)}
                          className="gap-1"
                        >
                          <Info className="h-4 w-4" />
                          {isExpanded ? "Less" : "More"}
                        </Button>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>

            {!allApproved && (
              <div className="mt-6 text-center">
                <Button onClick={approveAll} size="lg" className="gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  Approve All Recommendations
                </Button>
              </div>
            )}

            <div className="mt-8 flex justify-between">
              <Button variant="outline" onClick={() => goToScreen("analysis")} className="gap-2">
                <ChevronLeft className="h-4 w-4" />
                Back
              </Button>
              <Button size="lg" onClick={() => goToScreen("execution")} disabled={!allApproved} className="gap-2">
                Execute Now
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        )}

        {/* Screen 4: Execution */}
        {screen === "execution" && (
          <div className="p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
                <CheckCircle2 className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold">Executing Your Recommendations</h2>
                <p className="text-sm text-muted-foreground">StayX is implementing these changes automatically</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-4 font-semibold">Implementation Status:</h3>
                <div className="space-y-4">
                  {/* Action 1 */}
                  <div className="rounded-lg border bg-card p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <ClipboardCheck className="h-5 w-5 text-primary" />
                      <span className="font-medium">Generate Response Templates</span>
                    </div>
                    <div className="mb-2 h-2 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full bg-primary transition-all duration-300"
                        style={{ width: `${executionProgress.templates || 0}%` }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {executionProgress.templates === 100 ? (
                        <span className="text-green-600">✓ Complete - Templates ready for staff</span>
                      ) : (
                        "Creating response templates for staff behavior..."
                      )}
                    </p>
                  </div>

                  {/* Action 2 */}
                  <div className="rounded-lg border bg-card p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="font-medium">Schedule Staff Training</span>
                    </div>
                    <div className="mb-2 h-2 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full bg-primary transition-all duration-300"
                        style={{ width: `${executionProgress.training || 0}%` }}
                      />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>Scheduling training for 8 staff members</p>
                      <p className="mt-1">When: Thursday 2:00pm at Location #2</p>
                      <p>Topics: Customer service, conflict resolution</p>
                    </div>
                  </div>

                  {/* Action 3 */}
                  <div className="rounded-lg border border-green-500/50 bg-green-500/5 p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-green-600" />
                      <span className="font-medium">Update Franchise Schedules</span>
                      <Badge variant="outline" className="ml-auto border-green-500 text-green-600">
                        Complete
                      </Badge>
                    </div>
                    <div className="mb-2 h-2 overflow-hidden rounded-full bg-muted">
                      <div className="h-full bg-green-500" style={{ width: "100%" }} />
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>✓ Location #1: +2 staff 12:00pm-2:00pm</p>
                      <p>✓ Location #4: +3 staff 6:00pm-8:00pm</p>
                      <p className="text-green-600">New schedules pushed to all managers</p>
                    </div>
                  </div>

                  {/* Action 4 */}
                  <div className="rounded-lg border bg-card p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <Search className="h-5 w-5 text-primary" />
                      <span className="font-medium">Quality Audit Scheduled</span>
                    </div>
                    <div className="mb-2 h-2 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full bg-primary transition-all duration-300"
                        style={{ width: `${executionProgress.audit || 0}%` }}
                      />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>Quality inspector assigned</p>
                      <p className="mt-1">When: Tomorrow 10:00am at Location #4</p>
                      <p>Focus: Supplier quality, prep procedures</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notifications */}
              <div className="rounded-lg border-2 border-primary/50 bg-primary/5 p-4">
                <h3 className="mb-3 font-semibold">Notifications Sent:</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    <span>Location #1 Manager - Schedule updated (2 staff added)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    <span>Location #2 Manager - Training scheduled (Thursday)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    <span>Location #4 Manager - Audit scheduled (Tomorrow)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    <span>Training Team - 8 staff invited to session</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    <span>Quality Team - Audit assignment sent</span>
                  </div>
                </div>
                <p className="mt-3 font-medium text-green-600">Everything is set up and your teams are notified.</p>
              </div>
            </div>

            <div className="mt-8 flex justify-between">
              <Button variant="outline" onClick={() => goToScreen("recommendations")} className="gap-2">
                <ChevronLeft className="h-4 w-4" />
                Back
              </Button>
              <Button size="lg" onClick={() => goToScreen("results")} className="gap-2">
                See What Changed After 1 Week
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        )}

        {/* Screen 5: Results */}
        {screen === "results" && (
          <div className="p-6 md:p-8">
            <h2 className="mb-6 font-display text-2xl font-bold">Your Results - 1 Week Later</h2>

            <div className="space-y-6">
              {/* Ratings Transformation */}
              <div>
                <h3 className="mb-4 font-semibold">Ratings Transformed:</h3>
                <div className="space-y-4">
                  {/* Location 1 */}
                  <div className="rounded-lg border bg-card p-4">
                    <h4 className="mb-3 font-medium">Location #1:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Before: 4.2★</span>
                        <div className="h-2 flex-1 mx-4 overflow-hidden rounded-full bg-muted">
                          <div className="h-full bg-orange-500" style={{ width: "60%" }} />
                        </div>
                        <span className="text-muted-foreground">60%</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">After: 4.5★</span>
                        <div className="h-2 flex-1 mx-4 overflow-hidden rounded-full bg-muted">
                          <div className="h-full bg-green-500" style={{ width: "70%" }} />
                        </div>
                        <span className="font-medium">70%</span>
                      </div>
                      <div className="flex items-center gap-2 text-green-600">
                        <TrendingUp className="h-4 w-4" />
                        <span className="text-sm font-medium">+0.3 ⭐ IMPROVED</span>
                      </div>
                    </div>
                  </div>

                  {/* Location 2 - Biggest Improvement */}
                  <div className="rounded-lg border-2 border-green-500 bg-green-500/10 p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <h4 className="font-medium">Location #2:</h4>
                      <Badge className="bg-green-500">BIGGEST IMPROVEMENT!</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Before: 3.8★</span>
                        <div className="h-2 flex-1 mx-4 overflow-hidden rounded-full bg-muted">
                          <div className="h-full bg-red-500" style={{ width: "56%" }} />
                        </div>
                        <span className="text-muted-foreground">56%</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">After: 4.3★</span>
                        <div className="h-2 flex-1 mx-4 overflow-hidden rounded-full bg-muted">
                          <div className="h-full bg-green-500" style={{ width: "75%" }} />
                        </div>
                        <span className="font-medium">75%</span>
                      </div>
                      <div className="flex items-center gap-2 text-green-600">
                        <TrendingUp className="h-4 w-4" />
                        <span className="text-sm font-medium">+0.5 ⭐⭐ CRITICAL TURNAROUND!</span>
                      </div>
                      <div className="mt-3 rounded bg-green-500/20 p-3 text-sm">
                        <p className="font-medium">Customer responded to your review response:</p>
                        <p className="mt-1 italic">"Thank you for the response. We'll give you another chance!"</p>
                        <p className="mt-1 text-green-700">= Repeat business!</p>
                      </div>
                    </div>
                  </div>

                  {/* Location 3 */}
                  <div className="rounded-lg border bg-card p-4">
                    <h4 className="mb-3 font-medium">Location #3:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Before: 4.7★</span>
                        <div className="h-2 flex-1 mx-4 overflow-hidden rounded-full bg-muted">
                          <div className="h-full bg-green-500" style={{ width: "94%" }} />
                        </div>
                        <span className="text-muted-foreground">94%</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">After: 4.7★</span>
                        <div className="h-2 flex-1 mx-4 overflow-hidden rounded-full bg-muted">
                          <div className="h-full bg-green-500" style={{ width: "94%" }} />
                        </div>
                        <span className="font-medium">94%</span>
                      </div>
                      <div className="text-sm text-muted-foreground">→ Stable (Already excellent)</div>
                    </div>
                  </div>

                  {/* Location 4 */}
                  <div className="rounded-lg border-2 border-green-500 bg-green-500/10 p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <h4 className="font-medium">Location #4:</h4>
                      <Badge className="bg-green-500">MAJOR RECOVERY!</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Before: 3.5★</span>
                        <div className="h-2 flex-1 mx-4 overflow-hidden rounded-full bg-muted">
                          <div className="h-full bg-red-500" style={{ width: "50%" }} />
                        </div>
                        <span className="text-muted-foreground">50%</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">After: 4.1★</span>
                        <div className="h-2 flex-1 mx-4 overflow-hidden rounded-full bg-muted">
                          <div className="h-full bg-green-500" style={{ width: "68%" }} />
                        </div>
                        <span className="font-medium">68%</span>
                      </div>
                      <div className="flex items-center gap-2 text-green-600">
                        <TrendingUp className="h-4 w-4" />
                        <span className="text-sm font-medium">+0.6 ⭐⭐ MAJOR RECOVERY!</span>
                      </div>
                      <div className="mt-3 rounded bg-green-500/20 p-3 text-sm">
                        <p className="font-medium">New reviews mention improvement:</p>
                        <p className="mt-1 italic">"Quality is back to normal!" "Much better now!"</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Network Average */}
                <div className="mt-4 rounded-lg border-2 border-primary bg-primary/5 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Network Average Before: 4.05★</p>
                      <p className="text-lg font-bold">Network Average After: 4.41★</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-2xl font-bold text-green-600">
                        <TrendingUp className="h-6 w-6" />
                        +0.36★
                      </div>
                      <p className="text-sm text-green-600">Above Average!</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Financial Impact */}
              <div className="rounded-lg border-2 border-green-500 bg-green-500/5 p-4">
                <h3 className="mb-3 font-semibold">Financial Impact (1 Week):</h3>
                <div className="grid gap-3 md:grid-cols-3">
                  <div className="rounded-lg bg-background p-3 text-center">
                    <DollarSign className="mx-auto h-8 w-8 text-green-500" />
                    <p className="mt-2 text-2xl font-bold text-green-600">+$2,400</p>
                    <p className="text-sm text-muted-foreground">Direct Revenue Recovery</p>
                  </div>
                  <div className="rounded-lg bg-background p-3 text-center">
                    <Users className="mx-auto h-8 w-8 text-green-500" />
                    <p className="mt-2 text-2xl font-bold text-green-600">+35</p>
                    <p className="text-sm text-muted-foreground">New Customers This Month</p>
                  </div>
                  <div className="rounded-lg bg-background p-3 text-center">
                    <TrendingUp className="mx-auto h-8 w-8 text-green-500" />
                    <p className="mt-2 text-2xl font-bold text-green-600">+22%</p>
                    <p className="text-sm text-muted-foreground">Repeat Customer Rate</p>
                  </div>
                </div>
                <div className="mt-4 space-y-1 text-sm">
                  <p className="flex justify-between">
                    <span>Monthly Projection:</span>
                    <span className="font-bold text-green-600">~$9,600 recurring benefit</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Annual Projection:</span>
                    <span className="font-bold text-green-600">~$115,200 per year</span>
                  </p>
                </div>
              </div>

              {/* Customer Testimonials */}
              <div>
                <h3 className="mb-3 font-semibold">What Customers Are Saying:</h3>
                <div className="space-y-3">
                  <div className="rounded-lg border bg-card p-4">
                    <div className="mb-2 flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-sm">
                      "Amazing response to feedback! Really appreciate you taking our concerns seriously"
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">- Location #2 Reviewer</p>
                  </div>
                  <div className="rounded-lg border bg-card p-4">
                    <div className="mb-2 flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-sm">
                      "Quality is back to normal. So glad you fixed this. We're regular customers again!"
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">- Location #4 Reviewer</p>
                  </div>
                  <div className="rounded-lg border bg-card p-4">
                    <div className="mb-2 flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-sm">
                      "Faster service during lunch now. Much better experience. Will recommend!"
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">- Location #1 Reviewer</p>
                  </div>
                </div>
              </div>

              {/* Bottom Summary */}
              <div className="rounded-lg border-2 border-primary bg-primary/5 p-4">
                <h3 className="mb-3 font-semibold">What This Means For Your Business:</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    <span>Your competitive advantage is restored</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    <span>Customer lifetime value increased</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    <span>Word-of-mouth marketing improved</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    <span>Repeat customer rate climbing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    <span>You're now ahead of competitors</span>
                  </div>
                </div>
                <p className="mt-4 font-medium text-primary">
                  This is just ONE use case. Imagine this across all your operations (scheduling, compliance, waste,
                  labor).
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button variant="outline" onClick={() => goToScreen("entry")} className="gap-2">
                <ChevronLeft className="h-4 w-4" />
                Back to Start
              </Button>
              <Button size="lg" asChild className="gap-2">
                <a href="/contact">
                  <CheckCircle2 className="h-5 w-5" />
                  Start Free Trial
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}
