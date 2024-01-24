// components/DarkModeManager.tsx
'use client';

import React, { useState, useEffect } from 'react';
import DarkModeToggle from './darkmodetoggle';

const DarkModeManager: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    const isDarkMode = savedMode ? JSON.parse(savedMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDarkMode);

    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', JSON.stringify(newMode));
      if (newMode) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
      return newMode;
    });
  };

  // Only render the toggle when darkMode is determined (not undefined)
  return (
    <>
      {darkMode !== undefined && (
        <DarkModeToggle isDarkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      )}
    </>
  );
};

export default DarkModeManager;
