import { ThemeContextProvider } from '@/context/theme';
import React from 'react';
import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { JSX } from 'react';

const inter = Inter({ subsets: ['latin'], preload: true });

export const metadata: Metadata = {
  title: 'Atharva J | Portfolio Website V3',
  description: 'Portfolio Website V3',
  authors: { name: 'Atharva J' },
  viewport: { width: 'device-width', initialScale: 1 },
  openGraph: {
    url: 'https://www.atharvaj.online',
    type: 'website',
    siteName: 'ARJs Portfolio V3',
    title: 'ARJs Portfolio V3',
    images: [
      {
        url: 'https://ik.imagekit.io/36athv2v82c8/Screenshot_2022-12-18_125952_xWZQNyd3I.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671348611035',
        width: 1200,
        height: 630,
        alt: 'ARJs Portfolio V3'
      }
    ]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang='en' className='!scroll-smooth dark'>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className='bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]'></div>
        <div className='bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]'></div>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </body>
    </html>
  );
}
