import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Calendar, Trophy, TrendingUp, Users, Clock } from "lucide-react"

export function SportsOverview() {
  const todayStats = {
    liveGames: 12,
    scheduledGames: 28,
    totalViewers: "1.2M",
    topSport: "Basketball",
  }

  const featuredMatchup = {
    title: "Game of the Week",
    teams: {
      home: { name: "Lakers", logo: "/placeholder.svg?height=80&width=80", record: "45-20" },
      away: { name: "Warriors", logo: "/placeholder.svg?height=80&width=80", record: "42-23" },
    },
    date: "Tonight 8:00 PM ET",
    venue: "Crypto.com Arena",
    preview: "Two championship contenders clash in what could be a playoff preview",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  }

  return (
    <section className="py-16 bg-gradient-to-br from-background via-card/50 to-background">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif font-black text-4xl md:text-6xl mb-6">
            All <span className="text-primary">Sports</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your complete destination for live games, highlights, team stats, and player profiles across all major
            sports
          </p>
        </div>

        {/* Today's Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-2">
                <Play className="h-6 w-6 text-primary" />
              </div>
              <div className="font-serif font-bold text-3xl text-primary mb-1">{todayStats.liveGames}</div>
              <div className="text-sm text-muted-foreground">Live Games</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-2">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div className="font-serif font-bold text-3xl text-primary mb-1">{todayStats.scheduledGames}</div>
              <div className="text-sm text-muted-foreground">Today's Games</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="font-serif font-bold text-3xl text-primary mb-1">{todayStats.totalViewers}</div>
              <div className="text-sm text-muted-foreground">Active Viewers</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-2">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <div className="font-serif font-bold text-3xl text-primary mb-1">{todayStats.topSport}</div>
              <div className="text-sm text-muted-foreground">Most Watched</div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Matchup */}
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="md:flex">
              <div className="md:w-2/3 p-8">
                <Badge className="mb-4 bg-accent text-accent-foreground">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {featuredMatchup.title}
                </Badge>

                <div className="flex items-center justify-center gap-8 mb-6">
                  {/* Away Team */}
                  <div className="text-center">
                    <img
                      src={featuredMatchup.teams.away.logo || "/placeholder.svg"}
                      alt={featuredMatchup.teams.away.name}
                      className="w-20 h-20 mx-auto mb-3"
                    />
                    <h3 className="font-serif font-bold text-2xl">{featuredMatchup.teams.away.name}</h3>
                    <p className="text-muted-foreground">{featuredMatchup.teams.away.record}</p>
                  </div>

                  <div className="text-center">
                    <div className="font-serif font-black text-4xl text-muted-foreground">VS</div>
                  </div>

                  {/* Home Team */}
                  <div className="text-center">
                    <img
                      src={featuredMatchup.teams.home.logo || "/placeholder.svg"}
                      alt={featuredMatchup.teams.home.name}
                      className="w-20 h-20 mx-auto mb-3"
                    />
                    <h3 className="font-serif font-bold text-2xl">{featuredMatchup.teams.home.name}</h3>
                    <p className="text-muted-foreground">{featuredMatchup.teams.home.record}</p>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 text-lg font-semibold mb-2">
                    <Clock className="h-5 w-5" />
                    {featuredMatchup.date}
                  </div>
                  <p className="text-muted-foreground">{featuredMatchup.venue}</p>
                </div>

                <p className="text-center text-muted-foreground mb-6">{featuredMatchup.preview}</p>

                <div className="flex justify-center gap-4">
                  <Button size="lg" className="pulse-glow">
                    <Play className="h-5 w-5 mr-2" />
                    Watch Preview
                  </Button>
                  <Button variant="outline" size="lg">
                    View Matchup
                  </Button>
                </div>
              </div>

              <div className="md:w-1/3 relative">
                <img
                  src="/placeholder.svg?height=400&width=300"
                  alt="Featured Game"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <Button
                  size="lg"
                  className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-primary/90 hover:bg-primary"
                >
                  <Play className="h-6 w-6 ml-1" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
