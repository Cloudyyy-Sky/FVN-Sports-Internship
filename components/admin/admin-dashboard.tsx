"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Users, Video, Play, TrendingUp, Activity, Shield } from "lucide-react"
import AdminStats from "./admin-stats"
import ContentManager from "./content-manager"
import UserManager from "./user-manager"
import LiveStreamControls from "./live-stream-controls"
import AnalyticsDashboard from "./analytics-dashboard"

interface AdminDashboardProps {
  user: {
    id: string
    email?: string
    user_metadata?: {
      full_name?: string
    }
  }
}

export default function AdminDashboard({ user }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
            <p className="text-gray-400">Welcome back, {user.user_metadata?.full_name || user.email}</p>
          </div>
          <div className="flex items-center space-x-2">
            <Badge className="bg-green-600 text-white">
              <Activity className="w-3 h-3 mr-1" />
              System Online
            </Badge>
            <Badge className="bg-red-600 text-white">
              <Shield className="w-3 h-3 mr-1" />
              Admin Access
            </Badge>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <AdminStats />

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5 bg-gray-800 border-gray-700">
          <TabsTrigger value="overview" className="data-[state=active]:bg-red-600">
            <BarChart3 className="w-4 h-4 mr-2" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="content" className="data-[state=active]:bg-red-600">
            <Video className="w-4 h-4 mr-2" />
            Content
          </TabsTrigger>
          <TabsTrigger value="users" className="data-[state=active]:bg-red-600">
            <Users className="w-4 h-4 mr-2" />
            Users
          </TabsTrigger>
          <TabsTrigger value="streams" className="data-[state=active]:bg-red-600">
            <Play className="w-4 h-4 mr-2" />
            Live Streams
          </TabsTrigger>
          <TabsTrigger value="analytics" className="data-[state=active]:bg-red-600">
            <TrendingUp className="w-4 h-4 mr-2" />
            Analytics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <AnalyticsDashboard />
        </TabsContent>

        <TabsContent value="content">
          <ContentManager />
        </TabsContent>

        <TabsContent value="users">
          <UserManager />
        </TabsContent>

        <TabsContent value="streams">
          <LiveStreamControls />
        </TabsContent>

        <TabsContent value="analytics">
          <AnalyticsDashboard detailed />
        </TabsContent>
      </Tabs>
    </div>
  )
}
