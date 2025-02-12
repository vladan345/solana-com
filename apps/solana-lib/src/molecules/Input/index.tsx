import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { cssMerge } from '../../utils/cssMerge';
import { IconIds } from '../../molecules/Icon/iconIds';
import { Icon } from '../../molecules/Icon';
import { Button, ButtonProps } from '../../molecules/Button';

export interface InputProps extends Omit<ComponentPropsWithoutRef<'input'>, 'size'> {
  label?: string;
  helperText?: string | false;
  size?: 'sm' | 'md';
  error?: boolean;
  icon?: IconIds;
  button?: ButtonProps;
  separateOnMobile?: boolean;
  customIcon?: React.ReactNode;
}

const inputStyles = cva(
  [
    'tw-bg-gray-800',
    'tw-rounded-full',
    'sm:tw-min-w-[320px]',
    'tw-text-gray-300',
    'tw-font-light',
    'focus:tw-outline-gray-200',
    'tw-w-full',
    'tw-text-md',
  ],
  {
    variants: {
      size: {
        sm: ['tw-py-2 tw-px-4'],
        md: ['tw-py-2.5 tw-pr-3.5 tw-pl-4'],
      },
      hasIcon: {
        true: ['tw-pl-10'],
      },
      hasButton: {
        true: ['tw-pr-32'],
      },
      disabled: {
        true: ['tw-text-gray-500', 'tw-cursor-not-allowed'],
      },
    },
    compoundVariants: [
      {
        size: 'sm',
        hasButton: true,
        className: ['tw-py-2.5'],
      },
      {
        size: 'md',
        hasButton: true,
        className: ['tw-py-[1.375rem]'],
      },
    ],
  }
);

const helper = cva(['tw-text-gray-300', 'tw-text-sm', 'tw-font-light', 'mb-0'], {
  variants: {
    error: {
      true: ['tw-text-error-500'],
    },
  },
});

const iconStyles = cva(['tw-absolute'], {
  variants: {
    size: {
      sm: ['tw-left-3', 'tw-top-2.5'],
      md: ['tw-left-3', 'tw-top-3'],
    },
    hasButton: {
      true: [],
    },
  },
  compoundVariants: [
    {
      size: 'sm',
      hasButton: true,
      className: ['tw-top-3'],
    },
    {
      size: 'md',
      hasButton: true,
      className: ['tw-top-6'],
    },
  ],
});

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  helperText,
  size = 'md',
  error,
  icon,
  name,
  button,
  className,
  disabled,
  separateOnMobile = false,
  customIcon,
  ...props
}, ref) => {
  const hasIcon = !!icon;
  const hasButton = !!button;
  const buttonSize = size === 'sm' ? 'sm' : 'lg';
  const inputMobileStyling = separateOnMobile ? 'tw-min-w-[320px] tw-pr-4 md:tw-pr-32' : 'tw-pr-32';

  return (
    <div className={cssMerge('tw-grid tw-gap-1.5', className)}>
      {label && (
        <label htmlFor={name} className="tw-text-common-white tw-text-sm">
          {label}
        </label>
      )}
      <div className="tw-relative">
        <input
          type="text"
          className={cssMerge(inputStyles({ size, hasIcon, hasButton, disabled }), inputMobileStyling)}
          name={name}
          disabled={disabled}
          ref={ref}
          {...props}
        />
        {icon && <Icon id={icon} size={20} stroke="currentColor" className={iconStyles({ size, hasButton })} />}
        <div className={`${separateOnMobile ? 'tw-relative md:tw-absolute tw-text-center tw-top-2 md:tw-right-3' : 'tw-absolute tw-right-3 tw-top-2' }`}>
          {button && (
            <Button className="" {...button} size={buttonSize} disabled={disabled} />
          )}
        </div>
        {customIcon && (customIcon)}
      </div>
      {helperText && <p className={cssMerge(helper({ error }))}>{helperText}</p>}
    </div>
  );
});
