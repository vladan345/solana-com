import { cssMerge } from '../../../utils/cssMerge';
import cardWrapper, { bodyStyles, eyebrowStyles, headingRow, headingStyles, imageOverlay } from './defaultCard.styles';
import Image from 'next/image';
import { Button } from '../../../molecules/Button';
import React from 'react';
import { DefaultCard, FeatureVariants } from './defaultCard';

import Link from '../../../molecules/Link';

export const HeadingRowCard = ({
  type,
  eyebrow,
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
        <>
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
          )}{' '}
        </>
      )}
      {eyebrow && <span className={cssMerge(eyebrowStyles({ type }))}>{eyebrow}</span>}
      {(callToAction || heading) && (
        <div className={cssMerge(headingRow({ type }))}>
          {heading && <H className={cssMerge(headingStyles({ type }))}>{heading}</H>}
          {callToAction && <Button {...callToAction} url="" className="tw-h-fit" componentAs={'div'} />}
        </div>
      )}
      {body && <p className={cssMerge(bodyStyles({ type }))}>{body}</p>}
    </Link>
  );
};
