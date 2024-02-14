'use client'

// components/Dropdown.tsx

import React, { useState } from 'react';

interface DropdownProps {
  label: string;
  options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded leading-tight focus:outline-none focus:shadow-outline"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
      </button>
      {isOpen && (
        <ul className="absolute z-10 w-44 bg-white shadow-lg rounded mt-2 py-1 text-gray-700">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
