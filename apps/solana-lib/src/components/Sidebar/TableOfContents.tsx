import React, { ComponentPropsWithoutRef, FC, useContext, useState } from 'react';
import { cva } from 'class-variance-authority';
import { cssMerge } from '../../utils/cssMerge';
import { Icon } from '../../molecules/Icon';
import { useAnimatedHeight } from '../../utils/hooks/useAnimatedHeight';
import { TocContext } from './utils/TocProvider';
import { toKebabCase } from '../../utils/toKebabCase';

const wrapper = cva([
  'tw-border-b',
  'tw-pb-7',
  'tw-border-gray-500',
  'tw-transition-all',
  'tw-duration-1000',
  'tw-mb-12',
  'lg:tw-mb-8',
]);

const title = cva([
  'tw-flex',
  'tw-flex-row',
  'tw-justify-between',
  'tw-items-center',
  'tw-text-display-xs',
  'tw-font-bold',
  'tw-cursor-pointer',
]);

const chevron = cva(['tw-transition-transform', 'tw-duration-300', 'tw-text-gray-300'], {
  variants: {
    open: {
      true: ['tw-rotate-180'],
    },
  },
});

const list = cva(['!tw-pl-0 tw-overflow-hidden', 'tw-transition-all', 'tw-duration-300', 'tw-mt-4']);
const listItem = cva(
  ['tw-py-4', 'tw-text-gray-300', 'tw-uppercase', 'tw-font-mono', 'tw-font-light', 'tw-block', '!tw-text-md'],
  {
    variants: {
      active: {
        true: ['tw-text-common-white', 'tw-font-bold'],
      },
    },
  }
);

export const TableOfContents: FC<ComponentPropsWithoutRef<'div'> & { headline: string }> = ({ headline, ...props }) => {
  const { headings, activeId } = useContext(TocContext);

  if (!headings || headings.length === 0) {
    return null;
  }

  const [open, setOpen] = useState(true);
  const [height, ref] = useAnimatedHeight<HTMLUListElement>(open);

  return (
    <div className={cssMerge(wrapper())} {...props}>
      <div className={cssMerge(title())} onClick={() => setOpen(!open)}>
        <div>{headline}</div>
        <Icon id="chevron" stroke="currentColor" size={12} className={chevron({ open })} />
      </div>
      <ul ref={ref} style={{ height }} className={list()}>
        {headings.map((heading, index) => {
          const headingId = toKebabCase(heading);
          return (
            <li key={index}>
              <a href={`#${headingId}`} className={cssMerge(listItem({ active: activeId === headingId }))}>
                {heading}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
