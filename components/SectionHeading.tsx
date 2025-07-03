import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
}

export const SectionHeading = ({
  children
}: SectionHeadingProps): React.ReactElement => {
  return (
    <h2 className='mb-10 text-center text-7xl font-medium capitalize'>
      {children}
    </h2>
  );
};
