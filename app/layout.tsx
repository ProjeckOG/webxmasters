import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WebxMasters: Maker\'s Tools',
  description: 'Find the tools to create things in the digital era!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex flex-col min-h-screen'>
        <Navbar />
        <div className='flex-grow'>
        {children}
        </div>
        <Footer/>
        </div>
        </body>
    </html>
  )
}
