import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Eye, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export function HighlightsSection() {
  const highlights = [
    {
      id: "lakers-warriors-highlights",
      title: "LeBron's Monster Dunk",
      description: "King James throws down a thunderous slam in the 4th quarter",
      sport: "Basketball",
      team: "Lakers",
      views: "2.1M",
      duration: "0:45",
      timeAgo: "2 hours ago",
      thumbnail: "/lebron-lakers-dunk.png",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: "chiefs-bills-touchdown",
      title: "Mahomes 50-Yard TD Pass",
      description: "Perfect spiral finds Kelce in the end zone for the game winner",
      sport: "Football",
      team: "Chiefs",
      views: "1.8M",
      duration: "1:12",
      timeAgo: "4 hours ago",
      thumbnail: "/mahomes-touchdown.png",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
    {
      id: "el-clasico-goals",
      title: "Messi's Incredible Goal",
      description: "The GOAT weaves through 4 defenders for a magical finish",
      sport: "Soccer",
      team: "Inter Miami",
      views: "3.5M",
      duration: "1:28",
      timeAgo: "6 hours ago",
      thumbnail: "/messi-inter-miami-goal.png",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
    {
      id: "yankees-bulls-home-run",
      title: "Judge's 500th Home Run",
      description: "Aaron Judge makes history with a towering blast to center field",
      sport: "Baseball",
      team: "Yankees",
      views: "1.2M",
      duration: "0:52",
      timeAgo: "8 hours ago",
      thumbnail: "/placeholder.svg?height=200&width=350",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    },
    {
      id: "capitals-oilers-hat-trick",
      title: "Ovechkin Hat Trick",
      description: "The Great Eight scores three goals in the third period",
      sport: "Hockey",
      team: "Capitals",
      views: "890K",
      duration: "2:15",
      timeAgo: "12 hours ago",
      thumbnail: "/placeholder.svg?height=200&width=350",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    },
    {
      id: "warriors-celtics-deep-three",
      title: "Curry's Deep Three",
      description: "Steph drains a logo three-pointer to beat the buzzer",
      sport: "Basketball",
      team: "Warriors",
      views: "2.8M",
      duration: "0:38",
      timeAgo: "1 day ago",
      thumbnail: "/placeholder.svg?height=200&width=350",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    },
  ]

  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Top Highlights</h2>
            <p className="text-muted-foreground text-lg">The best moments from today's games and beyond</p>
          </div>
          <Link href="/highlights">
            <Button variant="outline" className="hidden md:flex bg-transparent">
              View All Highlights
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight) => (
            <Link key={highlight.id} href={`/watch/${highlight.id}`}>
              <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={highlight.thumbnail || "/placeholder.svg"}
                      alt={highlight.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Duration */}
                    <Badge className="absolute top-3 right-3 bg-black/70 text-white text-xs">
                      {highlight.duration}
                    </Badge>

                    {/* Play Button */}
                    <Button
                      size="sm"
                      className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-primary/90 hover:bg-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Play className="h-4 w-4 ml-0.5" />
                    </Button>

                    {/* Views */}
                    <div className="absolute bottom-3 right-3 bg-black/50 text-white px-2 py-1 rounded text-xs flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      {highlight.views}
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {highlight.sport}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {highlight.team}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{highlight.description}</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {highlight.timeAgo}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link href="/highlights">
            <Button variant="outline">
              View All Highlights
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
