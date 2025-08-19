"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Eye, Clock } from "lucide-react"
import Link from "next/link"

const allHighlights = [
  {
    id: "lakers-warriors-highlights",
    title: "LeBron's Monster Dunk",
    description: "King James throws down a thunderous slam in the 4th quarter",
    sport: "Basketball",
    team: "Lakers",
    views: "2.1M",
    duration: "0:45",
    timeAgo: "2 hours ago",
    thumbnail: "/basketball-game-highlights.png",
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
    thumbnail: "/football-touchdown.png",
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
    thumbnail: "/soccer-goals.png",
  },
]

export default function HighlightsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">All Highlights</h1>
          <p className="text-gray-400">The best moments from sports around the world</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allHighlights.map((highlight) => (
            <Link key={highlight.id} href={`/watch/${highlight.id}`}>
              <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={highlight.thumbnail || "/placeholder.svg"}
                      alt={highlight.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Button size="lg" className="bg-red-600 hover:bg-red-700">
                        <Play className="w-5 h-5 mr-2" />
                        Watch Now
                      </Button>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                      {highlight.duration}
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
                    <h3 className="font-semibold mb-2 line-clamp-2">{highlight.title}</h3>
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">{highlight.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {highlight.views}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {highlight.timeAgo}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
