import React, { ComponentPropsWithoutRef, FC } from 'react';
import Image from 'next/image';
import { cva } from 'class-variance-authority';
import { PersonProps } from '../../types';
import { cssMerge } from '../../utils/cssMerge';

interface AuthorProps extends PersonProps, Omit<ComponentPropsWithoutRef<'div'>, 'role'> {
  nameColor?: 'white' | 'green gradient';
}

const nameStyles = cva(['tw-text-xl'], {
  variants: {
    nameColor: {
      white: [],
      'green gradient': ['tw-bg-gradient-two tw-bg-clip-text tw-text-common-transparent tw-font-bold'],
    },
  },
});

export const Author: FC<AuthorProps> = ({ name, role, company, thumbnail, nameColor, className, ...props }) => {
  return (
    <div className={cssMerge('tw-flex tw-gap-4', className)} {...props}>
      {thumbnail && thumbnail.src && (
        <Image
          src={thumbnail.src || ''}
          width={40}
          height={40}
          alt={thumbnail.alt || name || ''}
          className="tw-self-start"
        />
      )}
      <div className="tw-flex tw-flex-col tw-gap-1">
        <span className={cssMerge(nameStyles({ nameColor }))}>{name}</span>
        {(role || company) && (
          <span className="tw-text-sm tw-eyebrow !tw-text-gray-300">
            {role}
            {role && ','} {company}
          </span>
        )}
      </div>
    </div>
  );
};
