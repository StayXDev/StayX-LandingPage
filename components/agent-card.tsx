import { Card } from "@/components/ui/card"
import { Calendar, ShieldCheck, Trash2, Star, TrendingDown, Users, type LucideIcon } from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  calendar: Calendar,
  "shield-check": ShieldCheck,
  "trash-2": Trash2,
  star: Star,
  "trending-down": TrendingDown,
  users: Users,
}

interface AgentCardProps {
  name: string
  description: string
  icon: string
}

export function AgentCard({ name, description, icon }: AgentCardProps) {
  const Icon = iconMap[icon] || Calendar

  return (
    <Card className="group relative overflow-hidden border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
      <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-primary/10 transition-transform group-hover:scale-150" />
      <div className="relative space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
            <Icon className="h-6 w-6" />
          </div>
          <div className="px-2 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary">Active</div>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-balance">{name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
        </div>
      </div>
    </Card>
  )
}
