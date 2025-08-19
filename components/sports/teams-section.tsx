import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Trophy, TrendingUp } from "lucide-react"

interface TeamsSectionProps {
  sport: string
}

export function TeamsSection({ sport }: TeamsSectionProps) {
  const teams = [
    {
      id: 1,
      name: "Los Angeles Lakers",
      shortName: "Lakers",
      logo: "/placeholder.svg?height=80&width=80",
      record: "45-20",
      conference: "Western",
      division: "Pacific",
      lastGame: "W 112-108 vs Warriors",
      nextGame: "vs Celtics - Tonight 8:00 PM",
      followers: "2.1M",
      trending: true,
      colors: "from-purple-600 to-yellow-500",
    },
    {
      id: 2,
      name: "Golden State Warriors",
      shortName: "Warriors",
      logo: "/placeholder.svg?height=80&width=80",
      record: "42-23",
      conference: "Western",
      division: "Pacific",
      lastGame: "L 108-112 @ Lakers",
      nextGame: "@ Clippers - Tomorrow 7:30 PM",
      followers: "1.8M",
      trending: true,
      colors: "from-blue-600 to-yellow-500",
    },
    {
      id: 3,
      name: "Boston Celtics",
      shortName: "Celtics",
      logo: "/placeholder.svg?height=80&width=80",
      record: "48-17",
      conference: "Eastern",
      division: "Atlantic",
      lastGame: "W 118-102 vs Heat",
      nextGame: "@ Lakers - Tonight 8:00 PM",
      followers: "1.9M",
      trending: false,
      colors: "from-green-600 to-green-800",
    },
    {
      id: 4,
      name: "Miami Heat",
      shortName: "Heat",
      logo: "/placeholder.svg?height=80&width=80",
      record: "38-27",
      conference: "Eastern",
      division: "Southeast",
      lastGame: "L 102-118 @ Celtics",
      nextGame: "vs 76ers - Tomorrow 8:00 PM",
      followers: "1.3M",
      trending: false,
      colors: "from-red-600 to-black",
    },
  ]

  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Teams</h2>
            <p className="text-muted-foreground text-lg">Follow your favorite teams and get the latest updates</p>
          </div>
          <Button variant="outline" className="hidden md:flex bg-transparent">
            View All Teams
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teams.map((team) => (
            <Card key={team.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <Link href={`/teams/${team.shortName.toLowerCase()}`}>
                  <div className={`relative h-32 bg-gradient-to-br ${team.colors} cursor-pointer`}>
                    <div className="absolute inset-0 bg-black/20" />

                    {team.trending && (
                      <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Trending
                      </Badge>
                    )}

                    <div className="absolute bottom-3 right-3">
                      <img src={team.logo || "/placeholder.svg"} alt={team.name} className="w-12 h-12 opacity-80" />
                    </div>

                    <div className="absolute bottom-3 left-3 text-white">
                      <h3 className="font-serif font-bold text-lg">{team.shortName}</h3>
                      <p className="text-sm opacity-90">{team.record}</p>
                    </div>
                  </div>
                </Link>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">{team.name}</h4>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Users className="h-3 w-3" />
                      {team.followers}
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Conference:</span>
                      <span>{team.conference}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Division:</span>
                      <span>{team.division}</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="text-muted-foreground">Last Game:</span>
                      <p className="font-medium">{team.lastGame}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Next Game:</span>
                      <p className="font-medium">{team.nextGame}</p>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    <Trophy className="h-4 w-4 mr-2" />
                    Follow Team
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
