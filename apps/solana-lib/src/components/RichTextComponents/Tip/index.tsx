import React, { FC } from 'react';
import { cva } from 'class-variance-authority';

interface TipProps {
  tip?: string;
  title?: string;
}

const wrapper = cva(['tw-bg-gray-900', 'tw-rounded-lg', 'tw-p-8']);

export const Tip: FC<TipProps> = ({ tip, title, ...props }) => {
  const hasContent = tip || title;
  return hasContent ? (
    <div className={wrapper()} {...props}>
      <div className="tw-border-image-gradient tw-border-l-4 tw-pl-8">
        {title && <h4 className="tw-eyebrow tw-font-medium tw-text-common-white tw-mb-4 tw-text-md">{title}</h4>}
        {tip && <p className="tw-text-xl tw-font-light">{tip}</p>}
      </div>
    </div>
  ) : null;
};
