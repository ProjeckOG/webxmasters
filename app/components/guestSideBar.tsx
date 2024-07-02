// app/components/GuestSidebar.tsx
import React from 'react';
import Link from 'next/link';
import { Home, ShoppingCart, Package, Users2, LineChart, Settings, PanelLeft, X, Rss, Briefcase, Wrench, LogIn } from 'lucide-react';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@radix-ui/react-tooltip';
import { Dialog, DialogTrigger, DialogContent, DialogClose } from '@radix-ui/react-dialog';
import { Button } from '@/lib/@/components/ui/button';


const GuestSidebar = () => {
  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-10 w-40 flex-col border-r bg-background hidden sm:flex">
        <nav className="flex flex-col items-start gap-4 p-4">
          <Link href="/" className="text-base font-bold mb-6">WEBXMASTERS</Link>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/blog" className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg">
                  <Rss className="h-5 w-5" />
                  <span>BLOG</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Blog</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/jobs" className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg">
                  <Briefcase className="h-5 w-5" />
                  <span>JOBS</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Jobs</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/tools" className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg">
                  <Wrench  className="h-5 w-5" />
                  <span>TOOLS</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Tools</TooltipContent>
            </Tooltip>
          </TooltipProvider>

        </nav>
        <nav className="mt-auto flex flex-col items-start gap-4 p-4">
        <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/login" className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg">
                  <LogIn  className="h-5 w-5" />
                  <span>LOGIN</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Login</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/signup" className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg">
                  <LineChart className="h-5 w-5" />
                  <span>SIGNUP</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Signup</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="sm:hidden fixed top-4 left-4 z-20">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="fixed top-0 left-0 right-0 bg-white p-4 z-50">
          <div className="flex justify-between items-center mb-4">
            <Link href="/" className="text-2xl font-bold">WEBXMASTERS</Link>
            <DialogClose asChild>
              <Button variant="outline">
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>
            </DialogClose>
          </div>
          <nav className="flex flex-col items-start gap-4">
            <Link href="/blog" className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg">
              <Rss className="h-5 w-5" />
              <span>BLOG</span>
            </Link>
            <Link href="/jobs" className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg">
              <Briefcase className="h-5 w-5" />
              <span>JOBS</span>
            </Link>
            <Link href="/tools" className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg">
              <Wrench  className="h-5 w-5" />
              <span>TOOLS</span>
            </Link>
            <Link href="/login" className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg">
              <LogIn  className="h-5 w-5" />
              <span>LOGIN</span>
            </Link>
            <Link href="/signup" className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg">
              <LineChart className="h-5 w-5" />
              <span>SIGNUP</span>
            </Link>
            <Link href="/settings" className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg mt-auto">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </nav>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GuestSidebar;
