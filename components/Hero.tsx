'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import pic from '../images/Atharva_Joshi.webp';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';

export const Hero = (): React.ReactElement => {
  return (
    <section
      id='home'
      className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28 pt-28'
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
            className='items-center mt-10 mb-20'
          >
            <div className='relative w-24 h-24 flex items-center justify-center'>
              <Image
                src={pic}
                alt='Atharva J Portrait'
                width={192}
                height={192}
                quality='95'
                priority
                className='h-48 min-w-[192px] rounded-full object-cover border-[0.35rem] border-white shadow-xl'
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
          full-stack wizard
        </span>{' '}
        who turns ideas into digital reality. <br />I craft seamless web
        experiences with the{' '}
        <span className='bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent font-bold'>
          MERN stack
        </span>
        , specializing in{' '}
        <span className='underline decoration-wavy decoration-blue-500'>
          React & Next.js magic
        </span>{' '}
        ✨
      </motion.h1>
      <motion.div
        className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1
        }}
      >
        <Link
          href='#contact'
          className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition border border-black/10 dark:border-white/20 shadow-lg hover:shadow-xl dark:hover:shadow-2xl'
          onClick={() => {
            // setActiveSection('Contact');
            // setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{' '}
          <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </Link>

        <a
          className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:border-white/20 shadow-lg hover:shadow-xl dark:hover:shadow-2xl'
          href='/CV.pdf'
          download
        >
          Download CV{' '}
          <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
        </a>

        <a
          className='bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60 dark:border-white/20 shadow-lg hover:shadow-xl dark:hover:shadow-2xl'
          href='https://www.linkedin.com/in/arj2160/'
          target='_blank'
          rel='noreferrer'
          aria-label='Visit my LinkedIn profile'
        >
          <BsLinkedin />
        </a>

        <a
          className='bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60 dark:border-white/20 shadow-lg hover:shadow-xl dark:hover:shadow-2xl'
          href='https://github.com/ARJ2160'
          target='_blank'
          rel='noreferrer'
          aria-label='Visit my GitHub profile'
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};
