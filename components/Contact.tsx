'use client';

import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

import { SectionHeading } from './SectionHeading';

export const Contact = (): React.ReactElement => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', text: '' });

    const form = e.currentTarget;

    try {
      emailjs.init({
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ''
      });
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
        form
      );

      if (result.status === 200) {
        setMessage({
          type: 'success',
          text: "✅ Message sent successfully! I'll get back to you soon."
        });
        form.reset();
      }
    } catch (error) {
      console.error('EmailJS failed:', error);
      setMessage({
        type: 'error',
        text: '❌ Failed to send message. Apologies for the inconvenience, Please email me directly.'
      });
    } finally {
      setIsLoading(false);
      setTimeout(() => setMessage({ type: '', text: '' }), 5000);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    sendEmail(e).catch(console.error);
  };

  return (
    <motion.section
      id='contact'
      className='mb-20 w-[min(100%,38rem)] text-center sm:mb-28'
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

      <p className='-mt-6 text-gray-700 dark:text-white/80'>
        Please contact me directly at{' '}
        <a className='underline' href='mailto:atharvaj2160@gmail.com'>
          atharvaj2160@gmail.com
        </a>{' '}
        or through this form.
      </p>

      <form
        className='mt-10 flex flex-col dark:text-black'
        onSubmit={handleSubmit}
      >
        <input
          className='h-14 rounded-lg border border-black/10 bg-white px-4 shadow-sm transition-all focus:shadow-md dark:border-white/20 dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100 dark:focus:shadow-lg'
          name='senderEmail'
          type='email'
          required
          maxLength={500}
          placeholder='Your email'
          disabled={isLoading}
        />
        <input
          className='mt-4 h-14 rounded-lg border border-black/10 bg-white px-4 shadow-sm transition-all focus:shadow-md dark:border-white/20 dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100 dark:focus:shadow-lg'
          name='name'
          type='string'
          required
          maxLength={500}
          placeholder='Your name'
          disabled={isLoading}
        />
        <textarea
          className='my-3 h-52 resize-none rounded-lg border border-black/10 bg-white p-4 shadow-sm transition-all focus:shadow-md dark:border-white/20 dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100 dark:focus:shadow-lg'
          name='message'
          placeholder='Your message'
          required
          maxLength={5000}
          disabled={isLoading}
        />

        {message.text && (
          <div
            className={`mb-4 rounded-lg p-3 text-sm ${
              message.type === 'success'
                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
            }`}
          >
            {message.text}
          </div>
        )}

        <div className='flex flex-col items-center justify-center gap-3 sm:flex-row'>
          <button
            type='submit'
            disabled={isLoading}
            className='group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full border border-black/10 bg-gray-900 text-white shadow-lg outline-none transition-all hover:scale-110 hover:bg-gray-950 hover:shadow-xl focus:scale-110 active:scale-105 disabled:scale-100 disabled:cursor-not-allowed disabled:bg-opacity-65 dark:border-white/20 dark:bg-white dark:bg-opacity-10 dark:text-white dark:hover:text-white dark:hover:shadow-2xl'
          >
            {isLoading ? (
              <>
                <div className='h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent'></div>
                Sending...
              </>
            ) : (
              <>
                Submit{' '}
                <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1' />
              </>
            )}
          </button>
        </div>
      </form>
    </motion.section>
  );
};
