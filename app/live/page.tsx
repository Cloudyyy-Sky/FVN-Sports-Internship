import { Header } from "@/components/navigation/header"
import { LiveStreamPlayer } from "@/components/live/live-stream-player"
import { LiveStreamSidebar } from "@/components/live/live-stream-sidebar"
import { LiveStreamControls } from "@/components/live/live-stream-controls"

export default function LivePage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-1 flex flex-col lg:flex-row">
        {/* Main Video Player Area */}
        <div className="flex-1 flex flex-col">
          <LiveStreamPlayer />
          <LiveStreamControls />
        </div>

        {/* Sidebar with Chat and Stats */}
        <LiveStreamSidebar />
      </main>
    </div>
  )
}
