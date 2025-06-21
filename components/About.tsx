'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { SectionHeading } from './SectionHeading';

export const About = (): React.ReactElement => {
  return (
    <motion.section
      className='mb-28 max-w-[45rem] scroll-mt-28 text-center text-xl leading-8 sm:mb-40'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <div className='mb-3'>
        Hey! I’m Atharva — I craft sleek front-ends and build high-performance
        back-ends for the web. My journey began in 2021, experimenting with HTML
        and CSS to recreate Tumblr mockups. Since then, I’ve been building
        full-stack applications using React and the MERN stack. Lately, I’ve
        been diving into System Design to level up as a full-stack engineer.
        Technologies I work with regularly:{' '}
        <span className='font-medium'>
          React, TypeScript, Storybook, Node.js, MongoDB
        </span>
      </div>
    </motion.section>
  );
};
