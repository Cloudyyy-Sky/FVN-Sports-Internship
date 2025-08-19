"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"
import Link from "next/link"

const upcomingGames = [
  {
    id: "game-1",
    sport: "Basketball",
    teams: { home: "Lakers", away: "Warriors" },
    date: "2024-01-15",
    time: "8:00 PM EST",
    venue: "Crypto.com Arena",
    status: "upcoming",
  },
  {
    id: "game-2",
    sport: "Football",
    teams: { home: "Chiefs", away: "Bills" },
    date: "2024-01-16",
    time: "7:30 PM EST",
    venue: "Arrowhead Stadium",
    status: "upcoming",
  },
  {
    id: "game-3",
    sport: "Soccer",
    teams: { home: "Barcelona", away: "Real Madrid" },
    date: "2024-01-17",
    time: "3:00 PM EST",
    venue: "Camp Nou",
    status: "live",
  },
]

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Game Schedule</h1>
          <p className="text-gray-400">Don't miss any of the action</p>
        </div>

        <div className="grid gap-6">
          {upcomingGames.map((game) => (
            <Card key={game.id} className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold">{game.teams.home}</div>
                      <div className="text-sm text-gray-400">vs</div>
                      <div className="text-2xl font-bold">{game.teams.away}</div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center text-gray-300">
                        <Calendar className="w-4 h-4 mr-2" />
                        {game.date}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Clock className="w-4 h-4 mr-2" />
                        {game.time}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <MapPin className="w-4 h-4 mr-2" />
                        {game.venue}
                      </div>
                    </div>
                  </div>

                  <div className="text-right space-y-2">
                    {game.status === "live" && (
                      <div className="inline-flex items-center px-2 py-1 bg-red-600 text-white text-xs font-medium rounded-full">
                        <div className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></div>
                        LIVE
                      </div>
                    )}
                    <div>
                      <Link href={`/live/${game.id}`}>
                        <Button className="bg-red-600 hover:bg-red-700">
                          {game.status === "live" ? "Watch Live" : "Set Reminder"}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
