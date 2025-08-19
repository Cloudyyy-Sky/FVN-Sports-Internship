"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Users, Clock, TrendingUp } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const featuredGames = [
    {
      id: 1,
      title: "Lakers vs Warriors",
      sport: "Basketball",
      status: "LIVE",
      viewers: "45.2K",
      time: "Q3 8:42",
      score: "Lakers 89 - 92 Warriors",
      thumbnail: "/basketball-lakers-warriors.png",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 2,
      title: "Chiefs vs Bills",
      sport: "Football",
      status: "LIVE",
      viewers: "78.5K",
      time: "Q2 12:34",
      score: "Chiefs 14 - 21 Bills",
      thumbnail: "/nfl-chiefs-bills-action.png",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
    {
      id: 3,
      title: "Real Madrid vs Barcelona",
      sport: "Soccer",
      status: "LIVE",
      viewers: "156.8K",
      time: "67'",
      score: "Real Madrid 2 - 1 Barcelona",
      thumbnail: "/el-clasico-stadium.png",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredGames.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [featuredGames.length])

  const currentGame = featuredGames[currentSlide]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-card to-background">
      <div className="container px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm font-medium">
                <TrendingUp className="h-3 w-3 mr-1" />
                #1 Sports Streaming Platform
              </Badge>
              <h1 className="font-serif font-black text-4xl md:text-6xl lg:text-7xl leading-tight">
                Live Sports
                <br />
                <span className="text-primary">Everywhere</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Watch live games, catch up on highlights, and never miss a moment of the action. Stream your favorite
                sports in HD quality with zero lag.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/live">
                <Button size="lg" className="text-lg px-8 py-6 pulse-glow">
                  <Play className="h-5 w-5 mr-2" />
                  Watch Live Now
                </Button>
              </Link>
              <Link href="/schedule">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                  Browse Schedule
                </Button>
              </Link>
            </div>

            {/* Live Stats */}
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="font-serif font-bold text-2xl text-primary">12</div>
                <div className="text-sm text-muted-foreground">Live Games</div>
              </div>
              <div className="text-center">
                <div className="font-serif font-bold text-2xl text-primary">280K+</div>
                <div className="text-sm text-muted-foreground">Active Viewers</div>
              </div>
              <div className="text-center">
                <div className="font-serif font-bold text-2xl text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Coverage</div>
              </div>
            </div>
          </div>

          {/* Featured Game Card */}
          <div className="relative">
            <Card className="overflow-hidden border-2 border-primary/20 shadow-2xl">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={currentGame.thumbnail || "/placeholder.svg"}
                    alt={currentGame.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Live Badge */}
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground live-indicator">
                    <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                    {currentGame.status}
                  </Badge>

                  {/* Viewers Count */}
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm flex items-center">
                    <Users className="h-3 w-3 mr-1" />
                    {currentGame.viewers}
                  </div>

                  <Link href={`/watch/${currentGame.id}`}>
                    <Button
                      size="lg"
                      className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-primary/90 hover:bg-primary text-primary-foreground shadow-lg"
                    >
                      <Play className="h-6 w-6 ml-1" />
                    </Button>
                  </Link>

                  {/* Game Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {currentGame.sport}
                      </Badge>
                      <div className="flex items-center text-sm">
                        <Clock className="h-3 w-3 mr-1" />
                        {currentGame.time}
                      </div>
                    </div>
                    <h3 className="font-serif font-bold text-xl mb-1">{currentGame.title}</h3>
                    <p className="text-sm opacity-90">{currentGame.score}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {featuredGames.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent" />
    </section>
  )
}
