import { VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ElementType, FC } from 'react';
import { ButtonProps } from '../../../molecules/Button';
import cardWrapper from './defaultCard.styles';

import { ImageProps } from 'types';
import { StandardCard } from './standardCard';
import { HeadingRowCard } from './headingRowCard';

export type CardType = 'standard' | 'gradient' | 'image' | 'cta' | 'blog' | 'tall';
export type GradientType = 'none' | 'pink' | 'purple' | 'blue' | 'green';
export type FeatureVariants = 'imageFeatured' | 'imageStandard';

export interface DefaultCard {
  type?: CardType;
  eyebrow?: string;
  publishedDate?: string;
  heading?: string;
  headingAs?: ElementType;
  body?: string;
  callToAction?: ButtonProps;
  backgroundGradient?: GradientType;
  backgroundImage?: ImageProps;
  mobileBackgroundImage?: ImageProps;
  isFeatured?: boolean;
  hiddenOnDesktop?: boolean;
}

export const DefaultCard: FC<DefaultCard &
  VariantProps<typeof cardWrapper> &
  ComponentPropsWithoutRef<'div'>> = card => {
    const { type, isFeatured } = card;
    switch (type) {
      case 'standard':
        return StandardCard(card);
      case 'gradient':
        return StandardCard(card);
      case 'image':
        return isFeatured ? StandardCard(card) : HeadingRowCard(card);
      case 'cta':
        return HeadingRowCard(card);
      case 'blog':
        return StandardCard(card);
      case 'tall':
        return HeadingRowCard(card);
      default:
        return StandardCard(card);
    }
  };
