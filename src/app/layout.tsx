import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chomba - Software Engineer',
  description: 'Chomba, a proactive software engineer, is equipped with adept problem-solving and critical-thinking skills, demonstrating meticulous attention to detail and employing a methodical work approach.',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://chomba.dev',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
