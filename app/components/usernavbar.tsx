"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/lib/@/components/ui/button";
import { CircleUserRound } from "lucide-react";
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

        <ul className=" hidden md:flex ">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex ">
              <CircleUserRound className="" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border p-2">
              <DropdownMenuLabel>
                <Link href={"/user"}>Dashboard</Link>
                <hr className="my-2"/>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href={"/user/profile"}>Profile</Link>
                <hr className="my-2"/>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Link href={"/user/account"}>Account</Link>
             
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
              <Link href="/user">Profile</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default UserNavbar;
