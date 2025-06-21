'use client';

import React from 'react';

import { projectsData } from '@/lib/data';

import { Project } from './Project';
import { SectionHeading } from './SectionHeading';

export const Projects = (): React.ReactElement => {
  return (
    <section id='projects' className='mb-28 scroll-mt-28'>
      <SectionHeading>My projects</SectionHeading>
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 md:gap-8 lg:grid-cols-2'>
        {projectsData.map((project, index) => (
          <div className='relative' key={index}>
            <Project {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};
