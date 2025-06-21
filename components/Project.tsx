'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';
import { FaExternalLinkAlt, FaGithubSquare } from 'react-icons/fa';

import type { Project as ProjectType } from '@/types/types';

export const Project = ({
  title,
  description,
  tags,
  image,
  githubUrl,
  liveUrl
}: ProjectType): React.ReactElement => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1']
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress
      }}
      className='group w-full'
    >
      <div className='flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-gray-100 transition-all duration-300 hover:bg-gray-200 hover:shadow-lg hover:shadow-black/5 dark:border-white/20 dark:bg-white/10 dark:shadow-lg dark:hover:bg-white/20 dark:hover:shadow-white/5'>
        <div className='relative overflow-hidden bg-gray-50 dark:bg-white/5'>
          <div className='relative aspect-video'>
            <Image
              src={image}
              alt={`${title} project screenshot`}
              fill
              className='object-cover object-top transition-transform duration-300 group-hover:scale-105'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
          </div>

          <div className='absolute right-4 top-4 flex translate-y-2 transform gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
            {githubUrl && (
              <a
                className='flex cursor-pointer items-center justify-center rounded-full bg-white/90 p-2.5 text-gray-700 shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-white hover:text-gray-950 focus:scale-110 active:scale-95 dark:bg-black/80 dark:text-white/80 dark:hover:bg-black/90 dark:hover:text-white'
                href={githubUrl}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`View ${title} on GitHub`}
              >
                <FaGithubSquare className='h-4 w-4' />
              </a>
            )}
            {liveUrl && (
              <a
                className='flex cursor-pointer items-center justify-center rounded-full bg-white/90 p-2.5 text-gray-700 shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-white hover:text-gray-950 focus:scale-110 active:scale-95 dark:bg-black/80 dark:text-white/80 dark:hover:bg-black/90 dark:hover:text-white'
                href={liveUrl}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`View ${title} live demo`}
              >
                <FaExternalLinkAlt className='h-4 w-4' />
              </a>
            )}
          </div>
        </div>

        <div className='flex flex-grow flex-col p-6'>
          <div className='flex-grow'>
            <div className='mb-3 line-clamp-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-gray-700 dark:text-white dark:group-hover:text-gray-200'>
              {title}
            </div>
            <p className='mb-4 line-clamp-3 text-sm leading-relaxed text-gray-600 dark:text-white/70'>
              {description}
            </p>
          </div>

          <div className='mt-auto flex flex-wrap gap-2'>
            {tags.map((tag, index) => (
              <span
                key={index}
                className='inline-flex items-center rounded-full bg-gray-900 px-2.5 py-1 text-xs font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white/20 dark:text-white/90 dark:hover:bg-white/30'
              >
                {tag}
              </span>
            ))}
          </div>

          <div className='mt-4 flex gap-3 sm:hidden'>
            {githubUrl && (
              <a
                className='flex-1 rounded-lg bg-gray-900 px-4 py-2.5 text-center font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white/20 dark:text-white dark:hover:bg-white/30'
                href={githubUrl}
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='flex items-center justify-center gap-2'>
                  <FaGithubSquare className='h-4 w-4' />
                  Code
                </span>
              </a>
            )}
            {liveUrl && (
              <a
                className='flex-1 rounded-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center font-medium text-gray-900 transition-colors hover:bg-gray-200 dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20'
                href={liveUrl}
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='flex items-center justify-center gap-2'>
                  <FaExternalLinkAlt className='h-4 w-4' />
                  Demo
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
