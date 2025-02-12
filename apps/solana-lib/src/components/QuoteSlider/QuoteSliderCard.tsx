import React, { useContext, ComponentPropsWithoutRef, FC } from 'react';
import { cva } from 'class-variance-authority';
import { PersonProps } from '../../types';
import { cssMerge } from '../../utils/cssMerge';
import { Author } from '../Quote/Author';
import { Icon } from '../../molecules/Icon';
import { CarouselContext } from '../../molecules/Carousel/utils/CarouselContext';

export interface QuoteSliderCardProps extends Omit<ComponentPropsWithoutRef<'div'>, 'title'> {
  quote?: string;
  author?: PersonProps;
  starCount?: number;
  index?: number;
}

const wrapper = cva(
  [
    'tw-gray-radial-gradient',
    'tw-p-6 md:tw-p-8',
    'tw-w-[93vw] tw-max-w-lg',
    'tw-rounded-lg',
    'tw-card',
    'tw-flex tw-flex-col tw-gap-4',
    'tw-self-stretch',
    'tw-h-full',
    'tw-opacity-50',
  ],
  {
    variants: {
      active: {
        true: ['tw-opacity-100'],
      },
    },
  }
);

const QuoteSliderCard: FC<QuoteSliderCardProps> = ({ quote, className, author, starCount, index, ...props }) => {
  const { activeIndex } = useContext(CarouselContext);

  return (
    <div className={cssMerge(wrapper({ active: activeIndex === index }))} {...props}>
      {!!starCount && (
        <div className="tw-flex tw-gap-1">
          {Array.from({ length: starCount }).map((_, index) => (
            <Icon key={index} id="star" size={16} className="tw-text-aqua-300" fill="currentColor" />
          ))}
        </div>
      )}
      <p className="tw-text-lg tw-text-gray-200 tw-mb-8">{quote}</p>
      <Author {...author} nameColor="green gradient" className="tw-mt-auto" />
    </div>
  );
};

export default QuoteSliderCard;
