"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Settings,
  PictureInPicture2,
  Grid3X3,
  Users,
  Clock,
  Wifi,
} from "lucide-react"

export function LiveStreamPlayer() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [multiView, setMultiView] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const currentGame = {
    title: "Lakers vs Warriors",
    sport: "Basketball",
    status: "LIVE",
    viewers: "45.2K",
    time: "Q3 8:42",
    score: "Lakers 89 - 92 Warriors",
    quality: "1080p HD",
    latency: "2.1s",
  }

  const multiViewStreams = [
    {
      id: 1,
      title: "Main Camera",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      active: true,
    },
    {
      id: 2,
      title: "Court Side",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      active: false,
    },
    {
      id: 3,
      title: "Bench Cam",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      active: false,
    },
    {
      id: 4,
      title: "Crowd View",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      active: false,
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => setShowControls(false), 3000)
    return () => clearTimeout(timer)
  }, [showControls])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && containerRef.current) {
      containerRef.current.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const enablePiP = async () => {
    if (videoRef.current && "pictureInPictureEnabled" in document) {
      try {
        await videoRef.current.requestPictureInPicture()
      } catch (error) {
        console.error("PiP failed:", error)
      }
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative bg-black aspect-video w-full"
      onMouseMove={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Multi-View Grid */}
      {multiView ? (
        <div className="grid grid-cols-2 gap-1 h-full">
          {multiViewStreams.map((stream) => (
            <div key={stream.id} className="relative bg-black">
              <video
                className="w-full h-full object-cover"
                src={stream.videoUrl}
                autoPlay
                muted={stream.id !== 1}
                loop
              />
              <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                {stream.title}
              </div>
              {stream.active && (
                <div className="absolute top-2 left-2">
                  <Badge className="bg-primary text-primary-foreground live-indicator text-xs">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-1 animate-pulse" />
                    LIVE
                  </Badge>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        /* Single View */
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          autoPlay
          muted={isMuted}
          loop
        />
      )}

      {/* Live Status Overlay */}
      <div className="absolute top-4 left-4 flex items-center gap-3">
        <Badge className="bg-primary text-primary-foreground live-indicator">
          <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
          {currentGame.status}
        </Badge>
        <div className="bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center">
          <Users className="h-3 w-3 mr-1" />
          {currentGame.viewers}
        </div>
        <div className="bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center">
          <Wifi className="h-3 w-3 mr-1" />
          {currentGame.quality}
        </div>
      </div>

      {/* Game Info Overlay */}
      <div className="absolute top-4 right-4 text-right">
        <div className="bg-black/70 text-white px-4 py-2 rounded-lg">
          <h3 className="font-serif font-bold text-lg">{currentGame.title}</h3>
          <div className="flex items-center justify-end gap-2 mt-1">
            <Clock className="h-3 w-3" />
            <span className="text-sm">{currentGame.time}</span>
          </div>
          <p className="text-sm mt-1">{currentGame.score}</p>
        </div>
      </div>

      {/* Video Controls */}
      {showControls && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={togglePlay} className="text-white hover:bg-white/20">
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </Button>

              <Button variant="ghost" size="icon" onClick={toggleMute} className="text-white hover:bg-white/20">
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </Button>

              <div className="text-white text-sm">Latency: {currentGame.latency}</div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMultiView(!multiView)}
                className={`text-white hover:bg-white/20 ${multiView ? "bg-primary" : ""}`}
              >
                <Grid3X3 className="h-5 w-5" />
              </Button>

              <Button variant="ghost" size="icon" onClick={enablePiP} className="text-white hover:bg-white/20">
                <PictureInPicture2 className="h-5 w-5" />
              </Button>

              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Settings className="h-5 w-5" />
              </Button>

              <Button variant="ghost" size="icon" onClick={toggleFullscreen} className="text-white hover:bg-white/20">
                <Maximize className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
