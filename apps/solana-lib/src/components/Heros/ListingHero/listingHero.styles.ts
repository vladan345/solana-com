import { cva } from 'class-variance-authority';

export const section = cva(['tw-grid', 'tw-gap-8'], {
  variants: {
    hasCrumbs: {
      true: ['tw-pt-4', 'md:tw-pt-4', 'sm:tw-pt-4', 'lg:tw-pt-4'],
    },
  },
});
export const titleStyles = cva(['tw-font-bold tw-text-display-sm', 'md:tw-text-display-md']);
export const headlineStyles = cva([
  'tw-text-display-sm',
  'md:tw-text-display-md',
  'lg:tw-text-display-lg',
  'tw-font-medium',
  'tw-mt-2',
]);
export const content = cva(['tw-flex', 'tw-flex-col', 'tw-gap-4']);
export const imageStyles = cva(['tw-w-full', 'tw-rounded-xl']);
