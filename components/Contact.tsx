'use client';

import React from 'react';
import { SectionHeading } from './SectionHeading';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

export const Contact = (): JSX.Element => {
  return (
    <motion.section
      id='contact'
      className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1
      }}
      viewport={{
        once: true
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className='text-gray-700 -mt-6 dark:text-white/80'>
        Please contact me directly at{' '}
        <a className='underline' href='mailto:atharvaj2160@gmail.com'>
          atharvaj2160@gmail.com
        </a>{' '}
        or through this form.
      </p>

      <form
        className='mt-10 flex flex-col dark:text-black'
        onSubmit={e => {
          e.preventDefault();
          // This is where you would handle form submission
          const formData = new FormData(e.currentTarget);
          console.log('Form submitted:', {
            email: formData.get('senderEmail'),
            message: formData.get('message')
          });
        }}
      >
        <input
          className='h-14 px-4 rounded-lg border border-black/10 dark:border-white/20 bg-white dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none shadow-sm focus:shadow-md dark:focus:shadow-lg'
          name='senderEmail'
          type='email'
          required
          maxLength={500}
          placeholder='Your email'
        />
        <textarea
          className='h-52 my-3 rounded-lg border border-black/10 dark:border-white/20 p-4 bg-white dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none shadow-sm focus:shadow-md dark:focus:shadow-lg resize-none'
          name='message'
          placeholder='Your message'
          required
          maxLength={5000}
        />
        <button
          type='submit'
          className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65 border border-black/10 dark:border-white/20 shadow-lg hover:shadow-xl dark:hover:shadow-2xl mx-auto'
        >
          Submit{' '}
          <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />{' '}
        </button>
      </form>
    </motion.section>
  );
};
