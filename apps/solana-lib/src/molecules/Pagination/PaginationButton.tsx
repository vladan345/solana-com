import React, { FC } from 'react';
import { cva } from 'class-variance-authority';
import { Button, ButtonProps } from '../../molecules/Button';
import { Icon } from '../../molecules/Icon';
import { cssMerge } from '../../utils/cssMerge';

interface PButtonProps extends ButtonProps {
  side?: 'left' | 'right';
}

const button = cva(['tw-text-common-white', 'tw-hidden', 'md:tw-block'], {
  variants: {
    side: {
      left: ['tw-rotate-180'],
      right: [],
    },
    disabled: {
      true: ['tw-text-gray-500'],
    },
  },
});

export const PaginationButton: FC<PButtonProps> = ({ className, side, disabled, ...props }) => {
  return (
    <Button hierarchy="link" size="sm" className={cssMerge(button({ className }))} disabled={disabled} {...props}>
      <Icon id="arrow-right" className={cssMerge(button({ side, disabled }))} stroke="currentColor" size={18} />
    </Button>
  );
};
