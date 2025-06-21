import Image from 'next/image';
import React, { type JSX } from 'react';

import ARJLogo from '../public/arjLogo.png';

export const Footer = (): JSX.Element => {
  return (
    <div className='my-10 w-full text-2xl'>
      <p className='flex items-center justify-center text-center text-black dark:text-white'>
        Made by{' '}
        <a
          className='text-skyBlue hover:underline'
          href='https://github.com/ARJ2160'
          target='_blank'
          rel='noreferrer'
        >
          <Image width={250} height={250} src={ARJLogo} alt='ARJ' />
        </a>
      </p>
    </div>
  );
};
