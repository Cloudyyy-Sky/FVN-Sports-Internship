"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle, Share2, MoreHorizontal, Send } from "lucide-react"

export default function CommunityFeed() {
  const [newPost, setNewPost] = useState("")

  const posts = [
    {
      id: 1,
      user: {
        name: "Lakers Fan",
        username: "@lakersnation",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        "What an incredible game! LeBron's performance in the 4th quarter was legendary. This is why he's the GOAT! 🐐",
      timestamp: "2 hours ago",
      likes: 234,
      comments: 45,
      shares: 12,
      tags: ["#Lakers", "#LeBronJames", "#NBA"],
    },
    {
      id: 2,
      user: {
        name: "Football Analyst",
        username: "@nflexpert",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        "Breaking down the Chiefs' offensive strategy from last night's game. Their play-calling in the red zone was masterful.",
      timestamp: "4 hours ago",
      likes: 189,
      comments: 67,
      shares: 23,
      tags: ["#NFL", "#Chiefs", "#Analysis"],
    },
    {
      id: 3,
      user: {
        name: "Soccer World",
        username: "@soccerworld",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        "El Clásico predictions? Real Madrid vs Barcelona is always unpredictable, but I'm feeling a 2-1 Madrid win.",
      timestamp: "6 hours ago",
      likes: 156,
      comments: 89,
      shares: 34,
      tags: ["#ElClasico", "#RealMadrid", "#Barcelona"],
    },
  ]

  const handleLike = (postId: number) => {
    // Handle like functionality
    console.log("Liked post:", postId)
  }

  const handleComment = (postId: number) => {
    // Handle comment functionality
    console.log("Comment on post:", postId)
  }

  const handleShare = (postId: number) => {
    // Handle share functionality
    console.log("Shared post:", postId)
  }

  return (
    <div className="space-y-6">
      {/* Create Post */}
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-6">
          <div className="flex space-x-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-red-600 text-white">SF</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-4">
              <Input
                placeholder="What's happening in sports?"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
              />
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <Badge variant="outline" className="text-xs border-gray-600 text-gray-400">
                    #NBA
                  </Badge>
                  <Badge variant="outline" className="text-xs border-gray-600 text-gray-400">
                    #NFL
                  </Badge>
                </div>
                <Button className="bg-red-600 hover:bg-red-700">
                  <Send className="w-4 h-4 mr-2" />
                  Post
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Posts Feed */}
      {posts.map((post) => (
        <Card key={post.id} className="bg-gray-800 border-gray-700">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={post.user.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="bg-red-600 text-white">{post.user.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-white font-medium">{post.user.name}</div>
                  <div className="text-gray-400 text-sm">
                    {post.user.username} • {post.timestamp}
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-gray-400">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-4">
              <p className="text-white">{post.content}</p>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs bg-gray-700 text-gray-300">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-red-400"
                  onClick={() => handleLike(post.id)}
                >
                  <Heart className="w-4 h-4 mr-2" />
                  {post.likes}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-blue-400"
                  onClick={() => handleComment(post.id)}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {post.comments}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-green-400"
                  onClick={() => handleShare(post.id)}
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  {post.shares}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
