import React, { ComponentPropsWithoutRef, ElementType, FC } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import Image from 'next/image';
import { cssMerge } from '../../utils/cssMerge';

export const GLOBAL_MAX_WIDTH = 'tw-max-w-screen-xl tw-mx-auto';
export const GLOBAL_PADDING = 'tw-px-4 sm:tw-px-6 lg:tw-px-8';
const section = cva([GLOBAL_MAX_WIDTH, GLOBAL_PADDING, 'tw-py-12 sm:tw-py-16 lg:tw-py-20'], {
  variants: {
    fullWidth: {
      true: ['tw-max-w-full'],
    },
    noPadding: {
      noPaddingX: ['tw-px-0 sm:tw-px-0 lg:tw-px-0'],
      noPaddingY: ['tw-py-0 sm:tw-py-0 lg:tw-py-0'],
      noPaddingAll: ['tw-p-0 sm:tw-p-0 lg:tw-p-0'],
    },
  },
});

export type SectionProps<T extends ElementType> = ComponentPropsWithoutRef<T> &
  VariantProps<typeof section> & {
    className?: string;
    wrapperClass?: string;
    backgroundImage?: string;
    as?: ElementType;
  };

export const Section = <T extends ElementType>({
  children,
  className,
  wrapperClass,
  fullWidth,
  backgroundImage,
  noPadding,
  sectionId,
  as = 'section',
  ...props
}: SectionProps<T>) => {
  const Component = as;
  return (
    <div className={cssMerge(wrapperClass, 'tw-contain-layout')} id={sectionId}>
      <Component className={cssMerge(section({ fullWidth, noPadding, className }))} {...props}>
        {children}
      </Component>
      {/* // TODO Finish bgImage styles */}
      {backgroundImage && <Image src={backgroundImage} alt="" fill />}
    </div>
  );
};
