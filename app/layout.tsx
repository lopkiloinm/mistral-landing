import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mistral AI | Frontier AI in your hands",
  description: "Discover Mistral AI's powerful language models and solutions for enterprises and developers.",
  generator: "Next.js",
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      }
    ],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
          {children}
        </main>
      </body>
    </html>
  )
}
