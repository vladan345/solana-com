import React, { ComponentPropsWithoutRef, FC } from 'react';
import { cva } from 'class-variance-authority';
import { Button, ButtonProps } from '../../molecules/Button';
import { cssMerge } from '../../utils/cssMerge';

export interface CallToActionProps extends ComponentPropsWithoutRef<'div'> {
  eyebrow?: string;
  headline?: string;
  description?: string;
  button: ButtonProps;
}

const wrapper = cva([
  'tw-hidden lg:tw-grid',
  'tw-bg-gradient-black',
  'tw-border',
  'tw-border-common-white/5',
  'tw-rounded-xl',
  'tw-p-6',
  'tw-gap-3',
]);

export const CallToAction: FC<CallToActionProps> = ({ eyebrow, headline, description, button, className }) => {
  return (
    <div className={cssMerge(wrapper({ className }))}>
      {eyebrow && <span className="tw-font-medium tw-font-mono tw-text-gray-400 tw-uppercase">{eyebrow}</span>}
      {headline && <h4 className="tw-text-display-sm tw-font-bold">{headline}</h4>}
      {description && <p className="tw-text-lg tw-text-gray-300">{description}</p>}
      {button && <Button size="sm" {...button} className="tw-w-full tw-mt-3" />}
    </div>
  );
};
