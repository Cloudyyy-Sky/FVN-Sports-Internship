import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, TrendingUp, TrendingDown } from "lucide-react"

interface StandingsSectionProps {
  sport: string
}

export function StandingsSection({ sport }: StandingsSectionProps) {
  const standings = [
    {
      rank: 1,
      team: "Celtics",
      logo: "/placeholder.svg?height=24&width=24",
      wins: 48,
      losses: 17,
      pct: 0.738,
      gb: "-",
      streak: "W3",
      trend: "up",
    },
    {
      rank: 2,
      team: "Lakers",
      logo: "/placeholder.svg?height=24&width=24",
      wins: 45,
      losses: 20,
      pct: 0.692,
      gb: "3.0",
      streak: "W1",
      trend: "up",
    },
    {
      rank: 3,
      team: "Nuggets",
      logo: "/placeholder.svg?height=24&width=24",
      wins: 44,
      losses: 21,
      pct: 0.677,
      gb: "4.0",
      streak: "L1",
      trend: "down",
    },
    {
      rank: 4,
      team: "Warriors",
      logo: "/placeholder.svg?height=24&width=24",
      wins: 42,
      losses: 23,
      pct: 0.646,
      gb: "6.0",
      streak: "W2",
      trend: "up",
    },
    {
      rank: 5,
      team: "Clippers",
      logo: "/placeholder.svg?height=24&width=24",
      wins: 40,
      losses: 25,
      pct: 0.615,
      gb: "8.0",
      streak: "L2",
      trend: "down",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5" />
          Western Conference
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {standings.map((team) => (
            <div
              key={team.rank}
              className="flex items-center justify-between p-2 rounded hover:bg-accent/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-6 text-center text-sm font-medium text-muted-foreground">{team.rank}</div>
                <img src={team.logo || "/placeholder.svg"} alt={team.team} className="w-6 h-6" />
                <div>
                  <div className="font-semibold text-sm">{team.team}</div>
                  <div className="text-xs text-muted-foreground">
                    {team.wins}-{team.losses}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className="text-center">
                  <div className="font-medium">{team.pct.toFixed(3)}</div>
                  <div className="text-xs text-muted-foreground">PCT</div>
                </div>
                <div className="text-center">
                  <div className="font-medium">{team.gb}</div>
                  <div className="text-xs text-muted-foreground">GB</div>
                </div>
                <div className="flex items-center gap-1">
                  <Badge variant={team.streak.startsWith("W") ? "default" : "secondary"} className="text-xs">
                    {team.streak}
                  </Badge>
                  {team.trend === "up" ? (
                    <TrendingUp className="h-3 w-3 text-green-500" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-500" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
