"use client";
import React, { useState } from "react";

const Navbar = () => {
  // State to manage the visibility of the menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex justify-between m-5 ">
        <div className="text-xl font-bold	">WEBXMASTERS</div>
        <ul className="hidden md:flex font-bold ">
          <li className="mr-5">TOOLS</li>
          <li>VIDEOS</li>
        </ul>
        <div className="hidden md:flex justify-center">
          <p className="mr-5">LOGIN</p>
          <p className="bg-primary-color font-bold -mt-5 p-5 rounded-full">
            SIGNUP
          </p>
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
      {isMenuOpen && <nav className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
        <ul className="flex flex-col bg-primary-color w-full">
          <li className="p-2">TOOLS</li>
          <hr />
          <li className="p-2">VIDEOS</li>
          <hr />
          <li className="p-2">LOGIN</li>
          <hr />
          <li className="p-2">SIGNUP</li>
        </ul>
      </nav>}
    </>
  );
};

export default Navbar;
