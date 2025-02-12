import React, { ReactNode } from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import { cva, VariantProps } from 'class-variance-authority';
import { cssMerge } from '../../utils/cssMerge';

const tooltipContent = cva(['tw-max-w-xs'], {
  variants: {
    variant: {
      primary: ['tw-rounded-lg', 'tw-bg-gray-700'],
    },
    size: {
      md: ['tw-px-3', 'tw-py-2', 'tw-text-xs'],
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

const tooltipArrow = cva([], {
  variants: {
    variant: {
      primary: ['tw-fill-gray-700'],
    },
    size: {
      md: ['tw-w-4', 'tw-h-2'],
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export interface TooltipProps extends VariantProps<typeof tooltipContent>, RadixTooltip.TooltipProps {
  title?: ReactNode;
  tip?: ReactNode;
  children: React.ReactElement;
  className?: string;
  withArrow?: boolean;
  side?: 'top' | 'right' | 'bottom' | 'left';
}

export const Tooltip = ({
  children,
  title,
  open,
  defaultOpen,
  onOpenChange,
  variant,
  size,
  delayDuration = 700,
  side = 'top',
  tip,
  withArrow = true,
  className,
}: TooltipProps) => {
  return title || tip ? (
    <RadixTooltip.Provider delayDuration={delayDuration}>
      <RadixTooltip.Root
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
        delayDuration={delayDuration}
      >
        <RadixTooltip.Trigger>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            side={side}
            sideOffset={5}
            className={cssMerge(tooltipContent({ variant, size, className }))}
          >
            <div className="tw-grid tw-gap-1">
              {title && <p className={`tw-mb-0`}>{title}</p>}
              {tip && <p className={`tw-mb-0`}>{tip}</p>}
            </div>
            {withArrow && <RadixTooltip.Arrow className={cssMerge(tooltipArrow({ variant, size, className }))} />}
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  ) : (
    children
  );
};
