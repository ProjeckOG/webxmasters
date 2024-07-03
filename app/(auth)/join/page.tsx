"use client"
import React, { useState } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogClose } from '@/lib/@/components/ui/dialog';
import { Button } from '@/lib/@/components/ui/button';
import { LoginForm } from './components/loginForm';
import { SignupForm } from './components/signupForm';


export const JoinDialog = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg text-sm">
          <span>JOIN</span>
        </button>
      </DialogTrigger>
      <DialogContent className="p-4 rounded-lg z-50">
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold">WEBXMASTERS</span>
          <DialogClose asChild>
            <Button variant="outline">
              <span className="sr-only">Close</span>
            </Button>
          </DialogClose>
        </div>
        <div className="flex flex-col gap-4">
          {isLogin ? <LoginForm /> : <SignupForm />}
          <Button onClick={() => setIsLogin(!isLogin)} variant="link" className="w-full">
            {isLogin ? 'Switch to Signup' : 'Switch to Login'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
