import React, { ReactNode } from 'react';
import { ComponentPropsWithoutRef, FC, Fragment } from 'react';
import { cva } from 'class-variance-authority';
import { Button } from '../../molecules/Button';
import { Icon } from '../../molecules/Icon';
import { cssMerge } from '../../utils/cssMerge';
import Link from '../../molecules/Link';

export interface BreadcrumbsProps extends ComponentPropsWithoutRef<'div'> {
  breadcrumbs?: {
    label?: ReactNode;
    link?: string;
  }[];
  delimiter?: 'chevron' | 'slash';
  variant?: 'bordered' | 'contained' | 'button' | null;
}

const wrapper = cva(['tw-flex', 'tw-items-center', 'tw-w-fit'], {
  variants: {
    delimiter: {
      chevron: ['tw-gap-3'],
      slash: ['tw-gap-2'],
    },
    variant: {
      bordered: ['tw-border-y', 'tw-border-gray-200', 'tw-w-full', 'tw-py-2'],
      button: [],
      contained: ['tw-bg-gray-900', 'tw-py-2 tw-px-3', 'tw-rounded-lg'],
    },
  },
});

const buttonStyles = cva(
  ['tw-text-gray-300', 'tw-w-auto', 'tw-font-diatype', 'tw-normal-case', 'hover:tw-text-green-500'],
  {
    variants: {
      variant: {
        button: [],
        bordered: [],
        contained: [],
      },
      last: {
        true: ['tw-pointer-events-none', 'tw-text-common-white'],
      },
    },
    compoundVariants: [
      {
        variant: ['button'],
        last: true,
        className: ['tw-text-gray-300', 'tw-bg-gray-800', 'tw-px-2 tw-py-1.5', 'tw-rounded-md'],
      },
      {
        variant: ['contained'],
        last: true,
        className: ['tw-text-gray-300'],
      },
    ],
  }
);

const delimiterStyles = cva(['tw-stroke-gray-500'], {
  variants: {
    delimiter: {
      chevron: ['-tw-rotate-90'],
      slash: [],
    },
  },
});

export const Breadcrumbs: FC<BreadcrumbsProps> = ({
  breadcrumbs,
  delimiter = 'chevron',
  variant,
  className,
  ...props
}) => {
  const iconSize = delimiter === 'chevron' ? 10 : 22;
  const delimiterIcon = () => (
    <Icon id={delimiter} size={iconSize} className={cssMerge(delimiterStyles({ delimiter }))} />
  );

  return breadcrumbs ? (
    <div className={wrapper({ variant, delimiter, className })} {...props}>
      <Link href="/">
        <Icon id="home" size={16} className={buttonStyles()} />
      </Link>
      {delimiterIcon()}
      {breadcrumbs.map(
        (breadcrumb, index) =>
          breadcrumb.label && (
            <Fragment key={breadcrumb.link}>
              {index !== 0 && delimiterIcon()}
              <Button
                size="md"
                hierarchy="link"
                url={breadcrumb.link}
                className={buttonStyles({ last: index === breadcrumbs.length - 1, variant })}
              >
                {breadcrumb.label}
              </Button>
            </Fragment>
          )
      )}
    </div>
  ) : null;
};
