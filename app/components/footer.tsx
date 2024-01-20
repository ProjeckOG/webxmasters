'use client'
import { FacebookIcon, Play, TwitterIcon,  } from "lucide-react";
import Link from "next/link";

const Footer = () => {

  return (
    <footer className="bg-primary-color text-white py-4">
    <div className="container mx-auto flex justify-around items-center">
      <div className="flex gap-10">
        <Link href="/tools" className="font-bold hover:text-gray-300">TOOLS</Link>
    
        <Link href="https://www.youtube.com/channel/UC0tOXEjEygR30GEnIBYN3HQ" target="_blank" className="font-bold hover:text-gray-300">VIDEOS</Link>
        <Link href="/about"  className="font-bold hover:text-gray-300">ABOUT</Link>
        <Link href="/about"  className="font-bold hover:text-gray-300">SUPPORT</Link>
      </div>
      <div className="flex gap-10">
        <Link href="https://www.youtube.com/channel/UC0tOXEjEygR30GEnIBYN3HQ" target="_blank" rel="noopener noreferrer">
          <Play fill="white" />
        </Link>
        <Link href="https://www.twitter.com/webxmasters" target="_blank" rel="noopener noreferrer">
          <TwitterIcon fill="white"/>
        </Link>
        <Link href="https://www.facebook.com/webxmasters" target="_blank" rel="noopener noreferrer">
          <FacebookIcon fill="white" />
        </Link>
      </div>
    </div>
    <div className="text-center text-white text-sm mt-10">
      ©2023 WEBXMASTERS | ALL RIGHTS RESERVED
    </div>
  </footer>
  );
};

export default Footer;
