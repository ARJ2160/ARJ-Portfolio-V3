'use client';

import { Hero } from '../components/Hero';
import { Header } from '../components/Header';
import { SectionDivider } from '../components/SectionDivider';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { Experience } from '../components/Experience';
import { Contact } from '../components/Contact';
import { ThemeSwitch } from '../components/ThemeSwitch';
import React from 'react';

export default function Home(): React.ReactElement {
  return (
    <div className='relative'>
      <Header />
      <main className='flex flex-col items-center px-4'>
        <Hero />
        <SectionDivider />
        <div className='relative'>
          <About />
          <div className='bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[15rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]'></div>
          <div className='bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-30rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]'></div>
        </div>
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <ThemeSwitch />
    </div>
  );
}
