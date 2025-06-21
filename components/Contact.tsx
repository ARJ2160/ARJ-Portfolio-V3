'use client';

import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

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
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
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
        onSubmit={handleSubmit}
      >
        <input
          className='h-14 px-4 rounded-lg border border-black/10 dark:border-white/20 bg-white dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none shadow-sm focus:shadow-md dark:focus:shadow-lg'
          name='senderEmail'
          type='email'
          required
          maxLength={500}
          placeholder='Your email'
          disabled={isLoading}
        />
        <input
          className='h-14 mt-4 px-4 rounded-lg border border-black/10 dark:border-white/20 bg-white dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none shadow-sm focus:shadow-md dark:focus:shadow-lg'
          name='name'
          type='string'
          required
          maxLength={500}
          placeholder='Your name'
          disabled={isLoading}
        />
        <textarea
          className='h-52 my-3 rounded-lg border border-black/10 dark:border-white/20 p-4 bg-white dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none shadow-sm focus:shadow-md dark:focus:shadow-lg resize-none'
          name='message'
          placeholder='Your message'
          required
          maxLength={5000}
          disabled={isLoading}
        />

        {message.text && (
          <div
            className={`mb-4 p-3 rounded-lg text-sm ${
              message.type === 'success'
                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
            }`}
          >
            {message.text}
          </div>
        )}

        <div className='flex flex-col sm:flex-row gap-3 items-center justify-center'>
          <button
            type='submit'
            disabled={isLoading}
            className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:text-white dark:hover:text-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65 border border-black/10 dark:border-white/20 shadow-lg hover:shadow-xl dark:hover:shadow-2xl disabled:cursor-not-allowed'
          >
            {isLoading ? (
              <>
                <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                Sending...
              </>
            ) : (
              <>
                Submit{' '}
                <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />
              </>
            )}
          </button>
        </div>
      </form>
    </motion.section>
  );
};
