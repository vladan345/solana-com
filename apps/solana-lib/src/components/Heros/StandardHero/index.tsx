import React, { ElementType, FC } from 'react';
import Image from 'next/image';
import { Button, ButtonProps } from '../../../molecules/Button';
import { Section } from '../../../molecules/Section';
import { ImageProps } from '../../../types';
import { Breadcrumbs, BreadcrumbsProps } from '../../../molecules/Breadcrumbs';
import { background, wrapper, content, headlineStyles, section, buttonWrapper, backgroundImage } from './hero.styles';
import { NewsletterSignUp } from '../../Newsletter';
import { HtmlParser } from '../../RichTextComponents/HtmlParser';

import type { NewsletterSignUpProps } from '../../Newsletter';

interface HeroProps extends NewsletterSignUpProps {
  eyebrow?: string;
  headline?: string;
  headingAs?: ElementType;
  body?: string;
  buttons?: ButtonProps[];
  image?: ImageProps;
  breadCrumbs?: BreadcrumbsProps['breadcrumbs'];
  centered?: boolean;
  rightImage?: ImageProps;
  leftImage?: ImageProps;
  headingSize?: 'sm' | 'lg';
}

export const Hero: FC<HeroProps> = ({
  eyebrow,
  headline,
  body,
  buttons,
  headingAs,
  newsLetter,
  breadCrumbs,
  image,
  placeholder,
  rightImage,
  leftImage,
  formId,
  emailError,
  submitError,
  successMessage,
  centered = true,
  headingSize = 'lg',
}) => {
  const H = headingAs || 'h2';
  const hasCrumbs = breadCrumbs && breadCrumbs.length > 0;

  return (
    <>
      <Section wrapperClass={background({ centered })} className={section({ centered, hasCrumbs })}>
        {hasCrumbs && <Breadcrumbs breadcrumbs={breadCrumbs} className="tw-mb-8" />}
        <div className={wrapper()}>
          <div className={content({ centered })}>
            <div className="tw-grid tw-gap-6">
              {eyebrow && <span className="tw-eyebrow">{eyebrow}</span>}
              {headline && <H className={headlineStyles({ centered, headingSize })}>{headline}</H>}
              {body && (
                <HtmlParser
                  classes={`tw-text-body tw-text-lg md:tw-text-xl tw-text-balance tw-w-full lg:tw-w-3/4 ${centered ? 'lg:tw-mx-auto' : null} tw-block`}
                  rawHtml={body}
                />
              )}
            </div>
            {newsLetter && formId && (
              <NewsletterSignUp
                formId={formId}
                placeholder={placeholder}
                emailError={emailError}
                submitError={submitError}
                successMessage={successMessage}
              />
            )}
            {buttons && buttons.length > 0 && (
              <div className={buttonWrapper({ centered })}>
                {buttons.map((button, index) => (
                  <Button key={index} {...button} className="tw-w-full sm:tw-w-fit" />
                ))}
              </div>
            )}
          </div>
          {!centered && image && image.src && (
            <Image
              src={image.src}
              width={705}
              height={705}
              alt={image.alt || ''}
              className="tw-absolute -tw-right-24 tw-hidden xl:tw-block"
              priority
            />
          )}
        </div>
        {centered && leftImage && leftImage.src && (
          <Image
            src={leftImage.src}
            width={1200}
            height={1200}
            alt={leftImage.alt || ''}
            className={backgroundImage({ side: 'left' })}
            priority
          />
        )}
        {centered && rightImage && rightImage.src && (
          <Image
            src={rightImage.src}
            width={1600}
            height={1600}
            alt={rightImage.alt || ''}
            className={backgroundImage({ side: 'right' })}
            priority
          />
        )}
      </Section>
    </>
  );
};
