import React, { type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface IChips {
  children: ReactNode;
  classNames: string;
}

export const Chips = ({ children, classNames }: IChips): React.ReactElement => {
  return (
    <div
      className={twMerge(
        'relative flex h-fit w-fit flex-nowrap overflow-visible rounded-full px-6 py-3 text-sm font-medium leading-[100%]',
        classNames
      )}
    >
      {children}
    </div>
  );
};
