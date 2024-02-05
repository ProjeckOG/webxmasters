
import { Button } from '@/lib/@/components/ui/button';
import { Input } from '@/lib/@/components/ui/input';
import Link from 'next/link';
import React from 'react';

const ForgotPassword = () => {
  return (
    <div className="my-32  flex items-center justify-center ">
      <div className="w-full max-w-md p-8 border rounded-lg bg-darker-blue shadow-xl">
        <h2 className="text-3xl text-center  font-bold mb-6">FORGOT PASSWORD</h2>
        <p className=" mb-4 text-center">Enter your email and we will send you instructions to reset your password.</p>
        <form>
          <Input className="w-full p-2 mb-4 rounded bg-secondary " type="email" placeholder="Email Address" />
          <Button variant={'outline'} className="w-full px-4 py-2 mb-4 rounded bg-primary-color  hover:bg-accent-color">
            SEND RESET LINK
          </Button>
        </form>
        <div className=" text-center">
          REMEMBER YOUR PASSWORD? <Link href="/login" className="text-accent-color hover:underline">LOG IN</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
