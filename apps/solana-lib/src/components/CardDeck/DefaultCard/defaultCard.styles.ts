import { cva } from 'class-variance-authority';

export const cardWrapper = cva(
  [
    'tw-p-8',
    'tw-rounded-2xl',
    'tw-flex',
    'tw-flex-col',
    'tw-gap-4',
    'tw-transition-all',
    'tw-duration-100',
    'tw-ease-in-out',
    'tw-relative',
    'tw-group',
    'text-white',
  ],
  {
    variants: {
      type: {
        standard: [
          'tw-bg-gray-900',
          'hover:tw-bg-gradient-radial-purple',
        ],
        gradient: [],
        image: ['tw-bg-common-black', 'tw-bg-opacity-100', 'tw-backdrop-blur-0'],
        cta: [],
        blog: ['tw-pt-0', 'tw-pb-4', 'tw-gap-3', 'tw-px-1', 'tw-text-common-white'],
        tall: [
          'md:tw-min-h-[480px]',
          'tw-pb-32',
          'md:tw-pb-56',
          'tw-group',
        ],
      },
      backgroundGradient: {
        none: [],
        pink: [
          'tw-box-content',
          'tw-bg-gradient-black-pink',
          'hover:tw-bg-gradient-black-pink-hover',
        ],
        purple: [
          'tw-box-content',
          'tw-bg-gradient-black-purple',
          'hover:tw-bg-gradient-black-purple-hover',
        ],
        blue: [
          'tw-box-content',
          'tw-bg-gradient-black-blue',
          'hover:tw-bg-gradient-black-blue-hover',
        ],
        green: [
          'tw-box-content',
          'tw-bg-gradient-black-green',
          'hover:tw-bg-gradient-black-green-hover',
        ],
      },
      featured: {
        imageFeatured: ['tw-mb-7', 'tw-invisible', 'tw-hidden', 'sm:tw-visible', 'sm:tw-flex'],
        imageStandard: ['tw-h-[300px]', 'tw-justify-end'],
      },
      hiddenOnDesktop: {
        true: ['tw-visible', 'tw-flex', 'sm:tw-invisible', 'sm:tw-hidden'],
        false: [],
      },
    },
  }
);

export const eyebrowStyles = cva([], {
  variants: {
    type: {
      standard: [
        'tw-tracking-wide',
        'tw-font-mono',
        'tw-text-sm',
        'tw-uppercase',
        'tw-font-diatype',
        'tw-text-purple-500',
      ],
      gradient: [
        'tw-tracking-wide',
        'tw-font-mono',
        'tw-text-sm',
        'tw-uppercase',
        'tw-font-diatype',
        'tw-text-purple-500',
      ],
      image: [
        'tw-w-max',
        'tw-rounded-2xl',
        'tw-p-2',
        'tw-font-mono',
        'tw-text-xs',
        'tw-uppercase',
        'tw-font-light',
        'tw-bg-purple-500',
      ],
      cta: ['tw-tracking-wide', 'tw-font-mono', 'tw-text-sm', 'tw-uppercase', 'tw-text-purple-500'],
      blog: ['tw-tracking-wide', 'tw-uppercase', 'tw-text-sm', 'tw-text-gray-900', 'dark:tw-text-gray-300'],
      tall: ['tw-tracking-wide', 'tw-font-mono', 'tw-text-sm', 'tw-uppercase', 'tw-text-purple-500'],
    },
  },
});

export const headingStyles = cva([], {
  variants: {
    type: {
      standard: ['tw-font-light', 'tw-text-display-sm'],
      gradient: ['tw-font-light', 'tw-text-display-md'],
      image: ['tw-font-bold', 'tw-text-display-sm'],
      cta: ['tw-font-light', 'tw-text-display-sm', 'md:tw-text-display-sm'],
      blog: [
        'tw-font-bold',
        'tw-text-display-sm',
        'group-hover:tw-text-common-transparent',
        'group-hover:tw-bg-clip-text',
        'group-hover:tw-bg-gradient-two',
        'tw-line-clamp-3',
        'tw-mb-0',
        'lg:tw-min-h-[99px]',
      ],
      tall: ['tw-font-bold', 'tw-text-display-xs', 'md:tw-text-display-sm', 'tw-text-green-400', 'mb-0', 'group-hover:tw-text-common-white'],
    },
    featured: {
      imageFeatured: ['tw-text-display-md'],
      imageStandard: ['tw-text-display-sm'],
    },
  },
});

