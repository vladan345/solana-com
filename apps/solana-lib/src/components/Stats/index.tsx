import React, { ElementType, FC } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { StatCard } from './StatCard';
import { Button, ButtonProps } from '../../molecules/Button';
import { Section } from '../../molecules/Section';
import { cssMerge } from '../../utils/cssMerge';

interface StatsProps {
  stats: StatCard[];
  contained: boolean;
  eyebrow?: string;
  headline?: string;
  headingAs?: ElementType;
  buttons?: ButtonProps[];
}

const wrapper = cva(['tw-grid', 'tw-gap-9', 'md:tw-gap-14', 'lg:tw-grid-cols-2'], {
  variants: {
    contained: {
      true: ['tw-block'],
    },
  },
});
const statsWrapper = cva(['tw-flex tw-flex-col tw-gap-8 lg:tw-gap-16'], {
  variants: {
    contained: {
      true: ['tw-flex-row', 'tw-gap-4', 'md:tw-gap-8', 'lg:tw-gap-8', 'tw-flex-wrap', 'tw-justify-center'],
    },
  },
});
const stat = cva(['tw-flex-shrink', 'tw-min-w-[295px]'], {
  variants: {
    count: {
      2: ['md:tw-flex-[1_0_50%]'],
      3: ['tw-flex-[1_0_30%]', 'sm:tw-max-w-md'],
      4: ['tw-flex-[1_0_23%]', 'sm:tw-max-w-sm'],
    },
  },
});

export const Stats: FC<StatsProps & VariantProps<typeof wrapper>> = ({
  stats,
  contained,
  headline,
  eyebrow,
  headingAs,
  buttons,
}) => {
  const colors = ['purple', 'blue', 'green', 'pink'] as const;
  const H = headingAs || 'h2';

  return (
    <Section className={cssMerge(wrapper({ contained }))}>
      {!contained && (
        <div className="tw-flex tw-flex-col tw-gap-4 lg:tw-max-w-md">
          {eyebrow && <span className="tw-eyebrow">{eyebrow}</span>}
          {headline && <H className="tw-text-display-xs md:tw-text-display-md tw-text-pretty">{headline}</H>}
          {buttons && (
            <div className="tw-flex tw-gap-2 tw-flex-col sm:tw-flex-row tw-w-fit">
              {buttons.map((button, index) => (
                <Button key={index} {...button} />
              ))}
            </div>
          )}
        </div>
      )}
      <div className={cssMerge(statsWrapper({ contained }))}>
        {colors.map((color, i) => {
          if (!stats || !stats[i]) {
            return null;
          }
          return (
            <StatCard
              key={i}
              color={color}
              contained={contained}
              {...stats[i]}
              className={cssMerge(stat({ count: stats.length as 2 | 3 | 4 }))}
            />
          );
        })}
      </div>
    </Section>
  );
};
