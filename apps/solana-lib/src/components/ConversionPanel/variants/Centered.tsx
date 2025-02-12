import React, { FC } from 'react';
import { cva } from 'class-variance-authority';
import Image from 'next/image';
import { Button } from '../../../molecules/Button';
import { ConversionPanelProps } from '../index';
import { cssMerge } from '../../../utils/cssMerge';
import { NewsletterSignUp } from '../../Newsletter';

const wrapperStyles = cva(['tw-container', 'tw-p-0', 'md:tw-px-8', 'tw-m-auto']);
const containerStyles = cva(
  ['tw-flex', 'tw-flex-col', 'tw-gap-8', 'md:tw-gap-10', 'tw-p-0', 'md:tw-p-18', 'tw-rounded-2xl'],
  {
    variants: {
      background: {
        gradient: ['md:tw-conversion-panel-gradient'],
        color: ['tw-bg-common-transparent md:tw-bg-gray-900'],
      },
    },
  }
);

const headerStyles = cva(['tw-flex', 'tw-flex-col', 'tw-gap-10', 'tw-m-auto', 'tw-max-w-[800px]']);
const logoStyles = cva(['tw-hidden', 'md:tw-flex', 'tw-max-w-fit', 'tw-gap-12', 'tw-m-auto']);
const textStyles = cva([
  'tw-w-full',
  'tw-flex',
  'tw-flex-col',
  'tw-justify-center',
  'tw-content-center',
  'tw-gap-4',
  'md:tw-gap-5',
  'tw-text-center',
]);
const headingStyles = cva(['tw-text-display-sm', 'md:tw-text-display-md', 'lg:tw-text-display-lg', 'tw-text-balance']);
const bodyStyles = cva(['tw-text-lg', 'lg:tw-text-xl', 'tw-text-gray-300', 'tw-text-balance']);
const contentStyles = cva([
  'md:tw-max-w-fit',
  'tw-flex',
  'tw-flex-wrap',
  'tw-content-center',
  'tw-justify-center',
  'tw-gap-2',
  'sm:tw-m-auto',
]);
const newsletterStyles = cva([
  'md:tw-max-w-fit',
  'tw-grid',
  'tw-grid-cols-1',
  'tw-content-center',
  'tw-justify-center',
  'tw-gap-2',
  'sm:tw-m-auto',
]);

export const Centered: FC<ConversionPanelProps> = ({
  body,
  buttons,
  desktopBackground,
  heading,
  showLogos,
  logos,
  mobileBackground,
  newsLetter,
  formId,
  placeholder,
  emailError,
  submitError,
  successMessage,
}) => {
  const hasBackgroundImage = (mobileBackground && mobileBackground.src) || (desktopBackground && desktopBackground.src);

  return (
    <>
      <div className={cssMerge(wrapperStyles())}>
        <div className={cssMerge(containerStyles({ background: hasBackgroundImage ? 'gradient' : 'color' }))}>
          <div className={cssMerge(headerStyles())}>
            {showLogos && logos && logos.length > 0 && (
              <div className={cssMerge(logoStyles())}>
                {logos.map((logo, index) => (
                  <>
                    {logo.src &&
                      <Image key={index} src={logo.src} width={100} height={24} alt={logo.alt || ''} className="tw-w-auto tw-h-6" />
                    }
                  </>
                ))}
              </div>
            )}
            {(heading || body) && (
              <div className={cssMerge(textStyles())}>
                {heading && <h2 className={cssMerge(headingStyles())}>{heading}</h2>}
                {body && <p className={cssMerge(bodyStyles())}>{body}</p>}
              </div>
            )}
          </div>
          {newsLetter && formId && (
            <NewsletterSignUp
              formId={formId}
              placeholder={placeholder}
              emailError={emailError}
              submitError={submitError}
              successMessage={successMessage}
              className={cssMerge(newsletterStyles())}
            />
          )}
          {buttons && (
            <div className={cssMerge(contentStyles())}>
              {buttons.map((button, index) => (
                <Button key={index} {...button} />
              ))}
            </div>
          )}
        </div>
      </div>
      {mobileBackground && <Image src={mobileBackground.src} alt="" fill className="-tw-z-10 md:tw-hidden tw-pointer-events-none tw-object-cover tw-object-top" />}
      {desktopBackground && (
        <Image src={desktopBackground.src} alt="" fill className="-tw-z-10 tw-hidden md:tw-block tw-pointer-events-none tw-object-cover tw-object-top" style={{ objectFit: "cover" }} />
      )}
    </>
  );
};
