import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/navigation/footer"
import { HeroSection } from "@/components/homepage/hero-section"
import { LiveStreamsSection } from "@/components/homepage/live-streams-section"
import { HighlightsSection } from "@/components/homepage/highlights-section"
import { PopularSportsSection } from "@/components/homepage/popular-sports-section"
import { TrendingSection } from "@/components/homepage/trending-section"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <LiveStreamsSection />
        <HighlightsSection />
        <PopularSportsSection />
        <TrendingSection />
      </main>
      <Footer />
    </div>
  )
}
