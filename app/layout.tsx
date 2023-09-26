import "./globals.css";
import type { Metadata } from "next";
import { Html } from "next/document";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atharva J | Portfolio Website",
  description: "Portfolio Website V3",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Html lang="en" className="!scroll-smooth">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="theme-color" href="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta property="og:url" content="https://www.atharvaj.online" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ARJs Portfolio V3" />
        <meta property="og:title" content="ARJs Portfolio V3" />
        <meta itemProp="name" content="ARJs Portfolio V3" />
        <meta name="author" content="Atharva Joshi" />
        <meta name="language" content="en-us" />
        <meta name="description" content="ARJs Portfolio Website Version 3" />
        <meta name="theme-color" content="#3399FF" />
        <meta charSet="utf-8" />
        <meta
          itemProp="image"
          content="https://ik.imagekit.io/36athv2v82c8/Screenshot_2022-12-18_125952_xWZQNyd3I.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671348611035"
        />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/36athv2v82c8/Screenshot_2022-12-18_125952_xWZQNyd3I.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671348611035"
        />
        <meta
          property="og:image:url"
          content="https://ik.imagekit.io/36athv2v82c8/Screenshot_2022-12-18_125952_xWZQNyd3I.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671348611035"
        />
        <title>ARJs Portfolio V3</title>
      </Head>
      <body className={inter.className}>{children}</body>
    </Html>
  );
}
