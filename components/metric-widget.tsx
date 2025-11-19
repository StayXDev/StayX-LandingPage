"use client"

import { Card } from "@/components/ui/card"
import { ArrowDown, ArrowUp, Minus } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface MetricWidgetProps {
  title: string
  value: string | number
  subtitle?: string
  trend?: "up" | "down" | "neutral"
  trendValue?: string
  variant?: "default" | "success" | "warning" | "danger"
}

export function MetricWidget({ title, value, subtitle, trend, trendValue, variant = "default" }: MetricWidgetProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const variantStyles = {
    default: "border-border",
    success: "border-green-500/20 bg-green-500/5",
    warning: "border-yellow-500/20 bg-yellow-500/5",
    danger: "border-red-500/20 bg-red-500/5",
  }

  const trendIcons = {
    up: ArrowUp,
    down: ArrowDown,
    neutral: Minus,
  }

  const TrendIcon = trend ? trendIcons[trend] : null

  // Animate numeric values
  useEffect(() => {
    setIsVisible(true)
    if (typeof value === "number") {
      const duration = 1500
      const steps = 60
      const increment = value / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setDisplayValue(value)
          clearInterval(timer)
        } else {
          setDisplayValue(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    } else {
      setDisplayValue(value as any)
    }
  }, [value])

  // Extract number from string values like "$343K" or "94.0%"
  const getNumericValue = () => {
    if (typeof value === "number") return displayValue
    const match = value.toString().match(/[\d.]+/)
    return match ? parseFloat(match[0]) : 0
  }

  const formatValue = () => {
    if (typeof value === "string") {
      const num = getNumericValue()
      if (value.includes("$")) {
        if (value.includes("K")) return `$${num}K`
        return `$${num.toLocaleString()}`
      }
      if (value.includes("%")) return `${num.toFixed(1)}%`
      return value.replace(/[\d.]+/, num.toFixed(1))
    }
    return displayValue
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5 }}
    >
      <Card className={`p-6 transition-all hover:shadow-lg ${variantStyles[variant]}`}>
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">{title}</p>
          <div className="flex items-baseline justify-between">
            <motion.p
              key={displayValue}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
              className="font-display text-3xl font-bold"
            >
              {formatValue()}
            </motion.p>
            {TrendIcon && trendValue && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className={`flex items-center gap-1 text-sm ${
                  trend === "up" ? "text-green-600" : trend === "down" ? "text-red-600" : "text-muted-foreground"
                }`}
              >
                <TrendIcon className="h-4 w-4" />
                <span>{trendValue}</span>
              </motion.div>
            )}
          </div>
          {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
        </div>
      </Card>
    </motion.div>
  )
}
