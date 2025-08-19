import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/navigation/footer"
import { SportHeader } from "@/components/sports/sport-header"
import { LiveGamesSection } from "@/components/sports/live-games-section"
import { TeamsSection } from "@/components/sports/teams-section"
import { ScheduleSection } from "@/components/sports/schedule-section"
import { StandingsSection } from "@/components/sports/standings-section"

interface SportPageProps {
  params: {
    sport: string
  }
}

export default function SportPage({ params }: SportPageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <SportHeader sport={params.sport} />
        <LiveGamesSection sport={params.sport} />
        <div className="grid lg:grid-cols-3 gap-8 container px-4 py-16">
          <div className="lg:col-span-2">
            <ScheduleSection sport={params.sport} />
          </div>
          <div>
            <StandingsSection sport={params.sport} />
          </div>
        </div>
        <TeamsSection sport={params.sport} />
      </main>
      <Footer />
    </div>
  )
}
