import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Users, Clock, ArrowRight, Calendar } from "lucide-react"

export function FeaturedGames() {
  const games = [
    {
      id: 1,
      sport: "Basketball",
      status: "LIVE",
      time: "Q3 8:42",
      teams: {
        home: { name: "Lakers", logo: "/placeholder.svg?height=40&width=40", score: 89 },
        away: { name: "Warriors", logo: "/placeholder.svg?height=40&width=40", score: 92 },
      },
      viewers: "45.2K",
      thumbnail: "/basketball-lakers-warriors.png",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 2,
      sport: "Football",
      status: "LIVE",
      time: "Q2 12:34",
      teams: {
        home: { name: "Chiefs", logo: "/placeholder.svg?height=40&width=40", score: 14 },
        away: { name: "Bills", logo: "/placeholder.svg?height=40&width=40", score: 21 },
      },
      viewers: "78.5K",
      thumbnail: "/nfl-chiefs-bills-action.png",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
    {
      id: 3,
      sport: "Soccer",
      status: "SCHEDULED",
      time: "8:00 PM ET",
      teams: {
        home: { name: "Real Madrid", logo: "/placeholder.svg?height=40&width=40", score: null },
        away: { name: "Barcelona", logo: "/placeholder.svg?height=40&width=40", score: null },
      },
      viewers: "Pre-Game",
      thumbnail: "/el-clasico-stadium.png",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
    {
      id: 4,
      sport: "Baseball",
      status: "FINAL",
      time: "Final",
      teams: {
        home: { name: "Yankees", logo: "/placeholder.svg?height=40&width=40", score: 7 },
        away: { name: "Red Sox", logo: "/placeholder.svg?height=40&width=40", score: 4 },
      },
      viewers: "Highlights",
      thumbnail: "/baseball-yankees-red-sox.png",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    },
  ]

  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Featured Games</h2>
            <p className="text-muted-foreground text-lg">
              Don't miss these exciting matchups happening now and coming up
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex bg-transparent">
            <Calendar className="h-4 w-4 mr-2" />
            Full Schedule
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game) => (
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

                  {/* Status Badge */}
                  <Badge
                    className={`absolute top-3 left-3 text-xs ${
                      game.status === "LIVE"
                        ? "bg-primary text-primary-foreground live-indicator"
                        : game.status === "SCHEDULED"
                          ? "bg-accent text-accent-foreground"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {game.status === "LIVE" && <div className="w-1.5 h-1.5 bg-white rounded-full mr-1 animate-pulse" />}
                    {game.status}
                  </Badge>

                  {/* Viewers/Status */}
                  <div className="absolute top-3 right-3 bg-black/50 text-white px-2 py-1 rounded text-xs flex items-center">
                    <Users className="h-3 w-3 mr-1" />
                    {game.viewers}
                  </div>

                  {/* Play Button */}
                  <Button
                    size="sm"
                    className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-primary/90 hover:bg-primary opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Play className="h-4 w-4 ml-0.5" />
                  </Button>

                  {/* Game Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <Badge variant="secondary" className="text-xs mb-2">
                      {game.sport}
                    </Badge>

                    {/* Teams and Score */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <img
                          src={game.teams.away.logo || "/placeholder.svg"}
                          alt={game.teams.away.name}
                          className="w-6 h-6"
                        />
                        <span className="text-sm font-semibold">{game.teams.away.name}</span>
                        {game.teams.away.score !== null && (
                          <span className="text-lg font-bold">{game.teams.away.score}</span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <img
                          src={game.teams.home.logo || "/placeholder.svg"}
                          alt={game.teams.home.name}
                          className="w-6 h-6"
                        />
                        <span className="text-sm font-semibold">{game.teams.home.name}</span>
                        {game.teams.home.score !== null && (
                          <span className="text-lg font-bold">{game.teams.home.score}</span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center text-xs opacity-90">
                      <Clock className="h-3 w-3 mr-1" />
                      {game.time}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            View Full Schedule
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