export const bodyStyles = cva([], {
  variants: {
    type: {
      standard: ['tw-text-md', 'tw-text-gray-300', 'tw-text-pretty'],
      gradient: ['tw-text-md', 'tw-text-common-white'],
      image: ['tw-text-common-white', 'tw-text-lg', 'tw-text-pretty'],
      cta: ['tw-text-gray-300', 'tw-text-lg'],
      blog: ['tw-text-md', 'tw-line-clamp-2', 'tw-mb-5', 'tw-h-12', 'tw-text-gray-900', 'dark:tw-text-gray-300'],
      tall: ['tw-text-gray-300', 'tw-text-md'],
    },
  },
});

export const headingRow = cva(['tw-flex', 'tw-justify-between'], {
  variants: {
    type: {
      standard: ['tw-flex-row'],
      gradient: ['tw-flex-row'],
      image: ['tw-flex-row', 'tw-items-end'],
      cta: [
        'tw-pb-4',
        'tw-border-white',
        'tw-border-solid',
        'tw-border-b-2',
        'tw-flex-col',
        'tw-gap-2',
        'md:tw-gap-0',
        'md:tw-flex-row',
      ],
      blog: ['tw-flex-row'],
      tall: [
        'tw-pb-4',
        'tw-gap-4',
        'md:tw-gap-8',
        'tw-flex-row',
      ],
    },
  },
});

export const imageWrapper = cva([], {
  variants: {
    type: {
      standard: [],
      gradient: [],
      image: [],
      cta: [],
      blog: ['tw-relative', 'tw-aspect-video', 'tw-mb-3'],
      tall: [],
    },
  },
});

export const imageOverlay = cva([
  'group-hover:tw-opacity-0',
  '-tw-z-10',
  'tw-absolute',
  'tw-inset-0',
  'tw-w-full',
  'tw-h-full',
  'tw-bg-gradient-black-card',
  'tw-transition-all',
  'tw-duration-100',
  'tw-ease-in-out',
  'tw-opacity-100',
]);

export const borderStyles = cva(
  [
    'tw-absolute',
    'tw-top-0',
    'tw-left-0',
    'tw-w-full',
    'tw-h-full',
    'tw-z-10',
    'tw-pointer-events-none',
    'tw-rounded-2xl',
  ],
  {
    variants: {
      type: {
        standard: [
          'tw-border-solid',
          'tw-border-b-2',
          'tw-border-common-transparent',
          'tw-border-b-purple-400',
          'group-hover:tw-border-purple-400',
          'group-hover:tw-border-2',
        ],
        gradient: [],
        image: [],
        cta: [],
        blog: [],
        tall: [],
      },
      backgroundGradient: {
        none: [],
        pink: [
          'tw-border-solid',
          'tw-border-t-common-black',
          'tw-border-b-2',
          'tw-border-b-pink-200',
          'group-hover:tw-border-2',
          'group-hover:tw-border-pink-200',
        ],
        purple: [
          'tw-border-solid',
          'tw-border-t-common-black',
          'tw-border-b-2',
          'tw-border-b-lightPurple-100',
          'group-hover:tw-border-2',
          'group-hover:tw-border-lightPurple-100',
        ],
        blue: [
          'tw-border-solid',
          'tw-border-t-common-black',
          'tw-border-b-2',
          'tw-border-b-blue-100',
          'group-hover:tw-border-2',
          'group-hover:tw-border-blue-100',
        ],
        green: [
          'tw-border-solid',
          'tw-border-t-common-black',
          'tw-border-b-2',
          'tw-border-b-green-400',
          'group-hover:tw-border-2',
          'group-hover:tw-border-green-400',
        ],
      },
    },
  }
);

export default cardWrapper;
