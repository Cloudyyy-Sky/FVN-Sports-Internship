export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Sports Community</h1>
          <p className="text-gray-400">Connect with fellow sports fans and share your passion</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            <CommunityFeed />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <TrendingTopics />
            <PopularUsers />
          </div>
        </div>
      </div>
    </div>
  )
}

import CommunityFeed from "@/components/social/community-feed"
import TrendingTopics from "@/components/social/trending-topics"
import PopularUsers from "@/components/social/popular-users"
