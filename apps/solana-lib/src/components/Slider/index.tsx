import React from 'react';
import { ComponentPropsWithoutRef, FC } from 'react';
import { Section } from '../../molecules/Section';
import Carousel from '../../molecules/Carousel';
import SliderCard, { SliderCardProps } from './SliderCard';

interface SliderProps extends ComponentPropsWithoutRef<'section'> {
  cards?: Maybe<SliderCardProps[]>;
}

export const Slider: FC<SliderProps> = ({ cards }) => {
  return (
    <Section style={{ overflow: 'hidden' }}>
      {cards && (
        <Carousel>
          {cards.map((card, index) => (
            <SliderCard key={index} {...card} />
          ))}
        </Carousel>
      )}
    </Section>
  );
};
