import React from 'react';

interface ISocialMedia {
  children?: React.ReactNode;
  className?: string;
}

export const SocialMedia = ({
  children,
  className = ''
}: ISocialMedia): JSX.Element => {
  return <div className={`social-media ${className}`}>{children}</div>;
};
