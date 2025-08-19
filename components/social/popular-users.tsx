"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users } from "lucide-react"

export default function PopularUsers() {
  const popularUsers = [
    {
      name: "Sports Analyst Pro",
      username: "@sportsanalyst",
      followers: "125K",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "NBA Insider",
      username: "@nbainsider",
      followers: "89K",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Football Expert",
      username: "@footballexpert",
      followers: "67K",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Users className="w-5 h-5" />
          Popular Users
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {popularUsers.map((user, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={user.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="bg-red-600 text-white">{user.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-white font-medium">{user.name}</div>
                  <div className="text-gray-400 text-sm">{user.username}</div>
                  <div className="text-gray-400 text-xs">{user.followers} followers</div>
                </div>
              </div>
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 bg-transparent">
                Follow
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
