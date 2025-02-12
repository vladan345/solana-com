import React, { ComponentPropsWithoutRef, FC } from 'react';
import { cva } from 'class-variance-authority';
import Image, { ImageProps } from 'next/image';
import { Button, ButtonProps } from '../../molecules/Button';
import { cssMerge } from '../../utils/cssMerge';

export interface GalleryImageProps extends ComponentPropsWithoutRef<'figure'> {
  index?: number;
  heading?: string;
  body?: string;
  button?: ButtonProps;
  size?: 'small' | 'large' | 'skinny';
  image?: ImageProps;
  square?: boolean;
}

const wrapper = cva(['tw-relative', 'tw-rounded-lg', 'tw-group', 'tw-m-0'], {
  variants: {
    size: {
      small: ['tw-aspect-4/3', 'tw-h-[263px]', 'tw-col-span-2'],
      large: ['tw-aspect-4/3', 'tw-h-[542px]', 'tw-row-span-2'],
      skinny: ['tw-aspect-9/16', 'tw-h-[542px]', 'tw-row-span-2'],
    },
    square: {
      true: ['tw-aspect-square'],
    },
  },
});

const content = cva([
  'tw-opacity-0',
  'group-hover:tw-opacity-100',
  'tw-transition-opacity tw-duration-300',
  'tw-h-full',
  'tw-z-10',
  'tw-overflow-hidden',
  'tw-bg-common-black/50',
  'tw-flex tw-flex-col',
  'tw-gap-2',
  'tw-p-8',
  'tw-justify-end',
]);

export const GalleryImage: FC<GalleryImageProps> = ({
  heading,
  body,
  button,
  size = 'small',
  image,
  index,
  square,
  ...props
}) => {
  const hasDetails = heading || body || button;
  return (
    <figure className={cssMerge(wrapper({ size, square }))} {...props}>
      {image && image.src && (
        <Image
          src={image.src || ''}
          alt={image.alt || ''}
          placeholder="blur"
          blurDataURL={
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAAfE+zUAAAAHElEQVQImWP4//8/w38GIAXDIBKE0DHxglMKAAIMAB8FhS2+8qo8AAAAAElFTkSuQmCC'
          }
          fill
          className="tw-object-cover tw-rounded-lg -tw-z-10"
        />
      )}
      {hasDetails && (
        <figcaption className={content()}>
          {heading && <h3 className="tw-text-display-xs tw-font-bold">{heading}</h3>}
          {body && <p className="tw-text-md tw-text-pretty">{body}</p>}
          {button && (button.label || button.children) && <Button {...button} />}
        </figcaption>
      )}
    </figure>
  );
};
