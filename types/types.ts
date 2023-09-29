export type Theme = 'light' | 'dark';

export type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};
