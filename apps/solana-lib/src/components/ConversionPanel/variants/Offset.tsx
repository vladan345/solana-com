import React, { FC } from 'react';
import { cva } from 'class-variance-authority';
import Image from 'next/image';
import { Button } from '../../../molecules/Button';
import { ConversionPanelProps } from '../index';
import { cssMerge } from '../../../utils/cssMerge';

const outerWrapperStyles = cva(['tw-w-full', 'tw-h-full', 'tw-flex', 'tw-flex-col', 'tw-p-0', 'lg:tw-px-8']);
const innerWrapperStyles = cva(['tw-relative', 'tw-w-fit', 'tw-grid', 'tw-offset-inner-wrapper']);
const containerStyles = cva([
  'tw-relative',
  'tw-flex',
  'tw-flex-col',
  'md:tw-grid',
  'tw-gap-8',
  'tw-px-4',
  'tw-py-6',
  'md:tw-p-8',
  'tw-rounded-2xl',
  'tw-bg-gray-900',
  'tw-border-b',
  'tw-border-green-300',
  'tw-border-solid',
  'tw-z-10',
]);
const leftColumnStyles = cva(['tw-flex', 'tw-flex-col', 'tw-gap-6', 'lg:tw-gap-5']);
const textStyles = cva(['tw-w-full', 'tw-flex', 'tw-flex-col', 'tw-gap-4']);
const headingStyles = cva(['tw-text-display-sm', 'md:tw-text-display-md', 'lg:tw-text-display-lg']);
const bodyStyles = cva(['tw-text-xl']);
const buttonStyles = cva(['lg:tw-max-w-fit']);
const gradientContainer = cva(['tw-absolute',
  'tw-w-[calc(100%+1rem)]',
  'tw-top-full',
  'tw-left-2/4',
  'tw-right-0',
  'tw-z-0',
  '-tw-translate-x-1/2',
  '-tw-mt-6',
  'lg:-tw-mt-7',
])
const gradientStyles = cva([
  'tw-w-full',
  'tw-h-8',
  'tw-h-[70px]',
  'lg:tw-h-[85px]',
  'tw-conversion-panel-underlay-gradient',
]);
const imageStyles = cva([
  'lg:tw-absolute',
  'tw-top-0',
  'tw-right-0',
  'tw-w-full',
  'tw-flex',
  'tw-items-center',
  'tw-justify-center',
  'tw-offset-image',
  '-tw-z-10',
]);

export const Offset: FC<ConversionPanelProps> = ({ body, buttons, heading, desktopImage, mobileImage }) => (
  <div className={cssMerge(outerWrapperStyles())}>
    <div className={cssMerge(innerWrapperStyles())}>
      <div className={cssMerge(containerStyles())}>
        <div className={cssMerge(leftColumnStyles())}>
          <div className={cssMerge(textStyles())}>
            {heading && <h2 className={cssMerge(headingStyles())}>{heading}</h2>}
            {body && <p className={cssMerge(bodyStyles())}>{body}</p>}
          </div>
          {buttons && (
            <div className={cssMerge(buttonStyles())}>
              {buttons.map(button => {
                if (!button) {
                  return;
                }

                return <Button key={button.url} {...button} className="sm:tw-w-full" />;
              })}
            </div>
          )}
        </div>
      </div>
      <div className={cssMerge(gradientContainer())}>
        <div className={cssMerge(gradientStyles())} />
      </div>
    </div>
    <div className={cssMerge(imageStyles())}>
      {mobileImage && (
        <Image
          src={mobileImage.src}
          alt={mobileImage.alt || ''}
          width={400}
          height={300}
          className="-tw-z-10 lg:tw-hidden"
        />
      )}
      {desktopImage && (
        <Image
          src={desktopImage.src}
          alt={desktopImage.alt || ''}
          width={800}
          height={600}
          className="-tw-z-10 tw-hidden lg:tw-flex"
        />
      )}
    </div>
  </div>
);

export default Offset;
