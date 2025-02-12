import React, { ElementType, FC } from 'react';
import Image from 'next/image';
import { VariantProps, cva } from 'class-variance-authority';
import { cssMerge } from '../../utils/cssMerge';
import { Section } from '../../molecules/Section';
import { Button, ButtonProps } from '../../molecules/Button';
import { ImageProps } from '../../types';
import { FeatureCard, FeatureCardProps, statDot } from './FeatureCard';
import { splitAndColorArray } from './utils/splitAndColor';

export interface FeatureHighlightProps extends VariantProps<typeof wrapper> {
  cards: FeatureCardProps[];
  eyebrow?: string;
  headline?: string;
  headingAs?: ElementType;
  buttons?: ButtonProps[];
  body?: string;
  mobileBackground?: ImageProps;
  desktopBackground?: ImageProps;
  dynamicDataFootnote?: string;
}

const wrapper = (includeFirstColumn: boolean) =>
  cva(['tw-grid', includeFirstColumn ? 'lg:tw-grid-cols-12' : '', 'tw-gap-8']);
const headlineStyles = cva(['tw-font-medium', 'tw-text-display-xs', 'md:tw-text-display-md', 'tw-text-pretty']);
const buttonWrapper = cva(['tw-flex tw-gap-2 tw-flex-col sm:tw-flex-row', 'tw-w-fit', 'tw-mt-4']);
const columns = (isSingleItem: boolean, includeFirstColumn: boolean) =>
  cva([
    'tw-grid',
    'tw-gap-4',
    includeFirstColumn == false && isSingleItem ? '' : 'md:tw-grid-cols-2',
    'md:tw-gap-8',
    'md:tw-items-center',
    'lg:tw-col-span-8',
  ]);
const singleColumn = cva(['tw-grid', 'tw-gap-4', 'tw-w-full'], {
  variants: {
    shiftDown: {
      true: ['md:tw-mt-32'],
    },
  },
});

export const FeatureHighlight: FC<FeatureHighlightProps> = ({
  eyebrow,
  headline,
  headingAs,
  body,
  buttons,
  cards,
  mobileBackground,
  desktopBackground,
  dynamicDataFootnote,
}) => {
  const H = headingAs || 'h2';
  const twoArrays = cards ? splitAndColorArray(cards) : [];
  const hasDynamicData: boolean = cards
    ? cards.some(card => card.stat && card.stat.value && card.stat.value.statType === 'dynamic')
    : false;

  let dynamicDataColor: 'aqua' | 'orange' | 'purple' | 'green' | null | undefined = 'aqua'; // Initial value
  if (hasDynamicData) {
    const dynamicCard = cards.find(card => card.stat && card.stat.value && card.stat.value.statType === 'dynamic');

    // If a dynamic card is found, retrieve its color property
    if (dynamicCard && dynamicCard.color) {
      dynamicDataColor = dynamicCard.color;
    }
  }

  const includeFirstColumn = !!(eyebrow || headline || body || (buttons && buttons.length > 0));
  const isSingleItem = cards.length === 1;

  return (
    <Section className={cssMerge(wrapper(includeFirstColumn)())}>
      {includeFirstColumn && (
        <div className="tw-grid tw-gap-3 tw-h-fit lg:tw-col-span-4">
          {eyebrow && <p className="tw-eyebrow">{eyebrow}</p>}
          {headline && <H className={headlineStyles()}>{headline}</H>}
          {body && <p className="tw-text-lg tw-text-gray-300  tw-text-pretty">{body}</p>}
          {buttons && (
            <div className={cssMerge(buttonWrapper())}>
              {buttons.map((button, index) => (
                <Button key={index} {...button} />
              ))}
            </div>
          )}
          {hasDynamicData && dynamicDataFootnote && (
            <div className="tw-flex tw-flex-row tw-items-start tw-gap-1">
              <div className={cssMerge(statDot({ color: dynamicDataColor }), 'tw-mt-0.5 tw-mb-auto')}></div>
              <div className="tw-font-mono tw-text-gray-300 tw-font-light tw-uppercase tw-text-xs tw-tracking-wide">
                {dynamicDataFootnote}
              </div>
            </div>
          )}
        </div>
      )}
      <div className={cssMerge(columns(isSingleItem, includeFirstColumn)())}>
        {twoArrays.map((features, index) => (
          <div key={index} className={cssMerge(singleColumn({ shiftDown: cards.length === 4 && index === 0 }))}>
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        ))}
      </div>
      {mobileBackground && (
        <Image
          src={mobileBackground.src}
          alt=""
          fill
          className="-tw-z-10 md:tw-hidden tw-w-full !tw-h-auto tw-pointer-events-none"
        />
      )}
      {desktopBackground && (
        <Image
          src={desktopBackground.src}
          alt=""
          fill
          className="-tw-z-10 tw-hidden md:tw-block tw-w-full !tw-h-auto tw-pointer-events-none"
        />
      )}
    </Section>
  );
};
