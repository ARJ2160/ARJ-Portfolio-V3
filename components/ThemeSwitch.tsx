'use client';
import React, { useEffect, useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

import { useTheme } from '@/context/theme';
import { type ThemeContextType } from '@/types/types';

export const ThemeSwitch = (): React.ReactElement => {
  const { theme, toggleTheme }: ThemeContextType = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        id='mode-switch-btn'
        className='fixed bottom-5 right-5 z-[999] flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-black/10 bg-white bg-opacity-80 shadow-2xl backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] active:scale-105 dark:border-white/20 dark:bg-gray-950'
      >
        <BsSun />
      </button>
    );
  }

  return (
    <button
      id='mode-switch-btn'
      className='fixed bottom-5 right-5 z-[999] flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-black/10 bg-white bg-opacity-80 shadow-2xl backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] active:scale-105 dark:border-white/20 dark:bg-gray-950'
      onClick={toggleTheme}
    >
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  );
};
