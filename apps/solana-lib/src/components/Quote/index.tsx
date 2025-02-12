import React, { FC } from 'react';
import Image from 'next/image';
import { Author } from './Author';
import { Section } from '../../molecules/Section';
import { ImageProps, PersonProps } from '../../types';
import colorizeText from '../../utils/colorizeText';

interface QuoteProps {
  quote: string;
  eyebrow?: string;
  image?: ImageProps;
  author?: PersonProps;
}

export const Quote: FC<QuoteProps> = ({ eyebrow, quote, author, image }) => {
  return (
    <Section className="tw-flex">
      <div className="tw-flex tw-flex-col tw-gap-6 lg:tw-gap-8">
        {eyebrow && <span className="tw-eyebrow">{eyebrow}</span>}
        <p className="tw-font-medium tw-text-display-sm md:tw-text-display-md lg:tw-text-display-lg tw-flex tw-flex-row -tw-ml-3 md:-tw-ml-5 lg:-tw-ml-7">
          <span>&ldquo;</span>

          {quote && <span className="tw-max-w-4xl">{colorizeText(quote, 'tw-text-aqua-300')}&rdquo;</span>}
        </p>
        {author && <Author {...author} />}
      </div>
      {image && image.src && (
        <Image
          src={image.src}
          width={392}
          height={392}
          alt={image.alt || ''}
          className="tw-hidden lg:tw-block tw-self-center"
        />
      )}
    </Section>
  );
};
