'use client';

import { Hero, ThemeSwitch, SectionDivider } from '@/components';
import React from 'react';

export default function Home(): JSX.Element {
  return (
    <main className='flex flex-col items-center justify-center p-24'>
      <Hero />
      <ThemeSwitch />
      <SectionDivider />
    </main>
  );
}
