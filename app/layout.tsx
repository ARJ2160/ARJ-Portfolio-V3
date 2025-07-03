import '../styles/globals.css';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata, Viewport } from 'next';
import type { JSX } from 'react';
import React from 'react';

import { ThemeContextProvider } from '@/context/theme';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' }
  ]
};

export const metadata: Metadata = {
  title: {
    default: 'Atharva Joshi | Portfolio V3',
    template: '%s | Atharva Joshi'
  },
  description:
    'Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. View my portfolio showcasing innovative projects and professional experience.',
  authors: [{ name: 'Atharva Joshi', url: 'https://www.atharvaj.site/' }],
  creator: 'Atharva Joshi',
  publisher: 'Atharva Joshi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  metadataBase: new URL('https://www.atharvaj.site/'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.atharvaj.site/',
    siteName: 'Atharva Joshi | Portfolio V3',
    title: 'Atharva Joshi | Portfolio V3',
    description:
      'Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. View my portfolio showcasing innovative projects and professional experience.',
    images: [
      {
        url: '/og-image.png', // You should add this image to your public folder
        width: 1200,
        height: 630,
        alt: 'Atharva Joshi | Portfolio V3',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atharva Joshi | Full Stack Developer Portfolio',
    description:
      'Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.',
    images: ['/og-image.png'], // Same image as OpenGraph
    creator: 'https://x.com/Atharvaj2160'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  icons: {
    apple: [{ url: '/apple-touch-icon.png' }]
  },
  manifest: '/manifest.json'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body
        className={`bg-[#F6F6F8] text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className='absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]'></div>
        <div className='absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
        <ThemeContextProvider>{children}</ThemeContextProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
