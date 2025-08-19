import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Users, Calendar, Trophy, TrendingUp } from "lucide-react"

interface SportHeaderProps {
  sport: string
}

export function SportHeader({ sport }: SportHeaderProps) {
  const sportData = {
    football: {
      name: "Football",
      description: "NFL and College Football coverage with live games, highlights, and analysis",
      liveGames: 8,
      todayGames: 12,
      totalViewers: "2.1M",
      season: "2024 NFL Season",
      image: "/placeholder.svg?height=400&width=800",
      color: "from-green-500 to-green-700",
    },
    basketball: {
      name: "Basketball",
      description: "NBA and NCAA Basketball with comprehensive coverage and real-time stats",
      liveGames: 12,
      todayGames: 15,
      totalViewers: "1.8M",
      season: "2024-25 NBA Season",
      image: "/placeholder.svg?height=400&width=800",
      color: "from-orange-500 to-red-600",
    },
    soccer: {
      name: "Soccer",
      description: "Premier League, MLS, Champions League and international soccer coverage",
      liveGames: 15,
      todayGames: 20,
      totalViewers: "3.2M",
      season: "2024-25 Season",
      image: "/placeholder.svg?height=400&width=800",
      color: "from-blue-500 to-blue-700",
    },
  }

  const currentSport = sportData[sport as keyof typeof sportData] || sportData.football

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={currentSport.image || "/placeholder.svg"}
          alt={currentSport.name}
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${currentSport.color} opacity-80`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="relative container px-4 py-24">
        <div className="max-w-4xl">
          <Badge className="mb-6 bg-accent text-accent-foreground">
            <TrendingUp className="h-4 w-4 mr-2" />
            {currentSport.season}
          </Badge>

          <h1 className="font-serif font-black text-5xl md:text-7xl text-white mb-6">{currentSport.name}</h1>

          <p className="text-xl text-white/90 mb-8 max-w-2xl">{currentSport.description}</p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 pulse-glow">
              <Play className="h-5 w-5 mr-2" />
              Watch Live Games
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
              <Calendar className="h-5 w-5 mr-2" />
              View Schedule
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
              <Trophy className="h-5 w-5 mr-2" />
              Standings
            </Button>
          </div>

          {/* Live Stats */}
          <div className="flex flex-wrap gap-8">
            <div className="text-white">
              <div className="flex items-center gap-2 mb-1">
                <Play className="h-4 w-4 text-primary" />
                <span className="text-sm opacity-75">Live Games</span>
              </div>
              <div className="font-serif font-bold text-2xl">{currentSport.liveGames}</div>
            </div>

            <div className="text-white">
              <div className="flex items-center gap-2 mb-1">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-sm opacity-75">Today's Games</span>
              </div>
              <div className="font-serif font-bold text-2xl">{currentSport.todayGames}</div>
            </div>

            <div className="text-white">
              <div className="flex items-center gap-2 mb-1">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-sm opacity-75">Total Viewers</span>
              </div>
              <div className="font-serif font-bold text-2xl">{currentSport.totalViewers}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
