'use client';

import {
  Theme,
  ThemeContextProviderProps,
  ThemeContextType
} from '@/types/types';
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeContextProvider = ({
  children
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<Theme>('light');

  // Simple toggle function to switch states
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      window.localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error('useTheme must be used within a ThemeContextProvider');
  }

  return context;
};
