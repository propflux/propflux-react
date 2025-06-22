import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PropFlux - Real Estate Automation Platform',
  description: 'Transform your real estate business with AI-powered automation. Save 20-40 hours per week with our comprehensive automation platform.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
