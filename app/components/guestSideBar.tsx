// app/components/GuestSidebar.tsx
import React from 'react';
import Link from 'next/link';
import { Home, ShoppingCart, Package, Users2, LineChart, Settings, PanelLeft, X, Rss, Briefcase, Wrench, LogIn, Newspaper } from 'lucide-react';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@radix-ui/react-tooltip';
import { Dialog, DialogTrigger, DialogContent, DialogClose } from '@/lib/@/components/ui/dialog';
import { JoinDialog } from '../(auth)/join/page';
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
                <Link href="/blog" className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg text-sm">
                  <Newspaper className="h-5 w-5" />
                  <span>BLOG</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Blog</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/jobs" className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg text-sm">
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
                <Link href="/tools" className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg text-sm">
                  <Wrench className="h-5 w-5" />
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
                <JoinDialog />
              </TooltipTrigger>
              <TooltipContent side="right">Join</TooltipContent>
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
        <DialogContent className="fixed top-0 left-0 right-0  p-4 z-50">
          <div className="flex justify-between items-center mb-4">
            <Link href="/" className="text-xl font-bold">WEBXMASTERS</Link>
            <DialogClose asChild>
              <Button variant="outline">
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>
            </DialogClose>
          </div>
          <nav className="flex flex-col items-start gap-4">
            <Link href="/blog" className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg">
              <Newspaper className="h-5 w-5" />
              <span>BLOG</span>
            </Link>
            <Link href="/jobs" className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg">
              <Briefcase className="h-5 w-5" />
              <span>JOBS</span>
            </Link>
            <Link href="/tools" className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg">
              <Wrench className="h-5 w-5" />
              <span>TOOLS</span>
            </Link>
            <Link href="/join" className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg">
              <LogIn className="h-5 w-5" />
              <span>JOIN</span>
            </Link>
          </nav>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GuestSidebar;
