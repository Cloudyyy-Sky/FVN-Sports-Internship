import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Users, Calendar } from "lucide-react"

export function SportsCategories() {
  const sportsCategories = [
    {
      id: "football",
      name: "Football",
      description: "NFL, College Football",
      liveGames: 8,
      totalGames: 256,
      popularTeams: ["Chiefs", "Bills", "Cowboys", "49ers"],
      image: "/placeholder.svg?height=300&width=400",
      color: "from-green-500 to-green-700",
      href: "/sports/football",
    },
    {
      id: "basketball",
      name: "Basketball",
      description: "NBA, NCAA Basketball",
      liveGames: 12,
      totalGames: 1230,
      popularTeams: ["Lakers", "Warriors", "Celtics", "Heat"],
      image: "/placeholder.svg?height=300&width=400",
      color: "from-orange-500 to-red-600",
      href: "/sports/basketball",
    },
    {
      id: "soccer",
      name: "Soccer",
      description: "Premier League, MLS, Champions League",
      liveGames: 15,
      totalGames: 2100,
      popularTeams: ["Real Madrid", "Barcelona", "Man City", "Liverpool"],
      image: "/placeholder.svg?height=300&width=400",
      color: "from-blue-500 to-blue-700",
      href: "/sports/soccer",
    },
    {
      id: "baseball",
      name: "Baseball",
      description: "MLB, Minor League",
      liveGames: 6,
      totalGames: 2430,
      popularTeams: ["Yankees", "Dodgers", "Red Sox", "Astros"],
      image: "/placeholder.svg?height=300&width=400",
      color: "from-red-500 to-red-700",
      href: "/sports/baseball",
    },
    {
      id: "hockey",
      name: "Hockey",
      description: "NHL, College Hockey",
      liveGames: 4,
      totalGames: 1312,
      popularTeams: ["Rangers", "Bruins", "Penguins", "Lightning"],
      image: "/placeholder.svg?height=300&width=400",
      color: "from-cyan-500 to-blue-600",
      href: "/sports/hockey",
    },
    {
      id: "tennis",
      name: "Tennis",
      description: "ATP, WTA, Grand Slams",
      liveGames: 3,
      totalGames: 890,
      popularTeams: ["Djokovic", "Nadal", "Federer", "Serena"],
      image: "/placeholder.svg?height=300&width=400",
      color: "from-yellow-500 to-orange-600",
      href: "/sports/tennis",
    },
  ]

  return (
    <section className="py-16 bg-card/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Browse by Sport</h2>
          <p className="text-muted-foreground text-lg">
            Explore comprehensive coverage of your favorite sports with live games, highlights, and exclusive content
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sportsCategories.map((sport) => (
            <Card key={sport.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <Link href={sport.href}>
                  <div className="relative h-64 overflow-hidden cursor-pointer">
                    <img
                      src={sport.image || "/placeholder.svg"}
                      alt={sport.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${sport.color} opacity-60`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* Live Games Badge */}
                    {sport.liveGames > 0 && (
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground live-indicator">
                        <Play className="h-3 w-3 mr-1" />
                        {sport.liveGames} Live
                      </Badge>
                    )}

                    {/* Sport Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="font-serif font-bold text-3xl mb-2">{sport.name}</h3>
                      <p className="text-sm opacity-90 mb-4">{sport.description}</p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>{sport.liveGames} Live</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{sport.totalGames.toLocaleString()} Games</span>
                          </div>
                        </div>
                      </div>

                      {/* Popular Teams */}
                      <div className="mb-4">
                        <p className="text-xs opacity-75 mb-2">Popular Teams:</p>
                        <div className="flex flex-wrap gap-1">
                          {sport.popularTeams.slice(0, 3).map((team) => (
                            <Badge key={team} variant="secondary" className="text-xs bg-white/20 text-white">
                              {team}
                            </Badge>
                          ))}
                          {sport.popularTeams.length > 3 && (
                            <Badge variant="secondary" className="text-xs bg-white/20 text-white">
                              +{sport.popularTeams.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>

                      <Button
                        variant="secondary"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
                        Explore {sport.name}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
