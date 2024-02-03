"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "./modetoggle";

const Navbar: React.FC = () => {
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
            <Link href="/tools">TOOLS</Link>
          </li>
          <li>
            <Link
              href="https://www.youtube.com/channel/UC0tOXEjEygR30GEnIBYN3HQ"
              target="_blank"
            >
              VIDEOS
            </Link>
          </li>
        </ul>
        
        <div className=" md:flex  items-center justify-center;">
        <ModeToggle />
          <p className="mr-5 font-bold">
            <Link href="/login">LOGIN</Link>
          </p>
          <Link href="/signup">
            <p className=" border hover:bg-primary-color font-bold   px-10 py-2  rounded-full">
              SIGNUP
            </p>
          </Link>
        </div>
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
              <Link href="/tools">TOOLS</Link>
            </li>
            <hr />
            <li className="p-2">
              <Link href="https://www.youtube.com/channel/UC0tOXEjEygR30GEnIBYN3HQ">
                VIDEOS
              </Link>
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

export default Navbar;
