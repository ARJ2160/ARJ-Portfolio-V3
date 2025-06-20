import React from 'react';

interface ISocialMedia {
  children?: React.ReactNode;
  className?: string;
}

export const SocialMedia = ({
  children,
  className = ''
}: ISocialMedia): React.ReactElement => {
  return <div className={`social-media ${className}`}>{children}</div>;
};
