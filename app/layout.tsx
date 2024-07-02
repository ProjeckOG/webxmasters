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
  // This is a placeholder for authentication logic to determine which sidebar to show
  const isAuthenticated = false; // Replace this with actual authentication logic

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
            {isAuthenticated ? <UserSidebar /> : <GuestSidebar />}
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
