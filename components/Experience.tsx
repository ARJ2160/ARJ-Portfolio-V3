'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { experiencesData } from '@/lib/data';

import { SectionHeading } from './SectionHeading';
import { TracingBeam } from './ui/tracing-beam';

export const Experience = (): React.ReactElement => {
  return (
    <section id='experience' className='mb-28 scroll-mt-28 sm:mb-40'>
      <SectionHeading>My experience</SectionHeading>
      <TracingBeam className='px-6'>
        <div className='relative mx-auto max-w-2xl pt-4 antialiased'>
          {experiencesData.map((item, index) => (
            <motion.div
              key={index}
              className='mb-10'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className='rounded-xl border border-black/5 bg-white p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl dark:border-white/10 dark:bg-white/10 dark:hover:shadow-2xl'>
                <div className='mb-4 flex items-center gap-3'>
                  <div className='rounded-lg bg-gradient-to-br from-blue-50 to-indigo-100 p-2 text-3xl dark:from-blue-900/20 dark:to-indigo-900/20'>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className='text-2xl text-gray-900 dark:text-white'>
                      {item.company}
                    </h3>
                    <p className='text-md text-gray-500 dark:text-gray-400'>
                      {item.location}
                    </p>
                  </div>
                </div>

                {/* Position and date */}
                <div className='mb-4'>
                  <h4 className='mb-1 text-lg text-gray-800 dark:text-white/90'>
                    {item.designation}
                  </h4>
                  <p className='font-sm inline-block rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'>
                    {item.date}
                  </p>
                </div>

                {/* Description */}
                {/* <p className='leading-relaxed text-gray-700 dark:text-white/70'>
                  {item.description}
                </p> */}
              </div>
            </motion.div>
          ))}
        </div>
      </TracingBeam>
    </section>
  );
};
