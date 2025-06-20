'use client';

import React from 'react';
import { SectionHeading } from './SectionHeading';
import { projectsData } from '@/lib/data';
import { Project } from './Project';

export const Projects = (): React.ReactElement => {
  return (
    <section id='projects' className='scroll-mt-28 mb-28'>
      <SectionHeading>My projects</SectionHeading>
      <div className='grid gap-6 md:gap-8 grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto px-4'>
        {projectsData.map((project, index) => (
          <div className='relative' key={index}>
            <Project {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};
