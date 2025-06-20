export type Theme = 'light' | 'dark';

export type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
};

export type Experience = {
  title: string;
  location: string;
  description: string;
  icon: React.ReactNode;
  date: string;
};

export type Skill = {
  name: string;
  icon: string;
};
