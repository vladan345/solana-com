import React, { ComponentPropsWithoutRef, FC, useState } from 'react';
import { cva } from 'class-variance-authority';
import { ButtonProps } from '../../molecules/Button';
import { Icon } from '../../molecules/Icon';
import Link from '../../molecules/Link';
import { cssMerge } from '../../utils/cssMerge';

interface AnnouncementBarProps extends ComponentPropsWithoutRef<'div'> {
  text: string;
  cta: ButtonProps;
  color?: 'green' | 'purple';
  dismissable?: boolean;
}

const wrapper = cva(['tw-flex', 'tw-justify-center', 'tw-items-center', 'tw-relative', 'tw-z-50'], {
  variants: {
    color: {
      green: ['tw-bg-gradient-announcement-bar', 'tw-text-common-black'],
      purple: ['tw-bg-gradient-button', 'tw-text-common-white'],
    },
    dismissable: {
      true: 'tw-pr-10',
    },
  },
  defaultVariants: {
    color: 'green',
  },
});

const content = cva([
  'tw-text-xs sm:tw-text-sm lg:tw-text-md',
  'tw-font-medium',
  'tw-font-mono',
  'tw-uppercase',
  'tw-p-4 sm:tw-py-2',
]);

const linkText = cva(['tw-inline', 'tw-underline', 'hover:!tw-text-common-white', 'tw-no-underline', 'tw-text-inherit'], {
  variants: {
    color: {
      green: ['tw-text-common-black'],
      purple: ['tw-text-common-white'],
    },
  },
});

export const AnnouncementBar: FC<AnnouncementBarProps> = ({ color = "green", text = "", cta = { url: "", label: "" }, dismissable = true, ...props }) => {
  const [open, setOpen] = useState(true);

  return (
    (open && (
      <div className={cssMerge(wrapper({ color }))} {...props}>
        <span className={cssMerge(content())}>
          {typeof text === "string" && text}
          {text && cta.label && " - "}
          {cta.label && (
            <Link href={cta.url || ''} className={cssMerge(linkText({ color }))}>
              {cta.label}
              <Icon
                stroke="currentColor"
                id={"arrow-right"}
                size={12}
                className="tw-ml-2.5 tw-mb-1"
              />
            </Link>
          )}
        </span>
        {dismissable && (
          <Icon
            onClick={() => setOpen(false)}
            role="button"
            aria-label="Close"
            id="x-close"
            stroke="currentColor"
            size={18}
            className="tw-absolute tw-right-0 tw-top-0 tw-m-2.5"
          />
        )}
      </div>
    )) ||
    null
  );
};
