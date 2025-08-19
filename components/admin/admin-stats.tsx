"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Video, Eye, TrendingUp, Play, Calendar } from "lucide-react"

export default function AdminStats() {
  const stats = [
    {
      title: "Total Users",
      value: "12,847",
      change: "+12%",
      icon: Users,
      color: "text-blue-400",
    },
    {
      title: "Active Streams",
      value: "23",
      change: "Live",
      icon: Play,
      color: "text-red-400",
    },
    {
      title: "Total Videos",
      value: "1,234",
      change: "+8%",
      icon: Video,
      color: "text-green-400",
    },
    {
      title: "Monthly Views",
      value: "2.4M",
      change: "+15%",
      icon: Eye,
      color: "text-yellow-400",
    },
    {
      title: "Revenue",
      value: "$45,678",
      change: "+23%",
      icon: TrendingUp,
      color: "text-purple-400",
    },
    {
      title: "Scheduled Events",
      value: "156",
      change: "This week",
      icon: Calendar,
      color: "text-orange-400",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">{stat.title}</CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <Badge
              variant={stat.change.includes("+") ? "default" : "secondary"}
              className="text-xs mt-1 bg-gray-700 text-gray-300"
            >
              {stat.change}
            </Badge>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
