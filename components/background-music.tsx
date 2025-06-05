"use client"

import { useState, useEffect, useRef } from "react"
import { Volume2, VolumeX } from "lucide-react"

export default function BackgroundMusic() {
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.5
    audio.muted = true // Start muted
    audio.play().then(() => {
      setIsPlaying(true)
    }).catch((err) => {
      console.warn("Autoplay failed:", err)
    })

    const handleEnded = () => {
      setIsPlaying(false)
      setIsMuted(true)
    }

    audio.addEventListener("ended", handleEnded)

    // Try to unmute after short delay (works on some browsers)
    const unmuteTimeout = setTimeout(() => {
      if (audio) {
        audio.muted = false
        setIsMuted(false)
      }
    }, 2000) // Try unmute after 2 seconds

    return () => {
      audio.removeEventListener("ended", handleEnded)
      clearTimeout(unmuteTimeout)
    }
  }, [])

  const togglePlayback = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (isMuted || !isPlaying) {
      try {
        audio.muted = false
        await audio.play()
        setIsPlaying(true)
        setIsMuted(false)
      } catch (error) {
        console.log("Playback failed:", error)
        audio.muted = true
        setIsPlaying(false)
        setIsMuted(true)
      }
    } else {
      audio.muted = true
      audio.pause()
      setIsPlaying(false)
      setIsMuted(true)
    }
  }

  return (
    <>
      <audio ref={audioRef} src="https://i.supa.codes/MT-CiK" preload="auto" />
      <button
        onClick={togglePlayback}
        className="fixed bottom-4 right-4 z-50 p-3 bg-black/50 rounded-full hover:bg-black/70 transition-colors touch-manipulation"
        aria-label={isMuted ? "Unmute background music" : "Mute background music"}
        style={{
          WebkitTapHighlightColor: "transparent",
        }}
      >
        {isMuted || !isPlaying ? (
          <VolumeX className="w-6 h-6 text-white" />
        ) : (
          <Volume2 className="w-6 h-6 text-white" />
        )}
      </button>
    </>
  )
}
