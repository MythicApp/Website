import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mythic',
  description: 'An open-source Epic Games Launcher alternative and normal game launcher for macOS written in Swift. We started this project to create a GUI frontend for Legendary and to play Windows games using game porting toolkit by Apple.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://getmythic.app" />
        <meta name="theme-color" content="#a046ff" />
        <meta property="og:url" content="https://getmythic.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Mythic" />
        <meta property="og:image" content="https://getmythic.app/ogimage.png" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mythic" />
        <meta name="twitter:description" content="An open-source Epic Games Launcher alternative and normal game launcher for macOS written in Swift. We started this project to create a GUI frontend for Legendary and to play Windows games using game porting toolkit by Apple." />
        <meta name="twitter:site" content="@mythicapp" />
        <meta name="twitter:image" content="https://getmythic.app/ogimage.png" />
        <meta name="author" content="Mythic, Jeremy, Jecta, blackxfiied" />
        <meta name="keywords" content="mythic, macos, gaming, mac, apple" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta httpEquiv="content-language" content="en-US" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body>{children}</body>
    </html>
  )
}