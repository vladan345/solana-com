import React, { ElementType, FC } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { Button, ButtonProps } from '../../molecules/Button';
import { cssMerge } from '../../utils/cssMerge';
import { Section } from '../../molecules/Section';

const wrapper = cva(['tw-flex tw-flex-col tw-gap-4', 'tw-relative'], {
  variants: {
    variant: {
      floatingButton: ['md:tw-flex-row', 'md:tw-justify-between'],
      centered: ['tw-text-center'],
    },
    paddingBottom: {
      none: ['tw-pb-0', 'sm:tw-pb-0', 'lg:tw-pb-0'],
      sm: ['tw-pb-8', 'sm:tw-pb-12', 'lg:tw-pb-16'],
      md: ['tw-pb-12', 'sm:tw-pb-16', 'lg:tw-pb-20'],
      lg: ['tw-pb-16', 'sm:tw-pb-20', 'lg:tw-pb-24'],
    },
  },
});
const headlineStyles = cva(
  ['tw-font-medium', 'tw-text-display-lg', 'md:tw-text-display-xl', 'lg:tw-text-display-2xl'],
  {
    variants: {
      variant: {
        floatingButton: ['tw-text-display-sm', 'md:tw-text-display-lg'],
        centered: ['tw-text-display-sm', 'md:tw-text-display-lg'],
      },
    },
  }
);
const buttonWrapper = cva(['tw-flex tw-gap-2 tw-flex-col sm:tw-flex-row', 'tw-w-fit'], {
  variants: {
    variant: {
      floatingButton: ['tw-w-fit', 'md:tw-self-start'],
      centered: ['tw-w-full tw-justify-center'],
    },
  },
});
const content = cva(['tw-flex', 'tw-flex-col', 'tw-gap-4']);

interface HeadingProps extends VariantProps<typeof wrapper> {
  eyebrow?: string;
  headline?: string;
  headingAs?: ElementType;
  body?: string;
  buttons?: ButtonProps[];
}

export const Heading: FC<HeadingProps> = ({ eyebrow, headline, body, buttons, headingAs, variant, paddingBottom }) => {
  const H = headingAs || 'h2';

  return (
    <Section className={cssMerge(wrapper({ variant, paddingBottom }))}>
      <div className={cssMerge(content())}>
        {eyebrow && <span className="tw-eyebrow">{eyebrow}</span>}
        {headline && <H className={cssMerge(headlineStyles({ variant }))}>{headline}</H>}
        {body && <p className="tw-text-body">{body}</p>}
      </div>
      {buttons && (
        <div className={cssMerge(buttonWrapper({ variant }))}>
          {buttons.map((button, index) => (
            <Button key={index} {...button} className="tw-w-full sm:tw-w-fit" />
          ))}
        </div>
      )}
    </Section>
  );
};
