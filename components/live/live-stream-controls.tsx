"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Play,
  SkipBack,
  SkipForward,
  Volume2,
  Settings,
  Share2,
  Bookmark,
  Download,
  Cast,
  Smartphone,
} from "lucide-react"

export function LiveStreamControls() {
  const [isBookmarked, setIsBookmarked] = useState(false)

  const qualityOptions = ["Auto", "1080p", "720p", "480p", "360p"]
  const [selectedQuality, setSelectedQuality] = useState("1080p")

  const relatedStreams = [
    {
      id: 1,
      title: "Celtics vs Heat",
      sport: "Basketball",
      status: "LIVE",
      viewers: "31.7K",
      thumbnail: "/celtics-heat-nba.png",
    },
    {
      id: 2,
      title: "Yankees vs Red Sox",
      sport: "Baseball",
      status: "LIVE",
      viewers: "23.1K",
      thumbnail: "/baseball-yankees-red-sox.png",
    },
    {
      id: 3,
      title: "Rangers vs Bruins",
      sport: "Hockey",
      status: "LIVE",
      viewers: "18.9K",
      thumbnail: "/hockey-rangers-bruins.png",
    },
  ]

  return (
    <div className="bg-background border-t">
      <div className="container px-4 py-4">
        {/* Main Controls */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <SkipBack className="h-4 w-4" />
              </Button>
              <Button size="icon" className="bg-primary hover:bg-primary/90">
                <Play className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <SkipForward className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Volume2 className="h-4 w-4 mr-2" />
                Audio
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                {selectedQuality}
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={isBookmarked ? "bg-primary text-primary-foreground" : ""}
            >
              <Bookmark className="h-4 w-4 mr-2" />
              {isBookmarked ? "Saved" : "Save"}
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Cast className="h-4 w-4 mr-2" />
              Cast
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>
        </div>

        {/* Related Live Streams */}
        <div>
          <h3 className="font-serif font-bold text-xl mb-4">Other Live Games</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {relatedStreams.map((stream) => (
              <Card key={stream.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={stream.thumbnail || "/placeholder.svg"}
                      alt={stream.title}
                      className="w-full h-32 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-t-lg" />

                    <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground live-indicator text-xs">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-1 animate-pulse" />
                      {stream.status}
                    </Badge>

                    <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs flex items-center">
                      <Smartphone className="h-3 w-3 mr-1" />
                      {stream.viewers}
                    </div>

                    <Button
                      size="sm"
                      className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-primary/90 hover:bg-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Play className="h-4 w-4 ml-0.5" />
                    </Button>
                  </div>

                  <div className="p-3">
                    <Badge variant="secondary" className="text-xs mb-2">
                      {stream.sport}
                    </Badge>
                    <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">{stream.title}</h4>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
