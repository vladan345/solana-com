import React, { FC } from 'react';
import { cva } from 'class-variance-authority';
import { Button } from '../../../molecules/Button';
import { ConversionPanelProps } from '../index';
import { cssMerge } from '../../../utils/cssMerge';

const wrapperStyles = cva(['tw-relative', 'tw-container', 'tw-p-0', 'lg:tw-px-8', 'tw-m-auto']);
const containerStyles = cva([
  'tw-relative',
  'tw-flex',
  'tw-flex-col',
  'md:tw-grid',
  'tw-inline-centered-grid',
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
const leftColumnStyles = cva(['tw-flex', 'tw-flex-col', 'tw-gap-4', 'lg:tw-gap-10']);
const rightColumnStyles = cva(['tw-flex', 'tw-flex-col', 'tw-gap-4']);
const textStyles = cva([
  'tw-w-full',
  'tw-flex',
  'tw-flex-col',
  'md:tw-flex-row',
  'tw-justify-between',
  'tw-content-start',
  'tw-gap-4',
  'md:tw-gap-5',
  'tw-text-center',
  'md:tw-text-left',
]);
const headingStyles = cva([
  'tw-text-display-sm',
  'md:tw-text-display-md',
  'lg:tw-text-display-lg',
  'tw-pb-5',
  'tw-border-b',
  'tw-border-gray-500',
  'tw-border-solid',
  'tw-text-center',
  'md:tw-text-left',
]);
const bodyStyles = cva(['tw-text-lg', 'md:tw-text-display-xs']);
const buttonStyles = cva(['lg:tw-max-w-fit']);
const gradientContainer = cva(['tw-absolute',
  'tw-w-[calc(100%+1rem)]',
  'lg:tw-w-full',
  'tw-top-full',
  'tw-left-2/4',
  'tw-right-0',
  'tw-z-0',
  '-tw-translate-x-1/2',
  'lg:tw-px-4',
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

export const InlineCentered: FC<ConversionPanelProps> = ({
  body,
  buttons,
  heading,
  listItems
}) => (
  <div className={cssMerge(wrapperStyles())}>
    <div className={cssMerge(containerStyles())}>
      <div className={cssMerge(leftColumnStyles())}>
        {heading && <h2 className={cssMerge(headingStyles())}>{heading}</h2>}
        <div className={cssMerge(textStyles())}>
          {body && <p className={cssMerge(bodyStyles())}>{body}</p>}

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
      {listItems && listItems.length > 0 && (
        <div className={cssMerge(rightColumnStyles())}>
          {listItems.map(item => {
            if (!item) {
              return;
            }
            return <Button key={item.url} {...item} className="tw-gap-2 tw-w-fit" iconClassName="tw-fill-green-700" />;
          })}
        </div>
      )}
    </div>
    <div className={cssMerge(gradientContainer())}>
      <div className={cssMerge(gradientStyles())} />
    </div>
  </div>
);
