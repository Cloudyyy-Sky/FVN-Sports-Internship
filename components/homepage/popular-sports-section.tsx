import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp } from "lucide-react"
import Link from "next/link"

export function PopularSportsSection() {
  const sports = [
    {
      id: "football",
      name: "Football",
      description: "NFL, College Football",
      liveGames: 8,
      totalGames: 256,
      trending: true,
      image: "/placeholder.svg?height=300&width=400",
      color: "from-green-500 to-green-700",
    },
    {
      id: "basketball",
      name: "Basketball",
      description: "NBA, NCAA Basketball",
      liveGames: 12,
      totalGames: 1230,
      trending: true,
      image: "/placeholder.svg?height=300&width=400",
      color: "from-orange-500 to-red-600",
    },
    {
      id: "soccer",
      name: "Soccer",
      description: "Premier League, MLS, Champions League",
      liveGames: 15,
      totalGames: 2100,
      trending: false,
      image: "/placeholder.svg?height=300&width=400",
      color: "from-blue-500 to-blue-700",
    },
    {
      id: "baseball",
      name: "Baseball",
      description: "MLB, Minor League",
      liveGames: 6,
      totalGames: 2430,
      trending: false,
      image: "/placeholder.svg?height=300&width=400",
      color: "from-red-500 to-red-700",
    },
    {
      id: "hockey",
      name: "Hockey",
      description: "NHL, College Hockey",
      liveGames: 4,
      totalGames: 1312,
      trending: false,
      image: "/placeholder.svg?height=300&width=400",
      color: "from-cyan-500 to-blue-600",
    },
    {
      id: "tennis",
      name: "Tennis",
      description: "ATP, WTA, Grand Slams",
      liveGames: 3,
      totalGames: 890,
      trending: true,
      image: "/placeholder.svg?height=300&width=400",
      color: "from-yellow-500 to-orange-600",
    },
  ]

  return (
    <section className="py-16 bg-card/30">
      <div className="container px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Popular Sports</h2>
            <p className="text-muted-foreground text-lg">Explore the most watched sports and leagues on FVN Sports</p>
          </div>
          <Link href="/sports">
            <Button variant="outline" className="hidden md:flex bg-transparent">
              Browse All Sports
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sports.map((sport) => (
            <Link key={sport.id} href={`/sports/${sport.id}`}>
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={sport.image || "/placeholder.svg"}
                      alt={sport.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${sport.color} opacity-60`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {sport.trending && (
                      <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Trending
                      </Badge>
                    )}

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-serif font-bold text-2xl mb-1">{sport.name}</h3>
                      <p className="text-sm opacity-90 mb-3">{sport.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-xs">
                          <span className="font-semibold">{sport.liveGames}</span> Live Now
                        </div>
                        <div className="text-xs">
                          <span className="font-semibold">{sport.totalGames.toLocaleString()}</span> Total Games
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link href="/sports">
            <Button variant="outline">
              Browse All Sports
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
