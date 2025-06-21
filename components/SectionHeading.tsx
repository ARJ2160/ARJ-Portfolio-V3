import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
}

export const SectionHeading = ({
  children
}: SectionHeadingProps): React.ReactElement => {
  return (
    <h2 className='mb-8 text-center text-6xl font-medium capitalize'>
      {children}
    </h2>
  );
};
