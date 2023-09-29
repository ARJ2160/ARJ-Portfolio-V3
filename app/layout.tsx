import { ThemeContextProvider } from '@/context/theme';
import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"], preload: true });

export const metadata: Metadata = {
  title: 'Atharva J | Portfolio Website',
  description: 'Portfolio Website V3',
  authors: { name: 'Atharva J' },
  viewport: { width: 'device-width', initialScale: 1 },
  icons: '',
  manifest: ''
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </body>
    </html>
  );
}
