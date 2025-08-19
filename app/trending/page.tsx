"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Eye, Heart, TrendingUp } from "lucide-react"
import Link from "next/link"

const trendingContent = [
  {
    id: "lakers-warriors-highlights",
    title: "Lakers vs Warriors - Epic Showdown",
    thumbnail: "/basketball-game-highlights.png",
    views: "2.1M",
    likes: "45K",
    duration: "8:45",
    category: "Basketball",
  },
  {
    id: "chiefs-bills-touchdown",
    title: "Chiefs Amazing Touchdown Play",
    thumbnail: "/football-touchdown.png",
    views: "1.8M",
    likes: "38K",
    duration: "6:32",
    category: "Football",
  },
  {
    id: "el-clasico-goals",
    title: "El Clasico Best Goals",
    thumbnail: "/soccer-goals.png",
    views: "3.2M",
    likes: "67K",
    duration: "12:15",
    category: "Soccer",
  },
]

export default function TrendingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp className="w-8 h-8 text-red-500" />
            <h1 className="text-4xl font-bold">Trending Now</h1>
          </div>
          <p className="text-gray-400">The hottest sports content everyone's watching</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingContent.map((content, index) => (
            <Card key={content.id} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={content.thumbnail || "/placeholder.svg"}
                    alt={content.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Link href={`/watch/${content.id}`}>
                      <Button size="lg" className="bg-red-600 hover:bg-red-700">
                        <Play className="w-5 h-5 mr-2" />
                        Watch Now
                      </Button>
                    </Link>
                  </div>
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-sm font-medium">
                    #{index + 1}
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    {content.duration}
                  </div>
                </div>

                <div className="p-4">
                  <div className="text-xs text-red-400 font-medium mb-1">{content.category}</div>
                  <h3 className="font-semibold mb-2 line-clamp-2">{content.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {content.views}
                      </div>
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {content.likes}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
