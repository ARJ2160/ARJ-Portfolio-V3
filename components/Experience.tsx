'use client';

import React from 'react';
import { SectionHeading } from './SectionHeading';
import { experiencesData } from '@/lib/data';
import { motion } from 'framer-motion';

export const Experience = (): React.ReactElement => {
  return (
    <section id='experience' className='scroll-mt-28 mb-28 sm:mb-40'>
      <SectionHeading>My experience</SectionHeading>
      <div className='relative'>
        {/* Timeline line */}
        <div className='absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-200 dark:bg-gray-700 h-full'></div>

        {experiencesData.map((item, index) => (
          <motion.div
            key={index}
            className='relative flex items-center justify-between w-full mb-8'
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Timeline dot */}
            <div className='absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-400 dark:bg-gray-600 rounded-full border-4 border-white dark:border-gray-900 z-10'></div>
            {/* Content */}
            <div
              className={`w-5/12 ${
                index % 2 === 0 ? 'text-right pr-8' : 'ml-auto text-left pl-8'
              }`}
            >
              <div className='bg-white dark:bg-white/10 p-6 rounded-lg shadow-lg border border-black/10 dark:border-white/20 hover:shadow-xl dark:hover:shadow-2xl transition-shadow'>
                <div className='flex items-center gap-2 mb-2'>
                  <div className='text-2xl'>{item.icon}</div>
                  <h3 className='font-semibold text-lg'>{item.title}</h3>
                </div>
                <p className='text-sm text-gray-600 dark:text-gray-400 mb-2'>
                  {item.location}
                </p>
                <p className='text-sm text-gray-500 dark:text-gray-500 mb-3 font-medium'>
                  {item.date}
                </p>
                <p className='text-gray-700 dark:text-white/70 leading-relaxed'>
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
