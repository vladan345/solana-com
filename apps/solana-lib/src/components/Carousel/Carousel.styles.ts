import { cva } from 'class-variance-authority';

export const slider = cva([
    'tw-bg-[rgb(27,22,34)]',
    'tw-rounded-lg',
    'tw-pt-10',
    'tw-px-10',
    'tw-pb-12',
    'tw-m-0',
    'tw-mb-8',
    'w-full',
]);

export const sliderCard = cva([
    '!tw-flex',
    'lg:tw-gap-8',
    'tw-place-content-center',
    'tw-items-center',
    'tw-text-gray-400',
    'tw-line-height[1.4]',
    'hover:tw-text-gray-400'
]);

export const sliderCardImg = cva([
    'tw-hidden',
    'lg:tw-block',
    'tw-relative',
    'tw-w-[465px]',
    'tw-h-[300px]'
]);

export const imgInsideSliderCardImg = cva([
    'tw-object-cover',
    'tw-rounded-md'
]);

export const sliderCardBody = cva([
    'tw-text-center',
    'lg:tw-w-1/2',
]);

export const sliderCardHeadline = cva([
    'tw-text-balance',
]);

export const sliderCardLabel = cva([
    'tw-inline-block',
    'tw-text-common-black',
    'tw-rounded-full',
    'tw-py-[3px]',
    'tw-px-2.5',
    'tw-text-[.9rem]',
    'tw-bg-gradient-to-r',
    'tw-from-[#14f195]',
    'tw-via-[#80ecff]',
    'tw-to-[#64a8f2]'
]);