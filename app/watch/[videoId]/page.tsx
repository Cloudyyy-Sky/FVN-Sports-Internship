"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Share2 } from "lucide-react"

// Demo video data
const videoData = {
  "lakers-warriors-highlights": {
    title: "Lakers vs Warriors - Game Highlights",
    description: "Epic showdown between Lakers and Warriors with incredible plays and clutch moments.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    duration: "8:45",
    views: "2.1M",
    likes: "45K",
  },
  "chiefs-bills-touchdown": {
    title: "Chiefs vs Bills - Touchdown Highlights",
    description: "Amazing touchdown plays from the Chiefs vs Bills matchup.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    duration: "6:32",
    views: "1.8M",
    likes: "38K",
  },
  "el-clasico-goals": {
    title: "El Clasico - Best Goals",
    description: "The most spectacular goals from the latest El Clasico match.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    duration: "12:15",
    views: "3.2M",
    likes: "67K",
  },
  default: {
    title: "Sports Highlight",
    description: "Amazing sports moment captured in high definition.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    duration: "5:00",
    views: "1.2M",
    likes: "25K",
  },
}

export default function WatchVideoPage() {
  const params = useParams()
  const videoId = params.videoId as string
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  const video = videoData[videoId as keyof typeof videoData] || videoData.default

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-black rounded-t-lg overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    src={video.videoUrl}
                    poster="/sports-video-thumbnail.png"
                    controls
                    autoPlay={isPlaying}
                    muted={isMuted}
                  />
                </div>

                <div className="p-6">
                  <h1 className="text-2xl font-bold mb-2">{video.title}</h1>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-gray-400">
                      <span>{video.views} views</span>
                      <span>•</span>
                      <span>{video.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsLiked(!isLiked)}
                        className={`${isLiked ? "text-red-500" : "text-gray-400"} hover:text-red-400`}
                      >
                        <Heart className="w-4 h-4 mr-1" fill={isLiked ? "currentColor" : "none"} />
                        {video.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                        <Share2 className="w-4 h-4 mr-1" />
                        Share
                      </Button>
                    </div>
                  </div>
                  <p className="text-gray-300">{video.description}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4">Related Videos</h3>
                <div className="space-y-3">
                  {Object.entries(videoData)
                    .slice(0, 3)
                    .map(([id, data]) => (
                      <div key={id} className="flex space-x-3 cursor-pointer hover:bg-gray-700/50 p-2 rounded">
                        <img
                          src="/sports-thumbnail.png"
                          alt={data.title}
                          className="w-20 h-12 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="text-sm font-medium line-clamp-2">{data.title}</h4>
                          <p className="text-xs text-gray-400">{data.views} views</p>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
