"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { locations } from "@/lib/mock-data"
import { ChevronRight, TrendingUp, TrendingDown } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface LocationsTableProps {
  onLocationSelect: (locationId: number | null) => void
  selectedLocation: number | null
}

export function LocationsTable({ onLocationSelect, selectedLocation }: LocationsTableProps) {
  const [animatedLocations, setAnimatedLocations] = useState(locations)
  const [updatingLocation, setUpdatingLocation] = useState<number | null>(null)

  const statusVariants = {
    healthy: { badge: "bg-green-500/10 text-green-700 border-green-500/20", label: "Healthy" },
    warning: { badge: "bg-yellow-500/10 text-yellow-700 border-yellow-500/20", label: "Warning" },
    alert: { badge: "bg-red-500/10 text-red-700 border-red-500/20", label: "Alert" },
  }

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      const locationToUpdate = locations[Math.floor(Math.random() * locations.length)]
      setUpdatingLocation(locationToUpdate.id)
      
      setTimeout(() => {
        setAnimatedLocations((prev) =>
          prev.map((loc) => {
            if (loc.id === locationToUpdate.id) {
              return {
                ...loc,
                complianceScore: Math.min(100, Math.max(85, loc.complianceScore + (Math.random() - 0.5) * 2)),
                reputationScore: Math.min(5, Math.max(3.5, loc.reputationScore + (Math.random() - 0.5) * 0.1)),
                wastePercentage: Math.max(2, Math.min(10, loc.wastePercentage + (Math.random() - 0.5) * 0.5)),
              }
            }
            return loc
          }),
        )
        setUpdatingLocation(null)
      }, 500)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-display text-xl font-semibold">Locations</h2>
        {selectedLocation && (
          <Button size="sm" variant="ghost" onClick={() => onLocationSelect(null)}>
            Clear Filter
          </Button>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border text-left text-sm text-muted-foreground">
              <th className="pb-3 font-medium">Location</th>
              <th className="pb-3 font-medium">Status</th>
              <th className="pb-3 font-medium">Labor Cost</th>
              <th className="pb-3 font-medium">Compliance</th>
              <th className="pb-3 font-medium">Waste %</th>
              <th className="pb-3 font-medium">Rating</th>
              <th className="pb-3 font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {animatedLocations.map((location, index) => {
              const isUpdating = updatingLocation === location.id
              const locationData = locations.find((l) => l.id === location.id) || location
              
              return (
                <motion.tr
                  key={location.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`border-b border-border transition-colors hover:bg-muted/50 cursor-pointer ${
                    selectedLocation === location.id ? "bg-primary/5" : ""
                  } ${isUpdating ? "ring-1 ring-primary/30" : ""}`}
                >
                  <td className="py-4">
                    <div className="font-medium">{location.name}</div>
                    <div className="text-xs text-muted-foreground">ID: {location.id}</div>
                  </td>
                  <td className="py-4">
                    <Badge variant="outline" className={statusVariants[location.status].badge}>
                      {statusVariants[location.status].label}
                    </Badge>
                  </td>
                  <td className="py-4">
                    <div className="font-medium">${(location.laborCost / 1000).toFixed(1)}K</div>
                    <div className={`flex items-center gap-1 text-xs ${location.laborVariance < 0 ? "text-green-600" : "text-red-600"}`}>
                      {location.laborVariance < 0 ? (
                        <TrendingDown className="h-3 w-3" />
                      ) : (
                        <TrendingUp className="h-3 w-3" />
                      )}
                      {location.laborVariance > 0 ? "+" : ""}
                      {location.laborVariance}%
                    </div>
                  </td>
                  <td className="py-4">
                    <motion.div
                      key={location.complianceScore}
                      animate={{ scale: isUpdating ? [1, 1.1, 1] : 1 }}
                      transition={{ duration: 0.5 }}
                      className={`font-medium ${location.complianceScore >= 95 ? "text-green-600" : location.complianceScore >= 90 ? "text-yellow-600" : "text-red-600"}`}
                    >
                      {location.complianceScore.toFixed(1)}%
                    </motion.div>
                  </td>
                  <td className="py-4">
                    <motion.div
                      key={location.wastePercentage}
                      animate={{ scale: isUpdating ? [1, 1.1, 1] : 1 }}
                      transition={{ duration: 0.5 }}
                      className="font-medium"
                    >
                      {location.wastePercentage.toFixed(1)}%
                    </motion.div>
                  </td>
                  <td className="py-4">
                    <motion.div
                      key={location.reputationScore}
                      animate={{ scale: isUpdating ? [1, 1.1, 1] : 1 }}
                      transition={{ duration: 0.5 }}
                      className="font-medium"
                    >
                      {location.reputationScore.toFixed(1)}
                    </motion.div>
                  </td>
                  <td className="py-4">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => onLocationSelect(location.id)}
                      className="transition-transform hover:translate-x-1"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </td>
                </motion.tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
