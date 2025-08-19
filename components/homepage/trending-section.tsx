import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, MessageCircle, Heart, Share, ArrowRight } from "lucide-react"
import Link from "next/link"

export function TrendingSection() {
  const trendingContent = [
    {
      id: 1,
      type: "news",
      title: "Trade Deadline Shakeup: Star Player Moves to Championship Contender",
      excerpt:
        "In a blockbuster deal that shocked the sports world, the All-Star forward has been traded to a title-contending team...",
      author: "Sports Insider",
      timeAgo: "1 hour ago",
      likes: 1247,
      comments: 89,
      shares: 156,
      image: "/placeholder.svg?height=200&width=300",
      trending: true,
    },
    {
      id: 2,
      type: "highlight",
      title: "Rookie Sensation Breaks 50-Year Record",
      excerpt:
        "The young phenom has officially broken a record that stood for half a century, cementing their place in history...",
      author: "Record Keeper",
      timeAgo: "3 hours ago",
      likes: 2156,
      comments: 234,
      shares: 445,
      image: "/placeholder.svg?height=200&width=300",
      trending: true,
    },
    {
      id: 3,
      type: "analysis",
      title: "Championship Predictions: Who Will Take Home the Trophy?",
      excerpt:
        "With the playoffs approaching, our experts break down each team's chances and predict the ultimate champion...",
      author: "Analytics Team",
      timeAgo: "5 hours ago",
      likes: 892,
      comments: 167,
      shares: 203,
      image: "/placeholder.svg?height=200&width=300",
      trending: false,
    },
    {
      id: 4,
      type: "interview",
      title: "Exclusive: Legend Announces Retirement Plans",
      excerpt:
        "In an emotional sit-down interview, the Hall of Fame athlete discusses their future and legacy in the sport...",
      author: "FVN Sports",
      timeAgo: "8 hours ago",
      likes: 3421,
      comments: 512,
      shares: 789,
      image: "/placeholder.svg?height=200&width=300",
      trending: true,
    },
  ]

  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4 flex items-center">
              <TrendingUp className="h-8 w-8 text-primary mr-3" />
              Trending Now
            </h2>
            <p className="text-muted-foreground text-lg">The hottest stories and discussions in the sports world</p>
          </div>
          <Link href="/trending">
            <Button variant="outline" className="hidden md:flex bg-transparent">
              View All Trending
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {trendingContent.map((content) => (
            <Link key={content.id} href={`/news/${content.id}`}>
              <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-0">
                  <div className="md:flex">
                    <div className="relative md:w-1/3">
                      <img
                        src={content.image || "/placeholder.svg"}
                        alt={content.title}
                        className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {content.trending && (
                        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          Trending
                        </Badge>
                      )}
                    </div>

                    <div className="p-6 md:w-2/3">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" className="text-xs capitalize">
                          {content.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{content.timeAgo}</span>
                      </div>

                      <h3 className="font-serif font-bold text-xl mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {content.title}
                      </h3>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{content.excerpt}</p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">By {content.author}</span>

                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Heart className="h-3 w-3" />
                            {content.likes.toLocaleString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-3 w-3" />
                            {content.comments}
                          </div>
                          <div className="flex items-center gap-1">
                            <Share className="h-3 w-3" />
                            {content.shares}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link href="/trending">
            <Button variant="outline">
              View All Trending Content
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
