import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
}

export const SectionHeading = ({
  children
}: SectionHeadingProps): JSX.Element => {
  return (
    <h2 className='text-6xl font-medium capitalize mb-8 text-center'>
      {children}
    </h2>
  );
};
