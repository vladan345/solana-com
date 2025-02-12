import React, { ComponentPropsWithoutRef, Dispatch, FC, SetStateAction } from 'react';
import { cva } from 'class-variance-authority';
import { SwitcherCardProps } from './SwitcherCard';
import { cssMerge } from '../../utils/cssMerge';

interface SwitcherButtonsProps extends ComponentPropsWithoutRef<'div'> {
  switcherCards: SwitcherCardProps[];
  activeIndex: number;
  setActive: Dispatch<SetStateAction<number>>;
}

const buttonStyles = cva(
  [
    'tw-font-mono',
    'tw-uppercase',
    'tw-text-common-white',
    'tw-leading-none',
    'tw-text-xs',
    'tw-px-4',
    'tw-py-3',
    'tw-pt-3.5',
    'tw-leading-none',
    'tw-bg-gray-900 hover:tw-brightness-125',
    'tw-rounded-full',
    'tw-border',
    'tw-border-common-transparent',
  ],
  {
    variants: {
      active: {
        true: 'tw-border-purple-500',
      },
    },
  }
);

export const SwitcherButtons: FC<SwitcherButtonsProps> = ({ switcherCards, activeIndex, setActive, className }) => {
  return (
    <div className={cssMerge('tw-flex tw-gap-2', className)}>
      {switcherCards.map((card, i) => {
        if (!card.category) return null;

        return (
          <button
            key={i}
            className={cssMerge(buttonStyles({ active: i === activeIndex }))}
            onClick={() => setActive(i)}
          >
            {card.category}
          </button>
        );
      })}
    </div>
  );
};
