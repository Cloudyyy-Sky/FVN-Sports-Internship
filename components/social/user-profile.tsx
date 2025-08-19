"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Users, Trophy, Calendar, Settings, Share2, MessageCircle, Play } from "lucide-react"

interface UserProfileProps {
  user: {
    id: string
    email?: string
    user_metadata?: {
      full_name?: string
      avatar_url?: string
    }
  }
}

export default function UserProfile({ user }: UserProfileProps) {
  const [isFollowing, setIsFollowing] = useState(false)

  const displayName = user.user_metadata?.full_name || user.email?.split("@")[0] || "Sports Fan"
  const initials = displayName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)

  const favoriteTeams = [
    { name: "Los Angeles Lakers", sport: "Basketball", logo: "/placeholder.svg?height=40&width=40" },
    { name: "Kansas City Chiefs", sport: "Football", logo: "/placeholder.svg?height=40&width=40" },
    { name: "Real Madrid", sport: "Soccer", logo: "/placeholder.svg?height=40&width=40" },
  ]

  const recentActivity = [
    {
      id: 1,
      type: "watched",
      content: "Lakers vs Warriors Highlights",
      timestamp: "2 hours ago",
      icon: Play,
    },
    {
      id: 2,
      type: "liked",
      content: "NFL Championship Game",
      timestamp: "1 day ago",
      icon: Heart,
    },
    {
      id: 3,
      type: "commented",
      content: "Soccer World Cup Final",
      timestamp: "2 days ago",
      icon: MessageCircle,
    },
  ]

  const achievements = [
    { name: "Sports Enthusiast", description: "Watched 100+ hours", icon: Trophy, earned: true },
    { name: "Social Butterfly", description: "Made 50+ comments", icon: MessageCircle, earned: true },
    { name: "Loyal Fan", description: "Member for 1+ year", icon: Calendar, earned: false },
    { name: "Community Leader", description: "Top contributor", icon: Users, earned: false },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Profile Header */}
      <Card className="bg-gray-800 border-gray-700 mb-8">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src={user.user_metadata?.avatar_url || "/placeholder.svg"} alt={displayName} />
              <AvatarFallback className="bg-red-600 text-white text-2xl">{initials}</AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-white">{displayName}</h1>
                  <p className="text-gray-400">{user.email}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" className="border-gray-600 text-gray-300 bg-transparent">
                    <Settings className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                  <Button variant="outline" className="border-gray-600 text-gray-300 bg-transparent">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">156</div>
                  <div className="text-gray-400">Following</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">2.3K</div>
                  <div className="text-gray-400">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">89</div>
                  <div className="text-gray-400">Hours Watched</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Profile Content */}
      <Tabs defaultValue="favorites" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-gray-800 border-gray-700">
          <TabsTrigger value="favorites" className="data-[state=active]:bg-red-600">
            <Heart className="w-4 h-4 mr-2" />
            Favorites
          </TabsTrigger>
          <TabsTrigger value="activity" className="data-[state=active]:bg-red-600">
            <Play className="w-4 h-4 mr-2" />
            Activity
          </TabsTrigger>
          <TabsTrigger value="achievements" className="data-[state=active]:bg-red-600">
            <Trophy className="w-4 h-4 mr-2" />
            Achievements
          </TabsTrigger>
          <TabsTrigger value="social" className="data-[state=active]:bg-red-600">
            <Users className="w-4 h-4 mr-2" />
            Social
          </TabsTrigger>
        </TabsList>

        <TabsContent value="favorites">
          <div className="grid gap-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Favorite Teams</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {favoriteTeams.map((team, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-gray-700 rounded-lg">
                      <img src={team.logo || "/placeholder.svg"} alt={team.name} className="w-10 h-10 rounded" />
                      <div>
                        <div className="text-white font-medium">{team.name}</div>
                        <div className="text-gray-400 text-sm">{team.sport}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="activity">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg">
                    <div className="p-2 bg-red-600 rounded-full">
                      <activity.icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white">
                        You {activity.type} <span className="font-medium">{activity.content}</span>
                      </div>
                      <div className="text-gray-400 text-sm">{activity.timestamp}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-4 p-4 rounded-lg ${
                      achievement.earned ? "bg-yellow-600/20 border border-yellow-600/50" : "bg-gray-700"
                    }`}
                  >
                    <div className={`p-2 rounded-full ${achievement.earned ? "bg-yellow-600" : "bg-gray-600"}`}>
                      <achievement.icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-medium">{achievement.name}</div>
                      <div className="text-gray-400 text-sm">{achievement.description}</div>
                    </div>
                    {achievement.earned && <Badge className="bg-yellow-600 text-white">Earned</Badge>}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social">
          <div className="grid gap-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Following</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/placeholder.svg" />
                          <AvatarFallback className="bg-red-600 text-white">SF</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-white font-medium">Sports Fan {i}</div>
                          <div className="text-gray-400 text-sm">@sportsfan{i}</div>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-600 text-gray-300 bg-transparent"
                        onClick={() => setIsFollowing(!isFollowing)}
                      >
                        {isFollowing ? "Following" : "Follow"}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
