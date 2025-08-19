import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Play, Bell } from "lucide-react"

interface ScheduleSectionProps {
  sport: string
}

export function ScheduleSection({ sport }: ScheduleSectionProps) {
  const upcomingGames = [
    {
      id: 1,
      date: "Today",
      time: "8:00 PM ET",
      teams: {
        home: { name: "Lakers", logo: "/placeholder.svg?height=32&width=32", record: "45-20" },
        away: { name: "Celtics", logo: "/placeholder.svg?height=32&width=32", record: "48-17" },
      },
      venue: "Crypto.com Arena",
      tv: "ESPN",
      status: "upcoming",
      odds: { home: "-2.5", away: "+2.5" },
    },
    {
      id: 2,
      date: "Tomorrow",
      time: "7:30 PM ET",
      teams: {
        home: "Clippers",
        away: "Warriors",
        home: { name: "Clippers", logo: "/placeholder.svg?height=32&width=32", record: "40-25" },
        away: { name: "Warriors", logo: "/placeholder.svg?height=32&width=32", record: "42-23" },
      },
      venue: "Crypto.com Arena",
      tv: "TNT",
      status: "upcoming",
      odds: { home: "+1.5", away: "-1.5" },
    },
    {
      id: 3,
      date: "Friday",
      time: "9:00 PM ET",
      teams: {
        home: { name: "Nuggets", logo: "/placeholder.svg?height=32&width=32", record: "44-21" },
        away: { name: "Suns", logo: "/placeholder.svg?height=32&width=32", record: "36-29" },
      },
      venue: "Ball Arena",
      tv: "ESPN",
      status: "upcoming",
      odds: { home: "-4.5", away: "+4.5" },
    },
    {
      id: 4,
      date: "Saturday",
      time: "8:30 PM ET",
      teams: {
        home: { name: "Heat", logo: "/placeholder.svg?height=32&width=32", record: "38-27" },
        away: { name: "76ers", logo: "/placeholder.svg?height=32&width=32", record: "35-30" },
      },
      venue: "FTX Arena",
      tv: "ABC",
      status: "upcoming",
      odds: { home: "-3.0", away: "+3.0" },
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Upcoming Games
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {upcomingGames.map((game) => (
          <div key={game.id} className="border rounded-lg p-4 hover:bg-accent/50 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <Badge variant="outline" className="text-xs">
                {game.date}
              </Badge>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-3 w-3" />
                {game.time}
              </div>
            </div>

            <div className="flex items-center justify-between mb-3">
              {/* Away Team */}
              <div className="flex items-center gap-3">
                <img src={game.teams.away.logo || "/placeholder.svg"} alt={game.teams.away.name} className="w-8 h-8" />
                <div>
                  <div className="font-semibold">{game.teams.away.name}</div>
                  <div className="text-xs text-muted-foreground">{game.teams.away.record}</div>
                </div>
                <Badge variant="outline" className="text-xs">
                  {game.odds.away}
                </Badge>
              </div>

              <div className="text-center text-muted-foreground font-medium">@</div>

              {/* Home Team */}
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="text-xs">
                  {game.odds.home}
                </Badge>
                <div className="text-right">
                  <div className="font-semibold">{game.teams.home.name}</div>
                  <div className="text-xs text-muted-foreground">{game.teams.home.record}</div>
                </div>
                <img src={game.teams.home.logo || "/placeholder.svg"} alt={game.teams.home.name} className="w-8 h-8" />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {game.venue}
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">
                  {game.tv}
                </Badge>
                <Button variant="ghost" size="sm" className="h-6 px-2">
                  <Bell className="h-3 w-3 mr-1" />
                  Remind
                </Button>
                <Button variant="ghost" size="sm" className="h-6 px-2">
                  <Play className="h-3 w-3 mr-1" />
                  Preview
                </Button>
              </div>
            </div>
          </div>
        ))}

        <Button variant="outline" className="w-full bg-transparent">
          View Full Schedule
        </Button>
      </CardContent>
    </Card>
  )
}
