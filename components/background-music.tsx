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
    audio.muted = true

    const tryAutoplay = async () => {
      try {
        await audio.play()
        setIsPlaying(true)

        // Jika autoplay berhasil, coba unmute setelah delay
        setTimeout(() => {
          try {
            audio.muted = false
            setIsMuted(false)
          } catch (e) {
            console.warn("Unmute failed", e)
          }
        }, 2000)
      } catch (err) {
        console.warn("Autoplay failed, waiting for interaction...", err)
        // Pasang listener agar bisa auto play saat user klik atau scroll
        const handleUserGesture = async () => {
          try {
            audio.muted = false
            await audio.play()
            setIsPlaying(true)
            setIsMuted(false)
            document.removeEventListener("click", handleUserGesture)
            document.removeEventListener("scroll", handleUserGesture)
          } catch (e) {
            console.warn("Still can't play after user gesture", e)
          }
        }

        document.addEventListener("click", handleUserGesture)
        document.addEventListener("scroll", handleUserGesture)
      }
    }

    tryAutoplay()
  }, [])

  const togglePlayback = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused || isMuted) {
      try {
        audio.muted = false
        await audio.play()
        setIsPlaying(true)
        setIsMuted(false)
      } catch (error) {
        console.log("Playback failed:", error)
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
        className="fixed bottom-4 right-4 z-50 p-3 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
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
