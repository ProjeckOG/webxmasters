// app/layout.tsx
import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from './components/footer';
import { ThemeProvider } from './components/theme-provider';
import { Toaster } from 'sonner';
import GuestSidebar from './components/guestSideBar';
import UserSidebar from './components/userSidebar';
import Navbar from './components/navbar';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WebxMasters: Maker\'s Tools',
  description: 'Find the tools to create things in the digital era!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className={`flex ${inter.className} min-h-screen`}>
            <Navbar />
            <div className="flex flex-col flex-grow ml-0 md:ml-40">
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
