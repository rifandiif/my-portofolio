import { Metadata, Viewport } from 'next'
import type { Metadata as MetadataType } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import BackgroundMusic from '@/components/background-music'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RFSTOREPBG',
  description: 'RFSTOREPBG adalah toko top up game terpercaya yang melayani Mobile Legends, Free Fire, PUBG Mobile, dan lainnya. Proses cepat, harga murah, pembayaran mudah',
  openGraph: {
    title: 'RFSTOREPBG - Toko Top Up Game',
    description: 'Top up MLBB, FF, PUBG Mobile.',
    url: 'https://www.rfstorepbg.my.id',
    siteName: 'RFSTOREPBG',
    images: [
      {
        url: 'https://virtual-dimension.xyz/apis/uploads/9xnibE4Ndw66aNy.jpg', // 🔥 Gambar thumbnail WA
        width: 1200,
        height: 630,
        alt: 'RFSTOREPBG Thumbnail',
      },
    ],
    type: 'website',
  },
  icons: [
    {
      rel: 'icon',
      url: '/favicon.svg',
      type: 'image/svg+xml',
    },
  ],
  manifest: '/manifest.json',
  themeColor: '#000000',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'RFSTOREPBG',
  },
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <BackgroundMusic />
        {children}
      </body>
    </html>
  )
}



import './globals.css'
