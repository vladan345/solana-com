import React, { ElementType, FC, useEffect, useState } from 'react';
import Image from 'next/image';
import background from '../../../assets/images/detail-hero-background.webp';
import { Button } from '../../../molecules/Button';
import { Section } from '../../../molecules/Section';
import { PersonProps } from '../../../types';
import { Breadcrumbs, BreadcrumbsProps } from '../../../molecules/Breadcrumbs';
import { section, headlineStyles, content, imageStyles, titleStyles } from './listingHero.styles';

interface ListingHeroProps {
  headingAs?: ElementType;
  headline?: string;
  subHead?: string;
  breadCrumbs?: BreadcrumbsProps['breadcrumbs'];
  ctaText?: string;
  image?: string;
  intro?: string;
  publishedDate?: string;
  author?: PersonProps;
  slug?: string;
  title?: string;
}

export const ListingHero: FC<ListingHeroProps> = ({
  ctaText,
  headingAs = 'h1',
  breadCrumbs,
  image,
  publishedDate,
  intro,
  subHead,
  slug,
  headline,
  title,
}) => {
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

  const H = headingAs;
  const hasCrumbs = breadCrumbs && breadCrumbs.length > 0;

  return (
    <Section className={section({ hasCrumbs })}>
      <Image src={background} fill alt="" className="tw-object-cover -tw-z-10" />
      {hasCrumbs && <Breadcrumbs breadcrumbs={breadCrumbs} />}
      <div className="tw-text-center ">
        {headline && <H className={headlineStyles()}>{headline}</H>}
        {subHead && <p className="tw-text-gray-300 tw-text-xl md:tw-text-display-xs">{subHead}</p>}
      </div>
      <div className="tw-listing-hero__card">
        {image && <Image src={image} width={490} height={275} alt={title || ''} className={imageStyles()} priority />}
        <div className={content()}>
          {date && <span className="tw-font-bold tw-text-sm tw-font-mono tw-uppercase">{date}</span>}
          <div className="tw-grid tw-gap-6">{title && <H className={titleStyles()}>{title}</H>}</div>
          {intro && <p className="tw-text-gray-300 tw-text-lg md:tw-text-xl">{intro}</p>}
          <Button hierarchy="outline" size="lg" label={ctaText} url={slug} endIcon="arrow-up-right" />
        </div>
      </div>
    </Section>
  );
};
