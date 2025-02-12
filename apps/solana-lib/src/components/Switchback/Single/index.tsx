import React, { ElementType, FC } from 'react';
import Image from 'next/image';
import { VariantProps, cva } from 'class-variance-authority';
import { Button, ButtonProps } from '../../../molecules/Button';
import { Section } from '../../../molecules/Section';
import { ImageProps } from '../../../types';
import { HtmlParser } from '../../RichTextComponents/HtmlParser';

import { NewsletterSignUp } from '../../Newsletter'
import type { NewsletterSignUpProps } from '../../Newsletter'

export interface SwitchbackProps extends NewsletterSignUpProps, VariantProps<typeof wrapper> {
  assetSide?: 'left' | 'right';
  eyebrow?: string;
  headline?: string;
  headingAs?: ElementType;
  body?: string;
  buttons?: ButtonProps[];
  image?: ImageProps;
  hideBackground?: boolean;
}

const wrapper = cva(['tw-flex', 'tw-flex-col', 'tw-gap-8', 'tw-items-center', '', 'lg:tw-justify-between'], {
  variants: {
    assetSide: {
      left: ['lg:tw-flex-row-reverse'],
      right: ['lg:tw-flex-row'],
    },
  },
});
const headlineStyles = cva(['tw-font-medium', 'tw-text-display-sm', 'md:tw-text-display-lg']);
const buttonWrapper = cva(['tw-flex', 'tw-gap-2', 'tw-flex-col', 'sm:tw-flex-row', 'md:tw-w-fit', 'tw-mt-4']);
const content = cva(['tw-flex', 'tw-flex-col', 'tw-gap-4', 'lg:tw-max-w-lg']);
const background = cva([], {
  variants: {
    hideBackground: {
      true: ['tw-bg-transparent'],
      false: ['tw-switchback-gradient'],
    },
  },
});

export const Switchback: FC<SwitchbackProps> = ({
  assetSide = 'right',
  eyebrow,
  headline,
  body,
  buttons,
  headingAs,
  image,
  hideBackground = false,
  newsLetter,
  formId,
  placeholder,
  emailError,
  submitError,
  successMessage,
}) => {
  const H = headingAs || 'h2';

  return (
    <Section wrapperClass={background({ hideBackground })} className={wrapper({ assetSide })}>
      <div className={content()}>
        {eyebrow && <span className="tw-eyebrow">{eyebrow}</span>}
        {headline && <H className={headlineStyles()}>{headline}</H>}
        {body && <HtmlParser classes="tw-text-body" rawHtml={body} />}
        {newsLetter && formId && (
          <NewsletterSignUp
            formId={formId}
            placeholder={placeholder}
            emailError={emailError}
            submitError={submitError}
            successMessage={successMessage}
          />
        )}
        {buttons && (
          <div className={buttonWrapper()}>
            {buttons.map((button, index) => (
              <Button key={index} {...button} className="tw-w-full sm:tw-w-fit" />
            ))}
          </div>
        )}
      </div>
      {image && image.src && <Image src={image.src} width={600} height={600} alt={image.alt || ''} />}
    </Section>
  );
};
