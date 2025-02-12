import React, { ComponentPropsWithoutRef, FC } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cssMerge } from '../../utils/cssMerge';
import { Icon } from '../../molecules/Icon';
import { useAnimatedHeight } from '../../utils/hooks/useAnimatedHeight';
import parse from 'html-react-parser';

export interface AccordionItemProps extends VariantProps<typeof chevron>, ComponentPropsWithoutRef<'div'> {
  title: string;
  body: string;
}

const wrapper = cva([
  'tw-border-t',
  'tw-pt-6 tw-pb-4',
  'tw-border-gray-500',
  'tw-transition-all',
  'tw-duration-1000',
  'tw-cursor-pointer',
  'tw-group',
]);
const bodyStyles = cva(['tw-text-gray-300 tw-mt-2', 'tw-transition-all', 'tw-duration-300', 'tw-overflow-hidden']);
const titleStyles = cva(
  ['tw-flex', 'tw-flex-row', 'tw-justify-between', 'tw-items-center', 'group-hover:tw-text-green-500'],
  {
    variants: {
      open: {
        true: ['tw-text-green-500'],
      },
    },
  }
);
const chevron = cva(['tw-transition-transform', 'tw-duration-300', 'tw-ml-2'], {
  variants: {
    open: {
      true: ['tw-rotate-180'],
    },
  },
});

export const AccordionItem: FC<AccordionItemProps> = ({ title, open, body, ...props }) => {
  const [height, ref] = useAnimatedHeight<HTMLParagraphElement>(open);

  return (
    <div className={cssMerge(wrapper())} {...props}>
      <div className={cssMerge(titleStyles({ open }))}>
        <div>{title}</div>
        <Icon id="chevron" stroke="currentColor" size={12} className={chevron({ open })} style={{ minWidth: '12px' }} />
      </div>
      <div ref={ref} className={bodyStyles()} style={{ height, wordBreak: 'break-word' }}>
        {parse(body)}
      </div>
    </div>
  );
};
