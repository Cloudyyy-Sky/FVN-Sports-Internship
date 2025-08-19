import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Users, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export function LiveStreamsSection() {
  const liveStreams = [
    {
      id: "game-1",
      title: "Yankees vs Red Sox",
      sport: "Baseball",
      viewers: "23.1K",
      time: "Bottom 7th",
      score: "Yankees 5 - 3 Red Sox",
      thumbnail: "/baseball-yankees-red-sox.png",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: "game-2",
      title: "Celtics vs Heat",
      sport: "Basketball",
      viewers: "31.7K",
      time: "Q4 5:23",
      score: "Celtics 98 - 94 Heat",
      thumbnail: "/celtics-heat-nba.png",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
    {
      id: "game-3",
      title: "Rangers vs Bruins",
      sport: "Hockey",
      viewers: "18.9K",
      time: "2nd Period 12:45",
      score: "Rangers 2 - 1 Bruins",
      thumbnail: "/hockey-rangers-bruins.png",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
    {
      id: "game-4",
      title: "Manchester United vs Liverpool",
      sport: "Soccer",
      viewers: "89.4K",
      time: "45' + 2",
      score: "Man United 1 - 2 Liverpool",
      thumbnail: "/soccer-man-utd-liverpool.png",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    },
  ]

  return (
    <section className="py-16 bg-card/50">
      <div className="container px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Live Now</h2>
            <p className="text-muted-foreground text-lg">Don't miss a second of the action happening right now</p>
          </div>
          <Link href="/live">
            <Button variant="outline" className="hidden md:flex bg-transparent">
              View All Live
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {liveStreams.map((stream) => (
            <Link key={stream.id} href={`/live/${stream.id}`}>
              <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={stream.thumbnail || "/placeholder.svg"}
                      alt={stream.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Live Badge */}
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground live-indicator text-xs">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-1 animate-pulse" />
                      LIVE
                    </Badge>

                    {/* Viewers */}
                    <div className="absolute top-3 right-3 bg-black/50 text-white px-2 py-1 rounded text-xs flex items-center">
                      <Users className="h-3 w-3 mr-1" />
                      {stream.viewers}
                    </div>

                    {/* Play Button */}
                    <Button
                      size="sm"
                      className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-primary/90 hover:bg-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Play className="h-4 w-4 ml-0.5" />
                    </Button>

                    {/* Game Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <div className="flex items-center justify-between mb-1">
                        <Badge variant="secondary" className="text-xs">
                          {stream.sport}
                        </Badge>
                        <div className="flex items-center text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          {stream.time}
                        </div>
                      </div>
                      <h3 className="font-semibold text-sm mb-1">{stream.title}</h3>
                      <p className="text-xs opacity-90">{stream.score}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link href="/live">
            <Button variant="outline">
              View All Live Games
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
