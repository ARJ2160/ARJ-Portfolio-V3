'use client';

import {
  Theme,
  ThemeContextProviderProps,
  ThemeContextType
} from '@/types/types';
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeContextProvider = ({
  children
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<Theme>('light');

  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.theme) {
        setTheme(localStorage.theme as Theme);
      } else if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      localStorage.setItem('theme', theme);
      root.classList.remove(colorTheme);
      root.classList.add(theme);
    }
  }, [theme, colorTheme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
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
