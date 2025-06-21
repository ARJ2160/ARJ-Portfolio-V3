'use client';

import React from 'react';
import { SectionHeading } from './SectionHeading';
import { experiencesData } from '@/lib/data';
import { motion } from 'framer-motion';
import { TracingBeam } from './ui/tracing-beam';

export const Experience = (): React.ReactElement => {
  return (
    <section id='experience' className='scroll-mt-28 mb-28 sm:mb-40'>
      <SectionHeading>My experience</SectionHeading>
      <TracingBeam className='px-6'>
        <div className='max-w-2xl mx-auto antialiased pt-4 relative'>
          {experiencesData.map((item, index) => (
            <motion.div
              key={index}
              className='mb-10'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className='bg-white dark:bg-white/10 p-6 rounded-xl shadow-lg border border-black/5 dark:border-white/10 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 backdrop-blur-sm'>
                {/* Company header */}
                <div className='flex items-center gap-3 mb-4'>
                  <div className='text-3xl p-2 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg'>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className='font-bold text-xl text-gray-900 dark:text-white'>
                      {item.company}
                    </h3>
                    <p className='text-sm text-gray-500 dark:text-gray-400'>
                      {item.location}
                    </p>
                  </div>
                </div>

                {/* Position and date */}
                <div className='mb-4'>
                  <h4 className='text-lg font-semibold text-gray-800 dark:text-white/90 mb-1'>
                    {item.designation}
                  </h4>
                  <p className='text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full inline-block'>
                    {item.date}
                  </p>
                </div>

                {/* Description */}
                <p className='text-gray-700 dark:text-white/70 leading-relaxed'>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </TracingBeam>
    </section>
  );
};
