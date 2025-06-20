'use client';
import { useTheme } from '@/context/theme';
import { type ThemeContextType } from '@/types/types';
import React, { useState, useEffect } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

export const ThemeSwitch = (): React.ReactElement => {
  const { theme, toggleTheme }: ThemeContextType = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className='fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-black/10 dark:border-white/20 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 z-[999]'>
        <BsSun />
      </button>
    );
  }

  return (
    <button
      className='fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-black/10 dark:border-white/20 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 z-[999]'
      onClick={toggleTheme}
    >
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  );
};
