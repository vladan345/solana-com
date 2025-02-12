import React, { FC } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import Image from 'next/image';
import { cssMerge } from '../../utils/cssMerge';
import { Section } from '../../molecules/Section';
import { ImageProps } from '../../types';

import useMediaQuery from '../../utils/hooks/useMediaQuery';
import Carousel from '../../molecules/Carousel';

interface ExtendedImageProps extends ImageProps {
  url?: string;
}
interface TrustbarProps extends VariantProps<typeof wrapper> {
  eyebrow?: string;
  logos?: ExtendedImageProps[];
}

const wrapper = cva(['tw-flex', 'tw-flex-col', 'tw-gap-8'], {
  variants: {
    variant: {
      standard: ['tw-py-8', 'sm:tw-py-12'],
      standardPurple: ['tw-py-8', 'sm:tw-py-12'],
      grid: ['tw-py-12'],
    },
  },
});

const colorScheme = cva([], {
  variants: {
    backgroundColor: {
      grid: [],
      standard: [],
      standardPurple: ['tw-bg-purple-500 tw-text-common-white'],
    },
    eyebrow: {
      grid: [],
      standard: [],
      standardPurple: ['tw-text-common-white'],
    },
  },
});

const logoGroupWrapper = cva(['tw-flex', 'tw-flex-wrap', 'tw-justify-center', 'tw-gap-4'], {
  variants: {
    variant: {
      grid: ['sm:tw-gap-6'],
      standard: ['sm:tw-gap-8'],
      standardPurple: ['sm:tw-gap-8'],
    },
  },
});

const logoWrapper = cva([], {
  variants: {
    variant: {
      grid: [
        'tw-w-56',
        'tw-h-28',
        'tw-bg-common-white/[5%]',
        'tw-flex',
        'tw-justify-center',
        'tw-items-center',
        'tw-border',
        'tw-rounded-lg',
        'tw-border-common-white/[12%]',
      ],
      standard: [],
      standardPurple: [],
    },
  },
});

const logoStyles = cva(['tw-w-auto'], {
  variants: {
    variant: {
      grid: ['tw-object-scale-down', 'tw-h-6'],
      standard: ['tw-h-5 sm:tw-h-6 tw-brightness-0 tw-invert'],
      standardPurple: ['sm:tw-h-6'],
    },
  },
});

export const Trustbar: FC<TrustbarProps> = ({ eyebrow, logos, variant }) => {
  const isTablet = useMediaQuery('sm');
  const isStandardVariant = variant === 'standard';

  const logosJSX =
    logos &&
    logos.map((logo, index) => {
      const LogoTag = logo.url ? 'a' : 'div';

      return (
        <>
          {logo.src &&
            <LogoTag
              key={index}
              className={cssMerge(logoWrapper({ variant }))}
              href={logo.url}
              target={logo.url ? '_blank' : undefined}
              rel={logo.url ? 'noopener noreferrer' : undefined}
            >
              <Image
                key={`${logo.src}-${index}`}
                src={logo.src}
                alt={logo.alt || ''}
                height={24}
                width={118}
                placeholder='blur'
                blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
                className={cssMerge(logoStyles({ variant }))}
              />
            </LogoTag>
          }
        </>
      );
    });

  return (
    <Section className={cssMerge(wrapper({ variant }))} wrapperClass={colorScheme({ backgroundColor: variant })}>
      {eyebrow && (
        <span className={`tw-eyebrow tw-text-center tw-text-xs sm:tw-text-sm ${colorScheme({ eyebrow: variant })}`}>
          {eyebrow}
        </span>
      )}
      {isTablet || isStandardVariant ? (
        <div className={cssMerge(logoGroupWrapper({ variant }))}>{logosJSX}</div>
      ) : (
        <Carousel>{logosJSX}</Carousel>
      )}
    </Section>
  );
};
