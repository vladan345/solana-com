import React, { ComponentPropsWithoutRef, FC } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cssMerge } from '../../utils/cssMerge';

interface DotsProps extends ComponentPropsWithoutRef<'div'>, VariantProps<typeof dot> {
  index: number;
}

const dot = cva(['tw-w-6', 'tw-h-1', 'tw-bg-gray-500', 'tw-cursor-pointer', 'tw-rounded-full'], {
  variants: {
    active: {
      true: ['tw-w-12', 'tw-bg-gradient-primary'],
    },
  },
});

export const PaginationDot: FC<DotsProps> = ({ active, index, ...props }) => {
  return (
    <div
      role="button"
      aria-label={`to item ${index + 1}`}
      tabIndex={0}
      className={cssMerge(dot({ active }))}
      {...props}
    />
  );
};
