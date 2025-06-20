import React, { type JSX, type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface IChips {
  children: ReactNode;
  classNames: string;
}

export const Chips = ({ children, classNames }: IChips): JSX.Element => {
  return (
    <div
      className={twMerge(
        'flex w-fit py-3 px-6 relative overflow-visible h-fit flex-nowrap text-sm leading-[100%] font-medium rounded-full',
        classNames
      )}
    >
      {children}
    </div>
  );
};
