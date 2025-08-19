import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Users, Clock, ArrowRight } from "lucide-react"

interface LiveGamesSectionProps {
  sport: string
}

export function LiveGamesSection({ sport }: LiveGamesSectionProps) {
  const liveGames = [
    {
      id: 1,
      teams: {
        home: { name: "Lakers", logo: "/placeholder.svg?height=40&width=40", score: 89 },
        away: { name: "Warriors", logo: "/placeholder.svg?height=40&width=40", score: 92 },
      },
      time: "Q3 8:42",
      viewers: "45.2K",
      thumbnail: "/basketball-lakers-warriors.png",
      venue: "Crypto.com Arena",
    },
    {
      id: 2,
      teams: {
        home: { name: "Celtics", logo: "/placeholder.svg?height=40&width=40", score: 98 },
        away: { name: "Heat", logo: "/placeholder.svg?height=40&width=40", score: 94 },
      },
      time: "Q4 5:23",
      viewers: "31.7K",
      thumbnail: "/celtics-heat-nba.png",
      venue: "TD Garden",
    },
    {
      id: 3,
      teams: {
        home: { name: "Nets", logo: "/placeholder.svg?height=40&width=40", score: 76 },
        away: { name: "Knicks", logo: "/placeholder.svg?height=40&width=40", score: 82 },
      },
      time: "Q4 2:15",
      viewers: "28.9K",
      thumbnail: "/placeholder.svg?height=200&width=350",
      venue: "Barclays Center",
    },
  ]

  return (
    <section className="py-16 bg-card/30">
      <div className="container px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Live Games</h2>
            <p className="text-muted-foreground text-lg">Watch the action happening right now</p>
          </div>
          <Button variant="outline" className="hidden md:flex bg-transparent">
            View All Live
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveGames.map((game) => (
            <Card
              key={game.id}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={game.thumbnail || "/placeholder.svg"}
                    alt={`${game.teams.away.name} vs ${game.teams.home.name}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground live-indicator text-xs">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-1 animate-pulse" />
                    LIVE
                  </Badge>

                  <div className="absolute top-3 right-3 bg-black/50 text-white px-2 py-1 rounded text-xs flex items-center">
                    <Users className="h-3 w-3 mr-1" />
                    {game.viewers}
                  </div>

                  <Button
                    size="sm"
                    className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-primary/90 hover:bg-primary opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Play className="h-4 w-4 ml-0.5" />
                  </Button>

                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <img
                          src={game.teams.away.logo || "/placeholder.svg"}
                          alt={game.teams.away.name}
                          className="w-6 h-6"
                        />
                        <span className="text-sm font-semibold">{game.teams.away.name}</span>
                        <span className="text-lg font-bold">{game.teams.away.score}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <img
                          src={game.teams.home.logo || "/placeholder.svg"}
                          alt={game.teams.home.name}
                          className="w-6 h-6"
                        />
                        <span className="text-sm font-semibold">{game.teams.home.name}</span>
                        <span className="text-lg font-bold">{game.teams.home.score}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs opacity-90">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {game.time}
                      </div>
                      <span>{game.venue}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
