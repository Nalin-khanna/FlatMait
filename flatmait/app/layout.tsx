import { type Metadata } from 'next'
import {
  ClerkProvider,
  UserButton,
} from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navigation/navbar/navbar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Flaties',
  description: 'Roommate finding app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <div className="absolute top-0 left-0 w-full z-50 h-15">
            <Navbar />
          </div>
          <div className="absolute top-4 right-4 z-50">
            
          </div>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
