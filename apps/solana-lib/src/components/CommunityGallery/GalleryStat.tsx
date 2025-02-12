import React, { ComponentPropsWithoutRef, FC } from 'react';
import { cva } from 'class-variance-authority';
import { Button, ButtonProps } from '../../molecules/Button';

export type ColorOptions = 'blue' | 'pink' | 'green' | 'yellow';

export interface GalleryStatProps extends ComponentPropsWithoutRef<'div'> {
  index?: number;
  stat?: string;
  body?: string;
  button?: ButtonProps;
  eyebrow?: string;
  square?: boolean;
  color?: ColorOptions;
}

const wrapper = cva(
  [
    'tw-relative',
    'tw-rounded-lg',
    'tw-bg-gray-800',
    'tw-group',
    'tw-aspect-4/3',
    'tw-h-[263px]',
    'tw-col-span-2',
    'tw-grid',
    'tw-gap-3',
    'tw-p-8',
    'tw-pt-6',
    'tw-text-center',
    'tw-my-auto',
    'tw-content-center',
  ],
  {
    variants: {
      square: {
        true: ['tw-aspect-square'],
      },
    },
  }
);

const statStyle = cva(['tw-text-display-lg', 'tw-font-bold'], {
  variants: {
    color: {
      pink: ['tw-text-pink-300'],
      green: ['tw-text-green-500'],
      blue: ['tw-text-blue-400'],
      yellow: ['tw-text-yellow-300'],
    },
  },
});

export const GalleryStat: FC<GalleryStatProps> = ({
  body,
  button,
  index,
  square,
  eyebrow,
  stat,
  color = 'pink',
  ...props
}) => {
  return (
    <div className={wrapper({ square })} {...props}>
      {eyebrow && <span className="tw-eyebrow !tw-text-gray-300 !tw-text-xs">{eyebrow}</span>}
      {stat && <h3 className={statStyle({ color })}>{stat}</h3>}
      {body && <p className="tw-text-sm">{body}</p>}
      {button && (button.label || button.children) && <Button {...button} className="tw-mt-1 tw-mx-auto" />}
    </div>
  );
};
