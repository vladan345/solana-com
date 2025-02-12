import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { parseUrl } from '../../utils/parseUrl';
import { cssMerge } from '../../utils/cssMerge';
import { IconIds } from '../../molecules/Icon/iconIds';
import { Icon } from '../../molecules/Icon';
import { VideoPopup, VideoPopupProps } from '../../components/VideoPopup';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLAnchorElement | HTMLButtonElement>,
    VariantProps<typeof button> {
  url?: string;
  label?: React.ReactNode;
  startIcon?: IconIds | 'none';
  endIcon?: IconIds | 'none';
  iconClassName?: string;
  iconSize?: 'sm' | 'md' | 'lg' | 'xl' | null | undefined;
  videoPopup?: VideoPopupProps;
  componentAs?: React.ElementType;
}

const button = cva(
  [
    'tw-justify-center tw-inline-flex tw-items-center tw-gap-3.5',
    'tw-tracking-wider',
    'tw-font-mono',
    'tw-text-center',
    'tw-uppercase',
    'tw-rounded-full',
    'tw-transition-color',
    'tw-w-fit',
    'tw-whitespace-nowrap',
    'tw-text-gray-800 dark:tw-text-common-white',
    'hover:tw-bg-common-white hover:!tw-text-common-black',
  ],
  {
    variants: {
      hierarchy: {
        disabled: [
          'tw-bg-gray-500',
          'tw-text-gray-700',
          'tw-pointer-events-none',
          'tw-border-common-transparent',
          'tw-bg-none',
        ],
        primary: ['tw-bg-purple-500'],
        secondary: ['tw-bg-green-500', '!tw-text-common-black'],
        tertiary: ['tw-bg-aqua-300', '!tw-text-common-black'],
        outline: ['tw-border', 'tw-border-common-black dark:tw-border-common-white'],
        purpleGradient: ['tw-bg-gradient-button', 'hover:tw-bg-none'],
        greenGradient: ['tw-bg-gradient-two', 'hover:tw-bg-none', '!tw-text-common-black'],
        link: [
          'disabled:tw-bg-common-transparent',
          'disabled:tw-text-gray-500',
          'hover:!tw-bg-common-transparent hover:!tw-text-gray-500 dark:hover:!tw-text-aqua-200',
        ],
      },
      size: {
        sm: ['tw-text-sm tw-py-[6px] tw-px-3'],
        md: ['tw-text-sm tw-py-[10px] tw-px-4'],
        lg: ['tw-text-md tw-py-4 tw-px-[18px]'],
        xl: ['tw-text-md tw-py-5 tw-px-6'],
      },
      isIconOnly: {
        true: ['tw-relative tw-pt-[50%] tw-h-0'],
      },
    },
    defaultVariants: {
      hierarchy: 'primary',
      size: 'md',
    },
    compoundVariants: [
      {
        size: ['lg', 'md', 'sm', 'xl'],
        hierarchy: 'link',
        className: 'tw-p-0',
      },
      {
        isIconOnly: true,
        size: 'sm',
        class: 'tw-py-3',
      },
      {
        isIconOnly: true,
        size: 'md',
        class: 'tw-py-4',
      },
      {
        isIconOnly: true,
        size: 'lg',
        class: 'tw-py-[18px]',
      },
      {
        isIconOnly: true,
        size: 'xl',
        class: 'tw-py-6',
      },
    ],
  }
);

const iconSizeMap = {
  sm: 14,
  md: 14,
  lg: 16,
  xl: 18,
};

export const Button = ({
  className,
  hierarchy,
  size,
  url,
  label,
  children,
  startIcon,
  endIcon,
  iconClassName,
  iconSize: iconSizeProp,
  videoPopup,
  componentAs,
  ...props
}: ButtonProps) => {
  const { as, tabIndex: _tabIndex, ...parsedUrl } = parseUrl(url);
  const Component = componentAs ? componentAs : url ? as : 'button';
  const iconSize = iconSizeMap[iconSizeProp || 'md'];
  const isIconOnly = !children && !label && (startIcon || endIcon) ? true : false;
  const iconOnlyClass = isIconOnly ? 'tw-absolute' : '';

  return (
    <VideoPopup {...videoPopup}>
      <Component className={cssMerge(button({ hierarchy, size, className, isIconOnly }))} {...parsedUrl} {...props}>
        {startIcon && startIcon !== 'none' && (
          <Icon
            id={startIcon}
            stroke="currentColor"
            size={iconSize}
            className={cssMerge(iconClassName, iconOnlyClass)}
          />
        )}
        {(children || (label && typeof label === 'string')) && (
          <span className="tw-mt-0.5 tw-leading-none">{children || label}</span>
        )}
        {endIcon && endIcon !== 'none' && (
          <Icon id={endIcon} stroke="currentColor" size={iconSize} className={cssMerge(iconClassName, iconOnlyClass)} />
        )}
      </Component>
    </VideoPopup>
  );
};
