"use client"

import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle, Share2, Clock, User } from "lucide-react"

const newsData = {
  "1": {
    title: "Trade Deadline Shakeup: Star Player Moves to Championship Contender",
    content:
      "In a blockbuster deal that shocked the sports world, the All-Star forward has been traded to a title-contending team. This move is expected to significantly impact the championship race and could be the missing piece for a title run.",
    author: "Sports Insider",
    timeAgo: "1 hour ago",
    likes: 1247,
    comments: 89,
    shares: 156,
    category: "NBA",
  },
  default: {
    title: "Breaking Sports News",
    content: "Stay tuned for the latest updates in the sports world.",
    author: "FVN Sports",
    timeAgo: "Just now",
    likes: 0,
    comments: 0,
    shares: 0,
    category: "General",
  },
}

export default function NewsArticlePage() {
  const params = useParams()
  const newsId = params.newsId as string
  const article = newsData[newsId as keyof typeof newsData] || newsData.default

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">{article.category}</Badge>
                <div className="flex items-center text-gray-400 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {article.timeAgo}
                </div>
              </div>
              <CardTitle className="text-3xl font-bold">{article.title}</CardTitle>
              <div className="flex items-center text-gray-400 text-sm mt-4">
                <User className="w-4 h-4 mr-1" />
                By {article.author}
              </div>
            </CardHeader>
            <CardContent>
              <div className="prose prose-invert max-w-none mb-8">
                <p className="text-lg leading-relaxed">{article.content}</p>
              </div>

              <div className="flex items-center justify-between border-t border-gray-700 pt-6">
                <div className="flex items-center space-x-6">
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-400">
                    <Heart className="w-4 h-4 mr-2" />
                    {article.likes.toLocaleString()}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {article.comments}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                    <Share2 className="w-4 h-4 mr-2" />
                    {article.shares}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
