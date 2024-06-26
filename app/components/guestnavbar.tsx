'use client'
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/lib/@/components/ui/button";

const GuestNavbar =  () => {
  // State to manage the visibility of the menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className="flex justify-between m-5 ">
        <div className="text-xl font-bold	">
          <Link href="/">WEBXMASTERS</Link>
        </div>
        <ul className="hidden md:flex font-bold ">
        <li className="mr-5">
            <Link href="/blog">BLOG</Link>
          </li>
          <li className="mr-5">
            <Link href="/jobs">JOBS</Link>
          </li>
          <li className="mr-5">
            <Link href="/tools">TOOLS</Link>
          </li>
        </ul>

        <ul className=" hidden md:flex ">
          <li className="mr-5 font-bold">
            <Link href="/login">LOGIN</Link>
          </li>
          <Button variant={"outline"} className="rounded-full hover:bg-primary-foreground -mt-2">
            <Link href="/signup" className="font-bold px-5">SIGNUP</Link>
          </Button>
        </ul>
        <button className="md:hidden" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </nav>
      {isMenuOpen && (
        <nav className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col text-center bg-primary-color w-full">
            <li className="p-2">
              <Link href="/blog">BLOG</Link>
            </li>
            <hr />
            <li className="p-2">
              <Link href="/jobs">JOBS</Link>
            </li>
            <hr />
            <li className="p-2">
              <Link href="/tools">TOOLS</Link>
            </li>
            <hr />
            <li className="p-2">
              <Link href="/login">LOGIN</Link>
            </li>
            <hr />
            <li className="p-2">
              <Link href="/signup">SIGNUP</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default GuestNavbar;
