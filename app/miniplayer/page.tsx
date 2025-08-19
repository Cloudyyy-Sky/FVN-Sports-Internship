import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Maximize2, Volume2, Settings } from "lucide-react"

export default function MiniPlayerPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Mini Player</h1>
          <p className="text-gray-400 text-lg">Watch multiple streams simultaneously</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((player) => (
            <Card key={player} className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-4">
                <div className="relative mb-4">
                  <video
                    className="w-full h-48 bg-gray-700 rounded-lg object-cover"
                    poster="/generic-sports-stream.png"
                    controls
                  >
                    <source
                      src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                    LIVE
                  </div>
                </div>

                <h3 className="font-bold mb-2">Stream {player}</h3>
                <p className="text-gray-400 text-sm mb-4">Lakers vs Warriors</p>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="border-gray-600 bg-transparent">
                    <Maximize2 className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="border-gray-600 bg-transparent">
                    <Volume2 className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="border-gray-600 bg-transparent">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
