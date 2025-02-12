import React, { FC } from 'react';
import { cva } from 'class-variance-authority';
import { cssMerge } from '../../utils/cssMerge';
import { ImageProps } from '../../types';
import { ButtonProps } from '../../molecules/Button';
import { Section } from '../../molecules/Section';
import { Centered } from './variants/Centered';
import { InlineCentered } from './variants/Inline-Centered';
import { Offset } from './variants/Offset';

import type { NewsletterSignUpProps } from '../Newsletter'

export interface ConversionPanelProps extends NewsletterSignUpProps {
  variant?: 'centered' | 'inline-centered' | 'offset';
  mobileBackground?: ImageProps;
  desktopBackground?: ImageProps;
  heading?: string;
  body?: string;
  buttons?: ButtonProps[];
  mobileImage?: ImageProps;
  desktopImage?: ImageProps;
  showLogos?: boolean;
  logos?: ImageProps[];
  listItems?: ButtonProps[];
}

const ComponentMap = {
  centered: Centered,
  'inline-centered': InlineCentered,
  offset: Offset,
};

const sectionStyles = cva([], {
  variants: {
    component: {
      centered: ['tw-py-16', 'lg:tw-py-24', 'md:tw-py-18', 'lg:tw-px-0', 'md:tw-px-8', 'tw-px-4'],
      'inline-centered': ['tw-py-16', 'lg:tw-py-24', 'md:tw-py-18', 'lg:tw-px-0', 'md:tw-px-8', 'tw-px-4'],
      offset: ['tw-relative', 'lg:tw-py-18', 'md:tw-py-16', 'tw-py-16', 'lg:tw-px-0', 'md:tw-px-8', 'tw-px-4'],
    },
  },
});

export const ConversionPanel: FC<ConversionPanelProps> = ({ variant = 'centered', ...props }) => {
  const Component = ComponentMap[variant];

  return (
    <Section className={cssMerge(sectionStyles({ component: variant }))}>
      <Component {...props} />
    </Section>
  );
};
