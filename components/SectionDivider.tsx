'use client';

import { motion } from 'framer-motion';
import React from 'react';

export const SectionDivider = (): React.ReactElement => {
  return (
    <motion.div
      className='my-24 hidden h-16 w-1 rounded-full bg-gray-200 dark:bg-opacity-20 sm:block'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
};
