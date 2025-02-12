import { cva } from 'class-variance-authority';

export const background = cva([], {
  variants: {
    centered: {
      true: [],
      false: ['tw-switchback-gradient'],
    },
  },
});
export const section = cva(['tw-grid', 'tw-gap-10', 'md:tw-gap-16'], {
  variants: {
    centered: {
      false: ['tw-relative'],
    },
    hasCrumbs: {
      true: ['tw-pt-4', 'md:tw-pt-4', 'sm:tw-pt-4', 'lg:tw-pt-4'],
    },
  },
});
export const wrapper = cva([
  'tw-flex',
  'tw-flex-col',
  'tw-gap-8',
  'tw-items-center',
  'lg:tw-flex-row',
  'lg:tw-justify-between',
]);
export const headlineStyles = cva(['tw-font-bold tw-text-display-sm', 'md:tw-font-bold', 'tw-text-balance'], {
  variants: {
    centered: {
      true: ['md:tw-text-display-md'],
      false: ['md:tw-text-display-lg'],
    },
    headingSize: {
      sm: [],
      lg: ['lg:tw-text-display-xl'],
    },
  },
});
export const buttonWrapper = cva(['tw-w-full', 'tw-flex', 'tw-gap-2', 'tw-flex-col', 'sm:tw-flex-row', 'md:tw-w-fit'], {
  variants: {
    centered: {
      true: ['sm:tw-justify-center'],
    },
  },
});
export const content = cva(['tw-flex', 'tw-flex-col', 'tw-gap-8'], {
  variants: {
    centered: {
      true: ['sm:tw-items-center', 'tw-text-center'],
      false: ['xl:tw-w-1/2'],
    },
  },
});
export const backgroundImage = cva(['tw-absolute', '-tw-z-10'], {
  variants: {
    side: {
      left: ['tw-right-2/3', 'tw-invisible', 'sm:tw-visible', 'tw-w-[1200px]', 'tw-h-auto', '-tw-top-52'],
      right: ['tw-left-1/2', 'md:tw-left-[62%]', 'tw-w-[1600px]', 'tw-h-auto', '-tw-top-14'],
    },
  },
});