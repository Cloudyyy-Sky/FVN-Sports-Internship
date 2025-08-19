import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Play, Clock } from "lucide-react"
import Link from "next/link"

interface TeamPageProps {
  params: {
    teamId: string
  }
}

export default function TeamPage({ params }: TeamPageProps) {
  // Mock team data - in real app, fetch based on teamId
  const team = {
    id: params.teamId,
    name: "Los Angeles Lakers",
    sport: "Basketball",
    league: "NBA",
    logo: "/generic-basketball-logo.png",
    record: "45-37",
    followers: "2.1M",
    description: "The Los Angeles Lakers are an American professional basketball team based in Los Angeles.",
  }

  const upcomingGames = [
    {
      id: "1",
      opponent: "Golden State Warriors",
      date: "Mar 15, 2024",
      time: "8:00 PM",
      venue: "Crypto.com Arena",
    },
    {
      id: "2",
      opponent: "Boston Celtics",
      date: "Mar 18, 2024",
      time: "7:30 PM",
      venue: "TD Garden",
    },
  ]

  const recentHighlights = [
    {
      id: "1",
      title: "LeBron's 40-Point Performance",
      thumbnail: "/basketball-highlights.png",
      duration: "3:45",
      views: "1.2M",
    },
    {
      id: "2",
      title: "Davis Dominates the Paint",
      thumbnail: "/basketball-highlights.png",
      duration: "2:30",
      views: "850K",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Team Header */}
        <div className="flex items-center gap-6 mb-8">
          <img
            src={team.logo || "/placeholder.svg"}
            alt={`${team.name} logo`}
            className="w-32 h-32 rounded-full object-cover"
          />
          <div>
            <h1 className="text-4xl font-bold mb-2">{team.name}</h1>
            <div className="flex items-center gap-4 mb-4">
              <Badge variant="secondary" className="bg-red-600/20 text-red-400">
                {team.league}
              </Badge>
              <span className="text-gray-300">Record: {team.record}</span>
              <span className="text-gray-300">{team.followers} followers</span>
            </div>
            <p className="text-gray-400 max-w-2xl">{team.description}</p>
          </div>
        </div>

        <Tabs defaultValue="schedule" className="space-y-6">
          <TabsList className="bg-gray-800 border-gray-700">
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="highlights">Highlights</TabsTrigger>
            <TabsTrigger value="roster">Roster</TabsTrigger>
            <TabsTrigger value="stats">Stats</TabsTrigger>
          </TabsList>

          <TabsContent value="schedule" className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Upcoming Games</h2>
            {upcomingGames.map((game) => (
              <Card key={game.id} className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">vs {game.opponent}</h3>
                      <div className="flex items-center gap-4 text-gray-300">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{game.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{game.time}</span>
                        </div>
                        <span>{game.venue}</span>
                      </div>
                    </div>
                    <Link href={`/live/${game.id}`}>
                      <Button className="bg-red-600 hover:bg-red-700">
                        <Play className="w-4 h-4 mr-2" />
                        Watch Live
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="highlights" className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Recent Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentHighlights.map((highlight) => (
                <Link key={highlight.id} href={`/watch/${highlight.id}`}>
                  <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors cursor-pointer">
                    <div className="relative">
                      <img
                        src={highlight.thumbnail || "/placeholder.svg"}
                        alt={highlight.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {highlight.duration}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/50 rounded-t-lg">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold mb-2">{highlight.title}</h3>
                      <p className="text-gray-400 text-sm">{highlight.views} views</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="roster">
            <h2 className="text-2xl font-bold mb-4">Team Roster</h2>
            <p className="text-gray-400">Roster information coming soon...</p>
          </TabsContent>

          <TabsContent value="stats">
            <h2 className="text-2xl font-bold mb-4">Team Statistics</h2>
            <p className="text-gray-400">Statistics coming soon...</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
