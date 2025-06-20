'use client';

import React from 'react';
import { SectionHeading } from './SectionHeading';
import { skillsData } from '@/lib/data';
import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index
    }
  })
};

export const Skills = (): React.ReactElement => {
  return (
    <section
      id='skills'
      className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
        {skillsData.map(({ name, icon }, index) => (
          <motion.li
            className='bg-white border border-black/10 rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 dark:border-white/20 flex items-center gap-2 shadow-sm dark:shadow-md hover:shadow-md dark:hover:shadow-lg transition-shadow'
            key={index}
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true
            }}
            custom={index}
          >
            <Image
              src={icon !== '' ? icon : '/placeholder.svg'}
              alt={`${name} icon`}
              width={20}
              height={20}
              className='flex-shrink-0'
            />
            <span>{name}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
