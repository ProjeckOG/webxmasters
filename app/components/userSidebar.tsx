// app/components/UserSidebar.tsx
import React from 'react';
import Link from 'next/link';
import { Home, ShoppingCart, Package, Users2, LineChart, Settings, PanelLeft, X, Users } from 'lucide-react';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@radix-ui/react-tooltip';
import { Dialog, DialogTrigger, DialogContent, DialogClose } from '@radix-ui/react-dialog';
import { Button } from '@/lib/@/components/ui/button';

const UserSidebar = () => {
  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-10 w-40 flex-col border-r bg-background hidden sm:flex">
        <nav className="flex flex-col items-start gap-4 p-4">
          <Link href="/" className="text-sm font-bold mb-6">WEBXMASTERS</Link>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/blog" className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg">
                  <Home className="h-5 w-5" />
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
                  <ShoppingCart className="h-5 w-5" />
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
                  <Package className="h-5 w-5" />
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
                <Link href="/user" className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg">
                  <Users className="h-5 w-5" />
                  <span>ACCOUNT</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Account</TooltipContent>
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
              <Home className="h-5 w-5" />
              <span>BLOG</span>
            </Link>
            <Link href="/jobs" className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg">
              <ShoppingCart className="h-5 w-5" />
              <span>JOBS</span>
            </Link>
            <Link href="/tools" className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg">
              <Package className="h-5 w-5" />
              <span>TOOLS</span>
            </Link>
            <Link href="/profile/username" className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg">
              <Users2 className="h-5 w-5" />
              <span>PROFILE</span>
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

export default UserSidebar;
