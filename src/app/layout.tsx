import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { UserProvider } from '@/contexts/UserContext'
import { DataProvider } from '@/contexts/DataContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Social Media Platform',
  description:
    'AI-powered social media content creation and scheduling platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <DataProvider>{children}</DataProvider>
        </UserProvider>
      </body>
    </html>
  )
}
