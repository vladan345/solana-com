import React, { FC } from 'react';
import { cva } from 'class-variance-authority';
import { StatCard } from '../../../components/Stats/StatCard';
import { Icon } from '../../../molecules/Icon';

interface RichTextStatProps {
  stats?: StatCard[];
}

const wrapper = cva([
  'tw-bg-gray-900',
  'tw-rounded-lg',
  'tw-py-7 sm:tw-py-12',
  'tw-px-6 sm:tw-px-10',
  'tw-grid',
  'tw-border',
  'tw-border-gray-700',
  'sm:tw-grid-cols-2',
  'lg:tw-grid-cols-4',
  'tw-gap-6',
]);

export const RichTextStat: FC<RichTextStatProps> = ({ stats, ...props }) => {
  if (!stats) {
    return null;
  }
  return (
    <div className="tw-py-8">
      <div className={wrapper()} {...props}>
        {!!stats.length &&
          stats.map((card, i) => (
            <div key={`stat-card-${i}`} className="tw-grid tw-gap-2">
              <Icon id="check-circle" className="tw-stroke-green-500" />
              {typeof card.stat === 'string' && <h4 className="tw-text-xl tw-font-bold">{card.stat}</h4>}
              {typeof card.description === 'string' && <p className="tw-text-xl tw-text-gray-300">{card.description}</p>}
            </div>
          ))}
      </div>
    </div>
  );
};
