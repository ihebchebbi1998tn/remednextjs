import '@/styles/index.css'

import { SpeedInsights } from '@vercel/speed-insights/next'
import { Inter as FontSans } from 'next/font/google'

import { cn } from '@/lib/utils'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <div className="relative flex flex-col min-h-screen bg-background">
          <main className="flex-1">{children}</main>
        </div>
      </body>
      <SpeedInsights />
    </html>
  )
}
