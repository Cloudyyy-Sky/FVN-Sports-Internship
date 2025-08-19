import { Header } from "@/components/navigation/header"
import { LiveStreamPlayer } from "@/components/live/live-stream-player"
import { LiveStreamSidebar } from "@/components/live/live-stream-sidebar"
import { LiveStreamControls } from "@/components/live/live-stream-controls"

interface LiveGamePageProps {
  params: {
    gameId: string
  }
}

export default function LiveGamePage({ params }: LiveGamePageProps) {
  // In a real app, you would fetch game data based on gameId
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-1 flex flex-col lg:flex-row">
        <div className="flex-1 flex flex-col">
          <LiveStreamPlayer />
          <LiveStreamControls />
        </div>
        <LiveStreamSidebar />
      </main>
    </div>
  )
}
