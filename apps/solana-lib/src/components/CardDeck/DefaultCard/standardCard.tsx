import { cssMerge } from '../../../utils/cssMerge';
import cardWrapper, {
  bodyStyles,
  eyebrowStyles,
  headingStyles,
  imageOverlay,
  imageWrapper,
  borderStyles,
} from './defaultCard.styles';
import Image from 'next/image';
import { Button } from '../../../molecules/Button';
import Link from '../../../molecules/Link';
import React, { useEffect, useState } from 'react';
import { DefaultCard, FeatureVariants } from './defaultCard';

export const StandardCard = ({
  type,
  eyebrow,
  publishedDate,
  heading,
  headingAs,
  body,
  callToAction,
  backgroundGradient,
  backgroundImage,
  mobileBackgroundImage,
  isFeatured,
  hiddenOnDesktop,
  ...props
}: DefaultCard) => {
  const [date, setDate] = useState('');

  useEffect(() => {
    if (!publishedDate) {
      return;
    }
    const formatDate = new Date(publishedDate).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    setDate(formatDate);
  });

  const H = headingAs || 'h2';
  const { url: callToActionUrlValue = '' } = { ...callToAction };

  const featured = (type + (isFeatured ? 'Featured' : 'Standard')) as FeatureVariants;
  if (!mobileBackgroundImage) {
    mobileBackgroundImage = backgroundImage;
  }

  return (
    <Link
      href={callToActionUrlValue}
      className={cssMerge(cardWrapper({ type, backgroundGradient, featured, hiddenOnDesktop }))}
      {...props}
    >
      {(backgroundImage || mobileBackgroundImage) && (
        <div className={cssMerge(imageWrapper({ type }))}>
          {type === 'image' && <div className={cssMerge(imageOverlay())}></div>}
          {backgroundImage && (
            <Image
              src={backgroundImage.src}
              alt=""
              fill
              className="-tw-z-20 tw-object-cover tw-rounded-2xl tw-hidden md:tw-block"
            />
          )}
          {mobileBackgroundImage && (
            <Image
              src={mobileBackgroundImage.src}
              alt=""
              fill
              className="-tw-z-20 tw-object-cover tw-rounded-2xl md:tw-hidden"
            />
          )}
        </div>
      )}
      {(eyebrow || date) && <span className={cssMerge(eyebrowStyles({ type }))}>{eyebrow || date}</span>}
      {heading && <H className={cssMerge(headingStyles({ type, featured }))}>{heading}</H>}
      {body && <p className={cssMerge(bodyStyles({ type }))}>{body}</p>}
      {callToAction && <Button {...callToAction} url="" componentAs={'div'} />}
      <div className={cssMerge(borderStyles({ type, backgroundGradient }))}></div>
    </Link>
  );
};
