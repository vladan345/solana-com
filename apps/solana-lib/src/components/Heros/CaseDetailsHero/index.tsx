import React, { ElementType, FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { cva } from 'class-variance-authority';
import background from '../../../assets/images/detail-hero-background.webp';
import { Section } from '../../../molecules/Section';
import { PersonProps } from '../../../types';
import { Breadcrumbs, BreadcrumbsProps } from '../../../molecules/Breadcrumbs';

type sidebarItem = { title?: string; value?: string };

interface CaseDetailsHeroProps {
  headingAs?: ElementType;
  image?: string;
  breadCrumbs?: BreadcrumbsProps['breadcrumbs'];
  author?: PersonProps;
  title?: string;
  sideBar?: {
    sidebarLogo?: string;
    sideBarItems?: sidebarItem[];
  };
}

export const section = cva(['tw-grid', 'tw-gap-8', 'tw-pb-0', 'sm:tw-pb-0', 'lg:tw-gap-12', 'lg:tw-pb-0'], {
  variants: {
    hasCrumbs: {
      true: ['tw-pt-4', 'md:tw-pt-4', 'sm:tw-pt-4', 'lg:tw-pt-4'],
    },
  },
});

export const wrapper = cva(['tw-grid', 'tw-gap-12']);

export const authorStyles = cva(['tw-font-medium', 'tw-text-lg', 'sm:tw-text-xl']);
export const headlineStyles = cva(['tw-font-medium tw-text-display-sm', 'lg:tw-text-display-lg']);
export const contentWrapper = cva(['tw-flex', 'tw-flex-col-reverse', 'tw-gap-12', 'lg:tw-grid', 'lg:tw-grid-cols-12']);
export const content = cva(['tw-flex', 'tw-flex-col', 'tw-gap-4']);
export const imageStyles = cva(['tw-w-full', 'tw-rounded-md', 'sm:tw-rounded-lg', 'lg:tw-rounded-xl']);
export const sidebarStyles = cva([
  'tw-flex',
  'tw-flex-col',
  'tw-gap-10',
  'lg:tw-col-span-3',
  'lg:tw-self-start',
  'lg:tw-max-w-[204px]',
]);
export const sidebarItemStyles = cva(['tw-grid', 'tw-gap-[10px]'], {
  variants: {
    isLast: {
      true: [],
      false: ['tw-pb-6', 'tw-border-b', 'tw-border-b-gray-600'],
    },
  },
});

export const CaseDetailsHero: FC<CaseDetailsHeroProps> = ({
  headingAs = 'h1',
  breadCrumbs,
  image,
  author,
  sideBar,
  title,
}) => {
  const H = headingAs;
  const hasCrumbs = breadCrumbs && breadCrumbs.length > 0;
  const authorName = author && author.name && author.name;

  return (
    <Section className={section({ hasCrumbs })}>
      <Image src={background} fill alt="" className="tw-object-cover -tw-z-10" />
      <div className="tw-grid tw-gap-16">
        {hasCrumbs && <Breadcrumbs breadcrumbs={breadCrumbs} />}
        <div className={contentWrapper()}>
          {sideBar && sideBar.sideBarItems && sideBar.sideBarItems.length > 0 && (
            <div className={sidebarStyles()}>
              {sideBar.sidebarLogo && (
                <Image
                  src={sideBar.sidebarLogo}
                  width={205}
                  height={205}
                  alt={title || ''}
                  className="tw-w-full tw-hidden lg:tw-block"
                />
              )}
              <div className="tw-grid tw-gap-6">
                {sideBar.sideBarItems.map((sidebarItem, index) => {
                  const isLast = sideBar && sideBar.sideBarItems && sideBar.sideBarItems.length - 1 === index;

                  return (
                    <div key={sidebarItem.title} className={sidebarItemStyles({ isLast })}>
                      {sidebarItem.title && (
                        <span className="tw-eyebrow !tw-text-md !tw-text-gray-400">{sidebarItem.title}</span>
                      )}
                      {sidebarItem.value && <span className="tw-text-xl">{sidebarItem.value}</span>}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          <div className="tw-flex tw-flex-col lg:tw-col-span-9">
            <div className={wrapper()}>
              <div className={content()}>
                <div className="tw-grid tw-gap-6">{title && <H className={headlineStyles()}>{title}</H>}</div>
                {authorName && <p className={authorStyles()}>{authorName}</p>}
              </div>
              {image && (
                <Image src={image} width={900} height={500} alt={title || ''} className={imageStyles()} priority />
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
