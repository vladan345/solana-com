import React, { ElementType, FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { cva } from 'class-variance-authority';
import background from '../../../assets/images/detail-hero-background.webp';
import { Button, ButtonProps } from '../../../molecules/Button';
import { Section } from '../../../molecules/Section';
import { PersonProps } from '../../../types';
import { Breadcrumbs, BreadcrumbsProps } from '../../../molecules/Breadcrumbs';
import { SocialShareButtons } from '../../../molecules/Socials/SocialShareButtons';
import Link from '../../../molecules/Link';

interface DetailsHeroProps {
  headingAs?: ElementType;
  buttons?: ButtonProps[];
  image?: string;
  breadCrumbs?: BreadcrumbsProps['breadcrumbs'];
  eyebrow?: string;
  publishedDate?: string;
  author?: PersonProps;
  shareIcons?: boolean;
  slug?: string;
  title?: string;
  titleAsLink?: boolean;
}

export const section = cva(['tw-grid', 'tw-gap-8', 'md:tw-gap-12'], {
  variants: {
    hasCrumbs: {
      true: ['tw-pt-4', 'md:tw-pt-4', 'sm:tw-pt-4', 'lg:tw-pt-4'],
    },
  },
});
export const wrapper = cva(['tw-grid', 'tw-gap-8', 'lg:tw-grid-cols-12']);
export const headlineStyles = cva([
  'tw-font-medium tw-text-display-sm',
  'md:tw-text-display-md',
  'lg:tw-text-display-lg',
  'dark:tw-text-gray-100',
  'tw-text-gray-900',
]);
export const buttonWrapper = cva(['tw-w-full', 'tw-flex', 'tw-gap-2', 'tw-flex-col', 'sm:tw-flex-row', 'md:tw-w-fit']);
export const content = cva(['tw-flex', 'tw-flex-col', 'tw-gap-4', 'lg:tw-col-span-7']);
export const imageStyles = cva(['tw-w-full', 'tw-rounded-xl', 'lg:tw-col-span-5']);

export const DetailsHero: FC<DetailsHeroProps> = ({
  buttons,
  headingAs = 'h1',
  breadCrumbs,
  eyebrow,
  image,
  publishedDate,
  author,
  shareIcons = true,
  slug,
  title,
  titleAsLink,
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
  const comma = date && author ? ', ' : '';

  let authorName = '';
  if (author) {
    if (author.name) {
      //the way it's passed from the .com app
      authorName = `by ${author.name}`;
    } else if (author.value && author.value.data && author.value.data.name) {
      //the way it's passed from Builder.io
      authorName = `by ${author.value.data.name}`;
    }
  }

  return (
    <Section className={section({ hasCrumbs })}>
      <Image src={background} fill alt="" className="tw-object-cover -tw-z-10" />
      {hasCrumbs && <Breadcrumbs breadcrumbs={breadCrumbs} />}
      <div className={wrapper()}>
        <div className={content()}>
          <div className="tw-grid tw-gap-6">
            {eyebrow && <span className="tw-eyebrow">{eyebrow}</span>}
            {title && titleAsLink ? (
              <Link href={slug || ''} className="tw-text-common-white">
                <H className={headlineStyles()}>{title}</H>
              </Link>
            ) : title ? (
              <H className={headlineStyles()}>{title}</H>
            ) : (
              ''
            )}
          </div>
          {slug && shareIcons && <SocialShareButtons slug={slug} title={title} />}
          {(date || authorName) && (
            <p className="tw-text-gray-800 dark:tw-text-gray-300 tw-font-light">
              {date}
              {comma}
              {authorName}
            </p>
          )}
          {buttons && (
            <div className={buttonWrapper()}>
              {buttons.map((button, index) => (
                <Button key={index} {...button} className="tw-w-full sm:tw-w-fit" />
              ))}
            </div>
          )}
        </div>
        {image && <Image src={image} width={490} height={275} alt={title || ''} className={imageStyles()} priority />}
      </div>
    </Section>
  );
};
