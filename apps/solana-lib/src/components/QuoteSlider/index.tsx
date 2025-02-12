import React, { ComponentPropsWithoutRef, FC } from 'react';
import { Section } from '../../molecules/Section';
import Carousel from '../../molecules/Carousel';
import QuoteSliderCard, { QuoteSliderCardProps } from './QuoteSliderCard';

interface QuoteSliderProps extends ComponentPropsWithoutRef<'section'> {
  cards?: Maybe<QuoteSliderCardProps[]>;
}

export const QuoteSlider: FC<QuoteSliderProps> = ({ cards }) => {
  return (
    <Section>
      {cards && (
        <Carousel hideGradient>
          {cards.map((card, i) => (
            <QuoteSliderCard key={i} {...card} index={i} />
          ))}
        </Carousel>
      )}
    </Section>
  );
};
