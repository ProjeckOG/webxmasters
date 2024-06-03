"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/lib/@/components/ui/button";
import { CircleUserRound, Cog, Home, Menu, PanelTop } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";

const UserNavbar = () => {
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

        <div className=" hidden md:flex mr-5">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex font-bold uppercase">
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
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-primary-foreground rounded  p-2 mt-2 mr-5">
              <DropdownMenuItem>
                <Link
                  href={"/user"}
                  className="my-3 hover:underline	flex text-left"
                >
                  <Home size={25} className="mr-3" />
                  Dashboard
                </Link>
                <hr />
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href={"/profile/username"}
                  className="my-3 hover:underline	flex text-left "
                >
                  <PanelTop size={25} className="mr-3" />
                  Profile
                </Link>
                <hr />
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Link
                  href={"/user/account"}
                  className="my-3 hover:underline	flex text-left "
                >
                  <Cog size={25} className="mr-3" />
                  Account
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
              <Link href="/profile/username">PROFILE</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default UserNavbar;
