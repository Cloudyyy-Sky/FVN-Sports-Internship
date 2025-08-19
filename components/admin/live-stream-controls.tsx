"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Pause, Square, Settings, Users, Eye, Calendar } from "lucide-react"

export default function LiveStreamControls() {
  const [streams, setStreams] = useState([
    {
      id: 1,
      title: "Lakers vs Warriors",
      status: "Live",
      viewers: 15420,
      duration: "1:23:45",
      quality: "1080p",
      sport: "Basketball",
    },
    {
      id: 2,
      title: "NFL Championship",
      status: "Live",
      viewers: 89340,
      duration: "2:15:30",
      quality: "4K",
      sport: "Football",
    },
    {
      id: 3,
      title: "Tennis Grand Slam",
      status: "Scheduled",
      viewers: 0,
      duration: "00:00:00",
      quality: "1080p",
      sport: "Tennis",
      scheduledTime: "3:00 PM EST",
    },
  ])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-red-600 text-white animate-pulse"
      case "Scheduled":
        return "bg-blue-600 text-white"
      case "Ended":
        return "bg-gray-600 text-white"
      default:
        return "bg-gray-600 text-white"
    }
  }

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Active Streams</p>
                <p className="text-2xl font-bold text-white">23</p>
              </div>
              <Play className="h-8 w-8 text-red-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Total Viewers</p>
                <p className="text-2xl font-bold text-white">156K</p>
              </div>
              <Eye className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Scheduled</p>
                <p className="text-2xl font-bold text-white">8</p>
              </div>
              <Calendar className="h-8 w-8 text-yellow-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Peak Viewers</p>
                <p className="text-2xl font-bold text-white">2.1M</p>
              </div>
              <Users className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Stream Controls */}
      <div className="grid gap-6">
        {streams.map((stream) => (
          <Card key={stream.id} className="bg-gray-800 border-gray-700">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <CardTitle className="text-white">{stream.title}</CardTitle>
                  <Badge className={getStatusColor(stream.status)}>{stream.status}</Badge>
                  <Badge variant="outline" className="text-gray-300 border-gray-600">
                    {stream.sport}
                  </Badge>
                </div>
                <div className="flex items-center space-x-2">
                  {stream.status === "Live" && (
                    <>
                      <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 bg-transparent">
                        <Pause className="w-4 h-4 mr-1" />
                        Pause
                      </Button>
                      <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 bg-transparent">
                        <Square className="w-4 h-4 mr-1" />
                        Stop
                      </Button>
                    </>
                  )}
                  {stream.status === "Scheduled" && (
                    <Button className="bg-red-600 hover:bg-red-700">
                      <Play className="w-4 h-4 mr-1" />
                      Start Stream
                    </Button>
                  )}
                  <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 bg-transparent">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-gray-400">Viewers</p>
                  <p className="text-lg font-semibold text-white">
                    {stream.viewers.toLocaleString()}
                    {stream.status === "Live" && <span className="text-green-400 ml-1">●</span>}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Duration</p>
                  <p className="text-lg font-semibold text-white">{stream.duration}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Quality</p>
                  <p className="text-lg font-semibold text-white">{stream.quality}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">{stream.status === "Scheduled" ? "Starts At" : "Status"}</p>
                  <p className="text-lg font-semibold text-white">
                    {stream.status === "Scheduled" ? stream.scheduledTime : stream.status}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
