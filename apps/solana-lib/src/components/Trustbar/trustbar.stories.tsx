import { Meta, StoryObj } from '@storybook/react';

import { Trustbar } from '.';

const meta: Meta<typeof Trustbar> = {
  title: 'Components/Trustbar',
  component: Trustbar,
  parameters: {
    controls: {
      sort: 'requiredFirst',
      exclude: ['variant'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Trustbar>;

export const standard: Story = {
  args: {
    eyebrow: 'Powering tools and integrations from companies all around the world',
    variant: 'standard',
    logos: [
      {
        src: '/images/logos/stepn.png',
        alt: 'stepn-logo',
      },
      {
        src: '/images/logos/circle.png',
        alt: 'circle-logo',
      },
      {
        src: '/images/logos/jump.png',
        alt: 'jump-logo',
      },
      {
        src: '/images/logos/meta.png',
        alt: 'meta-logo',
      },
      {
        src: '/images/logos/google.png',
        alt: 'google-logo',
      },
      {
        src: '/images/logos/magiceden.png',
        alt: 'magiceden-logo',
      },
      {
        src: '/images/logos/lollapalooza.png',
        alt: 'lollapalooza-logo',
      },
    ],
  },
};

export const standardPurple: Story = {
  args: {
    eyebrow: 'Powering tools and integrations from companies all around the world',
    variant: 'standardPurple',
    logos: [
      {
        src: '/images/logos/stepn.png',
        alt: 'stepn-logo',
      },
      {
        src: '/images/logos/circle.png',
        alt: 'circle-logo',
      },
      {
        src: '/images/logos/jump.png',
        alt: 'jump-logo',
      },
      {
        src: '/images/logos/meta.png',
        alt: 'meta-logo',
      },
      {
        src: '/images/logos/google.png',
        alt: 'google-logo',
      },
      {
        src: '/images/logos/magiceden.png',
        alt: 'magiceden-logo',
      },
      {
        src: '/images/logos/lollapalooza.png',
        alt: 'lollapalooza-logo',
      },
    ],
  },
};

export const grid: Story = {
  args: {
    variant: 'grid',
    logos: [
      {
        src: '/images/logos/crossmint.png',
        alt: 'crossmint-logo',
      },
      {
        src: '/images/logos/crossmint.png',
        alt: 'crossmint-logo',
      },
      {
        src: '/images/logos/crossmint.png',
        alt: 'crossmint-logo',
      },
      {
        src: '/images/logos/crossmint.png',
        alt: 'crossmint-logo',
      },
      {
        src: '/images/logos/crossmint.png',
        alt: 'crossmint-logo',
      },
      {
        src: '/images/logos/crossmint.png',
        alt: 'crossmint-logo',
      },
      {
        src: '/images/logos/crossmint.png',
        alt: 'crossmint-logo',
      },
      {
        src: '/images/logos/crossmint.png',
        alt: 'crossmint-logo',
      },
      {
        src: '/images/logos/crossmint.png',
        alt: 'crossmint-logo',
      },
      {
        src: '/images/logos/crossmint.png',
        alt: 'crossmint-logo',
      },
      {
        src: '/images/logos/crossmint.png',
        alt: 'crossmint-logo',
      },
      {
        src: '/images/logos/crossmint.png',
        alt: 'crossmint-logo',
      },
      {
        src: '/images/logos/crossmint.png',
        alt: 'crossmint-logo',
      },
      {
        src: '/images/logos/crossmint.png',
        alt: 'crossmint-logo',
      },
      {
        src: '/images/logos/crossmint.png',
        alt: 'crossmint-logo',
      },
    ],
  },
};
