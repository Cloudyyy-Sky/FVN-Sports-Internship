"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageCircle, Send, Heart, ThumbsUp, Flame, Trophy, TrendingUp, Users, BarChart3, Target } from "lucide-react"

export function LiveStreamSidebar() {
  const [chatMessage, setChatMessage] = useState("")
  const [selectedReaction, setSelectedReaction] = useState<string | null>(null)

  const chatMessages = [
    {
      id: 1,
      user: "SportsGuru23",
      message: "What a play by LeBron! 🔥",
      timestamp: "2m ago",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 2,
      user: "LakersNation",
      message: "Defense needs to step up in the 4th quarter",
      timestamp: "3m ago",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 3,
      user: "BasketballFan",
      message: "This game is insane! Best matchup of the season",
      timestamp: "5m ago",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 4,
      user: "CourtVision",
      message: "Warriors need to control the pace",
      timestamp: "7m ago",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 5,
      user: "NBAAnalyst",
      message: "Curry heating up from beyond the arc",
      timestamp: "8m ago",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  ]

  const gameStats = {
    lakers: {
      name: "Lakers",
      score: 89,
      stats: {
        "Field Goals": "34/72 (47.2%)",
        "3-Pointers": "8/24 (33.3%)",
        "Free Throws": "13/16 (81.3%)",
        Rebounds: "38",
        Assists: "22",
        Turnovers: "12",
      },
    },
    warriors: {
      name: "Warriors",
      score: 92,
      stats: {
        "Field Goals": "36/75 (48.0%)",
        "3-Pointers": "12/28 (42.9%)",
        "Free Throws": "8/10 (80.0%)",
        Rebounds: "41",
        Assists: "28",
        Turnovers: "9",
      },
    },
  }

  const reactions = [
    { icon: Heart, label: "Love", count: 1247, color: "text-red-500" },
    { icon: ThumbsUp, label: "Like", count: 892, color: "text-blue-500" },
    { icon: Flame, label: "Fire", count: 634, color: "text-orange-500" },
    { icon: Trophy, label: "Amazing", count: 445, color: "text-yellow-500" },
  ]

  const sendMessage = () => {
    if (chatMessage.trim()) {
      // Handle sending message
      setChatMessage("")
    }
  }

  return (
    <div className="w-full lg:w-96 bg-background border-l flex flex-col">
      <Tabs defaultValue="chat" className="flex-1 flex flex-col">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="chat" className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4" />
            Chat
          </TabsTrigger>
          <TabsTrigger value="stats" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Stats
          </TabsTrigger>
          <TabsTrigger value="social" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Social
          </TabsTrigger>
        </TabsList>

        <TabsContent value="chat" className="flex-1 flex flex-col mt-0">
          {/* Live Chat */}
          <Card className="flex-1 flex flex-col">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center justify-between">
                Live Chat
                <Badge variant="secondary" className="text-xs">
                  <Users className="h-3 w-3 mr-1" />
                  2.1K online
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col p-0">
              <ScrollArea className="flex-1 px-4">
                <div className="space-y-4">
                  {chatMessages.map((msg) => (
                    <div key={msg.id} className="flex items-start gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={msg.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{msg.user[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-sm">{msg.user}</span>
                          <span className="text-xs text-muted-foreground">{msg.timestamp}</span>
                        </div>
                        <p className="text-sm">{msg.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Chat Input */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    placeholder="Type your message..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={sendMessage} size="icon">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stats" className="flex-1 mt-0">
          {/* Game Statistics */}
          <Card className="flex-1">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Target className="h-5 w-5" />
                Live Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Score */}
              <div className="text-center">
                <div className="flex items-center justify-between text-2xl font-bold">
                  <span>{gameStats.lakers.name}</span>
                  <span className="text-muted-foreground">vs</span>
                  <span>{gameStats.warriors.name}</span>
                </div>
                <div className="flex items-center justify-between text-4xl font-black mt-2">
                  <span className="text-primary">{gameStats.lakers.score}</span>
                  <span className="text-muted-foreground text-lg">-</span>
                  <span className="text-primary">{gameStats.warriors.score}</span>
                </div>
              </div>

              {/* Team Stats */}
              <div className="space-y-4">
                <h4 className="font-semibold">Team Statistics</h4>
                {Object.entries(gameStats.lakers.stats).map(([stat, value]) => (
                  <div key={stat} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{stat}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="text-right">{value}</div>
                      <div>{gameStats.warriors.stats[stat as keyof typeof gameStats.warriors.stats]}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social" className="flex-1 mt-0">
          {/* Social Features */}
          <Card className="flex-1">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Reactions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Live Reactions */}
              <div className="grid grid-cols-2 gap-3">
                {reactions.map((reaction) => (
                  <Button
                    key={reaction.label}
                    variant={selectedReaction === reaction.label ? "default" : "outline"}
                    className="flex flex-col items-center gap-2 h-auto py-4"
                    onClick={() => setSelectedReaction(reaction.label)}
                  >
                    <reaction.icon className={`h-6 w-6 ${reaction.color}`} />
                    <div className="text-center">
                      <div className="text-xs font-medium">{reaction.label}</div>
                      <div className="text-xs text-muted-foreground">{reaction.count.toLocaleString()}</div>
                    </div>
                  </Button>
                ))}
              </div>

              {/* Live Poll */}
              <div className="space-y-3">
                <h4 className="font-semibold">Live Poll</h4>
                <div className="space-y-2">
                  <p className="text-sm">Who will win this game?</p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-between bg-transparent">
                      Lakers
                      <span className="text-xs">67%</span>
                    </Button>
                    <Button variant="outline" className="w-full justify-between bg-transparent">
                      Warriors
                      <span className="text-xs">33%</span>
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">1,247 votes</p>
                </div>
              </div>

              {/* Trending Hashtags */}
              <div className="space-y-3">
                <h4 className="font-semibold">Trending</h4>
                <div className="flex flex-wrap gap-2">
                  {["#LakersVsWarriors", "#NBAPlayoffs", "#LeBronJames", "#StephenCurry"].map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
