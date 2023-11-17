import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mythic',
  description: 'Mythic is a game launcher that bridges the gap between windows and mac.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
        <meta name="theme-color" content="#a046ff" />
        <meta property="og:image" content="https://getmythic.app/ogimage.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
