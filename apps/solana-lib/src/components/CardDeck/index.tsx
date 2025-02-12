import { VariantProps, cva } from 'class-variance-authority';
import { DefaultCard } from './DefaultCard/defaultCard';
import { Section } from '../../molecules/Section';
import React, { FC } from 'react';
import { cssMerge } from '../../utils/cssMerge';

export type ValidCols = 1 | 2 | 3;

interface CardDeckProps {
  headline?: string;
  isListing?: boolean;
  cards: DefaultCard[];
  numCols?: ValidCols;
  featured?: boolean;
}

const wrapper = cva([], {
  variants: {
    isListing: {
      true: [
        'tw-flex',
        'tw-flex-col',
        'tw-gap-6',
        'tw-pt-12',
        'tw-pb-8',
        'sm:tw-pt-12',
        'sm:tw-pb-8',
        'sm:tw-gap-8',
        'lg:tw-pt-16',
        'lg:tw-pb-12',
      ],
    },
  },
});

const cardDeckWrapper = cva(['tw-grid', 'tw-gap-7'], {
  variants: {
    numCols: {
      1: ['tw-grid-cols-1'],
      2: ['tw-grid-cols-1', 'md:tw-grid-cols-2'],
      3: ['tw-grid-cols-1', 'md:tw-grid-cols-2', 'lg:tw-grid-cols-3'],
    },
  },
});

export const CardDeck: FC<CardDeckProps & VariantProps<typeof cardDeckWrapper>> = ({
  cards,
  numCols,
  featured,
  headline,
  isListing,
}) => {
  if (!cards) {
    return null;
  }
  const featuredCard = featured && cards[0];
  return (
    <Section className={cssMerge(wrapper({ isListing }))}>
      {featuredCard && (
        <div className="tw-mb-7">
          <DefaultCard isFeatured={true} {...featuredCard} />
        </div>
      )}
      {isListing && headline && <span className="tw-text-common-white tw-text-lg">{headline}</span>}
      <div className={cssMerge(cardDeckWrapper({ numCols }))}>
        {!!cards.length &&
          cards.map((card, index) => {
            const hiddenOnDesktop = featured && index === 0;
            return <DefaultCard key={index} hiddenOnDesktop={hiddenOnDesktop} {...card} />;
          })}
      </div>
    </Section>
  );
};
