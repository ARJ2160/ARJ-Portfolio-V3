'use client';

import React from 'react';

import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Experience } from '../components/Experience';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';
import { SectionDivider } from '../components/SectionDivider';
import { Skills } from '../components/Skills';
import { ThemeSwitch } from '../components/ThemeSwitch';

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
