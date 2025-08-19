import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/navigation/footer"
import { SportsOverview } from "@/components/sports/sports-overview"
import { FeaturedGames } from "@/components/sports/featured-games"
import { SportsCategories } from "@/components/sports/sports-categories"

export default function SportsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <SportsOverview />
        <FeaturedGames />
        <SportsCategories />
      </main>
      <Footer />
    </div>
  )
}
