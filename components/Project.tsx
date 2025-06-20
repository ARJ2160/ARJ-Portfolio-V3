'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { FaGithubSquare, FaExternalLinkAlt } from 'react-icons/fa';
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
      <div className='bg-gray-100 border border-black/10 rounded-2xl overflow-hidden hover:bg-gray-200 transition-all duration-300 hover:shadow-lg hover:shadow-black/5 dark:bg-white/10 dark:hover:bg-white/20 dark:border-white/20 dark:shadow-lg dark:hover:shadow-white/5 h-full flex flex-col'>
        <div className='relative overflow-hidden bg-gray-50 dark:bg-white/5'>
          <div className='aspect-video relative'>
            <Image
              src={image}
              alt={`${title} project screenshot`}
              fill
              className='object-cover object-top transition-transform duration-300 group-hover:scale-105'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
          </div>

          <div className='absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>
            {githubUrl && (
              <a
                className='bg-white/90 hover:bg-white p-2.5 text-gray-700 hover:text-gray-950 flex items-center justify-center rounded-full focus:scale-110 hover:scale-110 active:scale-95 transition-all cursor-pointer shadow-lg dark:bg-black/80 dark:hover:bg-black/90 dark:text-white/80 dark:hover:text-white backdrop-blur-sm'
                href={githubUrl}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`View ${title} on GitHub`}
              >
                <FaGithubSquare className='w-4 h-4' />
              </a>
            )}
            {liveUrl && (
              <a
                className='bg-white/90 hover:bg-white p-2.5 text-gray-700 hover:text-gray-950 flex items-center justify-center rounded-full focus:scale-110 hover:scale-110 active:scale-95 transition-all cursor-pointer shadow-lg dark:bg-black/80 dark:hover:bg-black/90 dark:text-white/80 dark:hover:text-white backdrop-blur-sm'
                href={liveUrl}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`View ${title} live demo`}
              >
                <FaExternalLinkAlt className='w-4 h-4' />
              </a>
            )}
          </div>
        </div>

        <div className='p-6 flex flex-col flex-grow'>
          <div className='flex-grow'>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors'>
              {title}
            </h3>
            <p className='text-gray-600 dark:text-white/70 leading-relaxed text-sm line-clamp-3 mb-4'>
              {description}
            </p>
          </div>

          <div className='flex flex-wrap gap-2 mt-auto'>
            {tags.map((tag, index) => (
              <span
                key={index}
                className='inline-flex items-center px-2.5 py-1 text-xs font-medium bg-gray-900 text-white rounded-full dark:bg-white/20 dark:text-white/90 transition-colors hover:bg-gray-800 dark:hover:bg-white/30'
              >
                {tag}
              </span>
            ))}
          </div>

          <div className='flex gap-3 mt-4 sm:hidden'>
            {githubUrl && (
              <a
                className='flex-1 bg-gray-900 hover:bg-gray-800 text-white text-center py-2.5 px-4 rounded-lg font-medium transition-colors dark:bg-white/20 dark:hover:bg-white/30 dark:text-white'
                href={githubUrl}
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='flex items-center justify-center gap-2'>
                  <FaGithubSquare className='w-4 h-4' />
                  Code
                </span>
              </a>
            )}
            {liveUrl && (
              <a
                className='flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 text-center py-2.5 px-4 rounded-lg font-medium transition-colors border border-gray-300 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:border-white/20'
                href={liveUrl}
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='flex items-center justify-center gap-2'>
                  <FaExternalLinkAlt className='w-4 h-4' />
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
