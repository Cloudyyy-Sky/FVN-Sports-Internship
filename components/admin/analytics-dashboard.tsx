"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Users, Eye, Play, Calendar } from "lucide-react"

interface AnalyticsDashboardProps {
  detailed?: boolean
}

export default function AnalyticsDashboard({ detailed = false }: AnalyticsDashboardProps) {
  const metrics = [
    {
      title: "Daily Active Users",
      value: "45,678",
      change: "+12.5%",
      trend: "up",
      icon: Users,
    },
    {
      title: "Stream Hours Watched",
      value: "234K",
      change: "+8.3%",
      trend: "up",
      icon: Play,
    },
    {
      title: "Page Views",
      value: "1.2M",
      change: "-2.1%",
      trend: "down",
      icon: Eye,
    },
    {
      title: "Events Scheduled",
      value: "156",
      change: "+15.7%",
      trend: "up",
      icon: Calendar,
    },
  ]

  const topContent = [
    { title: "Lakers vs Warriors Highlights", views: "125K", sport: "Basketball" },
    { title: "NFL Championship Game", views: "89K", sport: "Football" },
    { title: "Soccer World Cup Final", views: "67K", sport: "Soccer" },
    { title: "Tennis Grand Slam", views: "45K", sport: "Tennis" },
  ]

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">{metric.title}</CardTitle>
              <metric.icon className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{metric.value}</div>
              <div className="flex items-center space-x-1 mt-1">
                {metric.trend === "up" ? (
                  <TrendingUp className="h-3 w-3 text-green-400" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-400" />
                )}
                <span className={`text-xs ${metric.trend === "up" ? "text-green-400" : "text-red-400"}`}>
                  {metric.change}
                </span>
                <span className="text-xs text-gray-400">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {detailed && (
        <>
          {/* Top Content */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Top Performing Content</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topContent.map((content, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-white font-medium">{content.title}</p>
                        <Badge variant="outline" className="text-xs text-gray-400 border-gray-600">
                          {content.sport}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-semibold">{content.views}</p>
                      <p className="text-xs text-gray-400">views</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Revenue Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Revenue Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Premium Subscriptions</span>
                    <span className="text-white font-semibold">$32,450</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Pay-per-view Events</span>
                    <span className="text-white font-semibold">$8,920</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Advertising Revenue</span>
                    <span className="text-white font-semibold">$4,308</span>
                  </div>
                  <div className="border-t border-gray-700 pt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold">Total Revenue</span>
                      <span className="text-white font-bold text-lg">$45,678</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">User Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Average Session Duration</span>
                    <span className="text-white font-semibold">24m 32s</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Bounce Rate</span>
                    <span className="text-white font-semibold">23.4%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Return Visitors</span>
                    <span className="text-white font-semibold">67.8%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Mobile Users</span>
                    <span className="text-white font-semibold">45.2%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  )
}
