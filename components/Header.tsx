'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import { links } from '@/lib/data';

export const Header = (): React.ReactElement => {
  return (
    <header className='relative z-[999]'>
      <motion.div
        className='fixed left-1/2 top-0 h-[4.5rem] w-full rounded-none border border-black/10 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:border-white/20 dark:bg-gray-950 dark:bg-opacity-75 dark:shadow-white/[0.03] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full'
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      ></motion.div>

      <nav className='fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
        <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
          {links.map(link => (
            <motion.li
              className='relative flex h-3/4 items-center justify-center'
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className='flex w-full items-center justify-center rounded-full px-3 py-3 transition hover:bg-gray-200/50 hover:text-gray-950 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-gray-300'
                href={link.hash}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
