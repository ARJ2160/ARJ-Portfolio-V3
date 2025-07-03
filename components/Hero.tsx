'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaExternalLinkAlt, FaGithubSquare } from 'react-icons/fa';

import pic from '../images/Atharva_Joshi.webp';

export const Hero = (): React.ReactElement => {
  return (
    <section
      id='home'
      className='mb-28 max-w-[50rem] scroll-mt-28 pt-28 text-center sm:mb-0'
    >
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2
            }}
            className='mb-20 mt-10 items-center'
          >
            <div className='relative flex h-24 w-24 items-center justify-center'>
              <Image
                src={pic}
                alt='Atharva J Portrait'
                width={192}
                height={192}
                quality='95'
                priority
                className='h-48 min-w-[192px] rounded-full border-[0.35rem] border-white object-cover shadow-xl'
              />
            </div>
          </motion.div>
        </div>
      </div>
      <motion.h1
        className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'>Hey there! I'm Atharva 👋.</span> A{' '}
        <span className='font-bold text-blue-600 dark:text-blue-400'>
          full-stack dev
        </span>{' '}
        who turns ideas into digital reality. <br />I craft seamless web
        experiences with the{' '}
        <span className='bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text font-bold text-transparent'>
          MERN stack
        </span>
        , specializing in{' '}
        <span className='underline decoration-blue-500 decoration-wavy'>
          React & Next.js
        </span>{' '}
        ✨
      </motion.h1>
      <motion.div
        className='flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1
        }}
      >
        <Link
          href='#contact'
          className='group flex items-center gap-2 rounded-full border border-black/10 bg-gray-900 px-7 py-3 text-white shadow-lg outline-none transition hover:scale-110 hover:bg-gray-950 hover:shadow-xl focus:scale-110 active:scale-105 dark:border-white/20 dark:hover:shadow-2xl'
        >
          Contact me here{' '}
          <BsArrowRight className='opacity-70 transition group-hover:translate-x-1' />
        </Link>

        <a
          className='group flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3 shadow-lg outline-none transition hover:scale-110 hover:shadow-xl focus:scale-110 active:scale-105 dark:border-white/20 dark:bg-white/10 dark:hover:shadow-2xl'
          href={
            'https://drive.google.com/file/d/1UHdH9ePNuutEvVT5Df--B3T_wFJE6C65/view?usp=sharing'
          }
          target='_blank'
          rel='noreferrer'
        >
          View CV{' '}
          <FaExternalLinkAlt className='opacity-60 transition group-hover:translate-y-1' />
        </a>

        <div className='flex items-center justify-center gap-2'>
          <a
            className='flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-gray-700 shadow-lg transition hover:scale-[1.15] hover:text-gray-950 hover:shadow-xl focus:scale-[1.15] active:scale-105 dark:border-white/20 dark:bg-white/10 dark:text-white/60 dark:hover:shadow-2xl'
            href='https://www.linkedin.com/in/arj2160/'
            target='_blank'
            rel='noreferrer'
            aria-label='Visit my LinkedIn profile'
          >
            <BsLinkedin />
          </a>

          <a
            className='flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-[1.35rem] text-gray-700 shadow-lg transition hover:scale-[1.15] hover:text-gray-950 hover:shadow-xl focus:scale-[1.15] active:scale-105 dark:border-white/20 dark:bg-white/10 dark:text-white/60 dark:hover:shadow-2xl'
            href='https://github.com/ARJ2160'
            target='_blank'
            rel='noreferrer'
            aria-label='Visit my GitHub profile'
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
};
