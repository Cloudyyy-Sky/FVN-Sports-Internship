"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"

export default function TrendingTopics() {
  const trendingTopics = [
    { tag: "#LakersVsWarriors", posts: "12.5K posts", trend: "+15%" },
    { tag: "#NFLPlayoffs", posts: "8.9K posts", trend: "+23%" },
    { tag: "#ChampionsLeague", posts: "6.7K posts", trend: "+8%" },
    { tag: "#MarchMadness", posts: "5.2K posts", trend: "+45%" },
    { tag: "#SuperBowl", posts: "4.1K posts", trend: "+12%" },
  ]

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          Trending Topics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {trendingTopics.map((topic, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <div className="text-red-400 font-medium hover:underline cursor-pointer">{topic.tag}</div>
                <div className="text-gray-400 text-sm">{topic.posts}</div>
              </div>
              <Badge className="bg-green-600 text-white text-xs">{topic.trend}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
