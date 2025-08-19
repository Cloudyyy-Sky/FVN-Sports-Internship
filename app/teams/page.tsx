import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Trophy, Calendar } from "lucide-react"
import Link from "next/link"

export default function TeamsPage() {
  const teams = [
    {
      id: "lakers",
      name: "Los Angeles Lakers",
      sport: "Basketball",
      league: "NBA",
      logo: "/generic-basketball-logo.png",
      record: "45-37",
      nextGame: "vs Warriors - Mar 15",
      followers: "2.1M",
    },
    {
      id: "chiefs",
      name: "Kansas City Chiefs",
      sport: "Football",
      league: "NFL",
      logo: "/chiefs-inspired-design.png",
      record: "14-3",
      nextGame: "vs Bills - Jan 21",
      followers: "1.8M",
    },
    {
      id: "real-madrid",
      name: "Real Madrid",
      sport: "Soccer",
      league: "La Liga",
      logo: "/real-madrid-crest.png",
      record: "25-5-2",
      nextGame: "vs Barcelona - Mar 10",
      followers: "3.2M",
    },
    {
      id: "yankees",
      name: "New York Yankees",
      sport: "Baseball",
      league: "MLB",
      logo: "/yankees-logo.png",
      record: "82-80",
      nextGame: "vs Red Sox - Apr 1",
      followers: "1.5M",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Teams</h1>
          <p className="text-gray-400 text-lg">Follow your favorite teams and never miss a game</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team) => (
            <Card key={team.id} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={team.logo || "/placeholder.svg"}
                    alt={`${team.name} logo`}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{team.name}</h3>
                    <Badge variant="secondary" className="bg-red-600/20 text-red-400">
                      {team.league}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Trophy className="w-4 h-4" />
                    <span>Record: {team.record}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar className="w-4 h-4" />
                    <span>{team.nextGame}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Users className="w-4 h-4" />
                    <span>{team.followers} followers</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 bg-red-600 hover:bg-red-700">Follow Team</Button>
                  <Link href={`/teams/${team.id}`} className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                    >
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
