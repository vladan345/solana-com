import React, { FC } from 'react';
import Image from 'next/image';
import { cva } from 'class-variance-authority';
import glassQuote from '../../../assets/images/glass-quotes.webp';
import { PersonProps } from '../../../types';
import { HtmlParser } from '../HtmlParser';

interface RichTextQuoteProps {
  quote?: string;
  author?: PersonProps;
}

const wrapper = cva([
  'tw-quote-gradient',
  'tw-rounded-lg',
  'tw-border',
  'tw-border-gray-900',
  'tw-p-8',
  'tw-flex',
  'tw-flex-col',
  'tw-gap-4',
  'md:tw-flex-row',
  'md:tw-gap-8',
]);

export const RichTextQuote: FC<RichTextQuoteProps> = ({ quote, author, ...props }) => {
  return (
    <div className="tw-py-4">
      <div className={wrapper()} {...props}>
        <Image src={glassQuote} width={123} height={135} alt="" className="tw-w-16 tw-self-start md:tw-w-[123px]" />
        <div>
          {quote && <HtmlParser classes="tw-text-display-sm" rawHtml={quote} />}
          {author && (
            <div className="tw-eyebrow tw-text-common-white tw-mt-8 tw-flex tw-flex-col tw-gap-1.5 sm:tw-flex-row tw-text-md">
              {author.name && <span className="tw-font-bold">{author.name}</span>}
              {author.role && <span> {author.role}</span>}
              {author.company && <span> — {author.company}</span>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
