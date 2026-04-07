import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'De Compliance Afdeling - Compliance op orde',
  description: 'Hulp bij het voldoen aan wet- en regelgeving. Steun bij de voorbereiding op een audit.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className={inter.variable} data-scroll-behavior="smooth">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
