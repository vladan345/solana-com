import React, { ComponentPropsWithoutRef, FC } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cssMerge } from '../../utils/cssMerge';
import { ExplorerAPIEndpoints } from '../../utils/builder/builderApiEndpoints';
import statsValueRenderer from '../../utils/statsValueRenderer';

type ExplorerAPIEndpointValues = typeof ExplorerAPIEndpoints[keyof typeof ExplorerAPIEndpoints];

export interface StatCard {
  stat?: string;
  value?: StatValue;
  description: string;
}

export interface StatValue {
  statType: string;
  staticValue?: string | number;
  dynamicValueSource?: string | null;
  dynamicValueEndpoint?: ExplorerAPIEndpointValues | null;
}

const heading = cva(
  ['tw-text-display-lg', 'md:tw-text-display-2lg', 'tw-font-light', 'tw-bg-clip-text tw-text-common-transparent', 'tw-truncate'],
  {
    variants: {
      contained: {
        true: ['tw-mb-4', 'md:tw-text-display-lg', 'lg:tw-text-display-xl'],
      },
      color: {
        purple: ['tw-bg-gradient-mono-purple'],
        blue: ['tw-bg-gradient-mono-blue'],
        green: ['tw-bg-gradient-mono-green'],
        pink: ['tw-bg-gradient-mono-pink'],
      },
    },
    defaultVariants: {
      color: 'purple',
    },
  }
);
const wrapper = cva([], {
  variants: {
    contained: {
      true: ['tw-px-8 tw-py-12', 'tw-text-center', 'tw-border', 'tw-border-gray-500', 'tw-rounded-2xl'],
    },
  },
});
const descriptionText = cva(['tw-font-mono tw-uppercase tw-text-gray-400'], {
  variants: {
    contained: {
      true: ['tw-text-grayNeutral-100', 'tw-normal-case', 'tw-font-diatype'],
    },
  },
});

export const StatCard: FC<StatCard & VariantProps<typeof heading> & ComponentPropsWithoutRef<'div'>> = ({
  stat,
  value,
  description,
  color,
  contained,
  className,
  ...props
}) => {
  return (
    <div className={cssMerge(wrapper({ contained, className }))} {...props}>
      <h3 className={heading({ color, contained })} title={`${value ? value.staticValue : stat}`}>{value ? statsValueRenderer({ value }) : stat}</h3>
      <p className={cssMerge(descriptionText({ contained }))}>{description}</p>
    </div>
  );
};
