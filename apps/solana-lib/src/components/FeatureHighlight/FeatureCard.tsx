import React, { ComponentPropsWithoutRef, FC } from 'react';
import Image from 'next/image';
import { VariantProps, cva } from 'class-variance-authority';
import { StatCard } from '../Stats/StatCard';
import { Button, ButtonProps } from '../../molecules/Button';
import { ImageProps } from '../../types';
import { cssMerge } from '../../utils/cssMerge';
import statsValueRenderer from '../../utils/statsValueRenderer';


export interface FeatureCardProps extends VariantProps<typeof wrapper>, ComponentPropsWithoutRef<'div'> {
  variant?: 'logo';
  color?: 'aqua' | 'orange' | 'purple' | 'green';
  feature?: string;
  body?: string;
  stat?: StatCard;
  button?: ButtonProps;
  eyebrow?: string;
  logo?: ImageProps;
}

const wrapper = cva(['tw-glass-card', 'tw-grid', 'tw-gap-2'], {
  variants: {
    variant: {
      logo: ['tw-gap-4'],
    },
  },
});
const featureStyles = cva(['tw-text-display-xs tw-pl-3 tw-border-l-2'], {
  variants: {
    color: {
      aqua: ['tw-border-aqua-400'],
      orange: ['tw-border-orange-400'],
      purple: ['tw-border-purple-500'],
      green: ['tw-border-green-300'],
    },
  },
});
export const statDot = cva(['tw-w-[5px]', 'tw-h-[5px]', 'tw-rounded-full', 'tw-mt-2'], {
  variants: {
    color: {
      aqua: ['tw-bg-aqua-400'],
      orange: ['tw-bg-orange-400'],
      purple: ['tw-bg-purple-500'],
      green: ['tw-bg-green-300'],
    },
  },
});

export const FeatureCard: FC<FeatureCardProps> = ({ variant, feature, color, body, stat, eyebrow, logo, button }) => {
  const isLogo = variant === 'logo';

  // prepeend the feature to the button label for better accessibility and SEO
  if (button && (feature || eyebrow || body)) {
    button.children = <><span className='tw-sr-only'>{feature || eyebrow || body} - </span>{button.label}</>;
  }

  return (
    <div className={cssMerge(wrapper({ variant }))}>
      {eyebrow && <p className="tw-eyebrow">{eyebrow}</p>}
      {!isLogo && feature && <h3 className={cssMerge(featureStyles({ color }))}>{feature}</h3>}
      {isLogo && logo && <Image src={logo.src} alt={logo.alt || ''} height={48} width={100} className="tw-w-auto" />}
      {body && <p className="tw-text-gray-300 tw-mb-2 lg:tw-mb-6 tw-text-base lg:tw-text-lg tw-text-pretty">{body}</p>}
      {stat && stat.value && stat.value.statType !== 'none' && (
        <div className="tw-grid tw-gap-3">
          <div className="tw-flex tw-flex-row tw-items-start tw-gap-1">
            {stat && stat.value && stat.value.statType === 'dynamic' && (
              <div className={cssMerge(statDot({ color }))} />
            )}
            <span className="tw-text-display-sm tw-font-light">
              {statsValueRenderer(stat)}
            </span>
          </div>
          <div className="tw-font-mono tw-text-gray-300 tw-font-light tw-uppercase tw-text-xs tw-tracking-wide">
            {stat.description}
          </div>
        </div>
      )}
      {button && button.label && <Button {...button} className="tw-w-fit" />}
    </div>
  );
};
