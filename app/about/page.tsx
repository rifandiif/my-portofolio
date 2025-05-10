"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Navbar } from "@/components/navbar"
import { cn } from "@/lib/utils"

type Skill = {
  name: string
  icon: string
  url?: string
}

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"tech" | "tools">("tech")

  const techStack: Skill[] = [
    {
      name: "Whatsapp",
      url: "https://wa.me/6285174179397",
      icon: "https://cdn.iconscout.com/icon/free/png-512/free-whatsapp-logo-icon-download-in-svg-png-gif-file-formats--social-media-logos-pack-icons-189793.png?f=webp&w=256",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/rfstorepbg",
      icon: "https://cdn.iconscout.com/icon/free/png-512/free-instagram-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-1583142.png?f=webp&w=256",
    },
    {
      name: "Saweria",
      url: "https://saweria.com/rfstorepbg",
      icon: "https://i.supa.codes/4pbfm1",
    },
    {
      name: "Saluran",
      url: "https://whatsapp.com/channel/0029VadvGTIKwqSVyFHGC50N",
      icon: "https://cdn.iconscout.com/icon/free/png-512/free-whatsapp-logo-icon-download-in-svg-png-gif-file-formats--social-media-logos-pack-icons-189793.png?f=webp&w=256",
    },
    {
      name: "Tiktok",
      url: "https://tiktok.com/@rfstorepbg",
      icon: "https://cdn.iconscout.com/icon/free/png-512/free-tiktok-logo-icon-download-in-svg-png-gif-file-formats--music-video-social-media-pack-logos-icons-1581904.png?f=webp&w=256",
    },
    {
      name: "SociaBuzz",
      url: "https://sociabuzz.com/rfstorepbg/tribe",
      icon: "https://storage.sociabuzz.com/storage/img/sociabuzz_logo_square.png",
    },
    {
      name: "Bot Whatsapp",
      url: "https://wa.me/6285174379397",
      icon: "https://cdn.iconscout.com/icon/free/png-512/free-whatsapp-logo-icon-download-in-svg-png-gif-file-formats--social-media-logos-pack-icons-189793.png?f=webp&w=256",
    },
  ]

  const tools: Skill[] = [
    { name: "RFSTORE", 
     url: "https://discord.gg/8ejs9xzPZC",
     icon: "https://cdn.iconscout.com/icon/free/png-512/free-discord-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-3073764.png?f=webp&w=256", 
    },
    { name: "SAVE X", 
     url: "https://discord.gg/6ZEq4EfngJ",
     icon: "https://cdn.iconscout.com/icon/free/png-512/free-discord-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-3073764.png?f=webp&w=256", 
    },
    { name: "Vanchez", 
     url: "https://discord.gg/CHz358vZ",
     icon: "https://cdn.iconscout.com/icon/free/png-512/free-discord-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-3073764.png?f=webp&w=256", 
    },
    { name: "KODAI", 
     url: "https://discord.gg/3XNSSdCkUd",
     icon: "https://cdn.iconscout.com/icon/free/png-512/free-discord-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-3073764.png?f=webp&w=256", 
    },
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="container mx-auto px-4 py-8 portrait:pb-20 landscape:pt-20">
        <div className="max-w-3xl mx-auto">
          <motion.div className="bg-zinc-900/50 rounded-lg p-6 mb-8" {...fadeInUp}>
            <motion.h1
              className="text-2xl font-bold mb-6 inline-block relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              About Me
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-yellow-400"></span>
            </motion.h1>
            <motion.div
              className="flex flex-col md:flex-row items-center gap-6 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div
                className="relative"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Glowing ring effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 blur-md opacity-50 animate-pulse pointer-events-none" />
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 pointer-events-none" />
                <div className="relative w-32 h-32">
                  <Image
                    src="https://virtual-dimension.xyz/apis/uploads/9xnibE4Ndw66aNy.jpg"
                    alt="My Profile"
                    width={200}
                    height={200}
                    className="rounded-full border-4 border-black object-cover"
                  />
                </div>
              </motion.div>
              <div className="flex-1">
                <p className="text-gray-300">
                  I believe in writing clean, maintainable code and creating intuitive user experiences. My goal is to
                  build websites that not only function flawlessly but also provide an engaging user experience.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-zinc-900/50 rounded-lg p-6 mb-8"
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6 inline-block relative">
              LINK
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-yellow-400"></span>
            </h2>

            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setActiveTab("tech")}
                className={cn(
                  "px-4 py-2 rounded-lg transition-colors",
                  activeTab === "tech" ? "bg-yellow-400/20 text-yellow-400" : "text-gray-400 hover:text-white",
                )}
              >
                RFSTOREPBG
              </button>
              <button
                onClick={() => setActiveTab("tools")}
                className={cn(
                  "px-4 py-2 rounded-lg transition-colors",
                  activeTab === "tools" ? "bg-yellow-400/20 text-yellow-400" : "text-gray-400 hover:text-white",
                )}
              >
                PARTNER
              </button>
            </div>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              initial="initial"
              animate="animate"
              variants={{
                animate: {
                  transition: { staggerChildren: 0.05 },
                },
              }}
            >
              {(activeTab === "tech" ? techStack : tools).map((skill, index) => {
                const content = (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg border border-yellow-400 hover:border-yellow-400/50 transition-colors bg-zinc-900/50"
                    variants={fadeInUp}
                    target={skill.url}
                  >
                    <Image
                      src={skill.icon || "/placeholder.svg"}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                    <span>{skill.name}</span>
                  </motion.div>
                )
                return skill.url ? (
                  <a key={index} href={skill.url} target="_blank" rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                )
              })}
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-zinc-900/50 rounded-lg p-6"
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6 inline-block relative">
              Contact Me
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-yellow-400"></span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <a href="mailto:admin@rfstorepbg.my.id" className="text-yellow-400 hover:underline">
                    admin@rfstorepbg.my.id
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div>
                  <h3 className="text-lg font-semibold mb-2">Location</h3>
                  <p className="text-gray-300">Purbalingga, Jawa Tengah, Indonesia</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Available for</h3>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Open Reseller Topup</li>
                    <li>Topup All Game</li>
                    <li>Sell Account MLBB</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
      <Navbar />
    </div>
  )
}

