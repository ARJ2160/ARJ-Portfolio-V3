import dynamic from 'next/dynamic';
import React from 'react';

import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { SectionDivider } from '../components/SectionDivider';
import { ThemeSwitch } from '../components/ThemeSwitch';

const About = dynamic(
  () => import('../components/About').then(mod => ({ default: mod.About })),
  {
    loading: () => (
      <div className='h-96 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800' />
    )
  }
);

const Projects = dynamic(
  () =>
    import('../components/Projects').then(mod => ({ default: mod.Projects })),
  {
    loading: () => (
      <div className='h-96 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800' />
    )
  }
);

const Skills = dynamic(
  () => import('../components/Skills').then(mod => ({ default: mod.Skills })),
  {
    loading: () => (
      <div className='h-64 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800' />
    )
  }
);

const Experience = dynamic(
  () =>
    import('../components/Experience').then(mod => ({
      default: mod.Experience
    })),
  {
    loading: () => (
      <div className='h-96 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800' />
    )
  }
);

const Contact = dynamic(
  () => import('../components/Contact').then(mod => ({ default: mod.Contact })),
  {
    loading: () => (
      <div className='h-64 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800' />
    )
  }
);

const Footer = dynamic(
  () => import('../components/Footer').then(mod => ({ default: mod.Footer })),
  {
    loading: () => (
      <div className='h-32 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800' />
    )
  }
);

export default function Home(): React.ReactElement {
  return (
    <div className='relative'>
      <Header />
      <main className='flex flex-col items-center px-4'>
        <Hero />
        <SectionDivider />
        <div className='relative'>
          <About />
          <div className='absolute right-[15rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]'></div>
          <div className='absolute left-[-30rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
        </div>
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </main>
      <ThemeSwitch />
    </div>
  );
}
