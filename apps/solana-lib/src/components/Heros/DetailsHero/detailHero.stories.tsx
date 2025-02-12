import { Meta, StoryObj } from '@storybook/react';

import { DetailsHero } from '.';

const meta: Meta<typeof DetailsHero> = {
  title: 'Components/Hero',
  component: DetailsHero,
  parameters: {
    controls: {
      sort: 'requiredFirst',
      exclude: ['headingAs'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof DetailsHero>;

export const details: Story = {
  args: {
    title: 'Solana keeps accelerating with ecosystem-born innovations like xNFTs',
    publishedDate: 'April 21, 2023 03:24:00',
    slug: '/blog/solana-keeps-accelerating-with-ecosystem-born-innovations-like-xnfts',
    shareIcons: true,
    author: {
      name: 'Austin Federa',
    },
    breadCrumbs: [
      {
        label: 'Settings',
      },
      {
        label: 'Team',
      },
    ],
    buttons: [
      {
        hierarchy: 'purpleGradient',
        size: 'lg',
        label: 'Button CTA',
      },
      {
        hierarchy: 'outline',
        size: 'lg',
        label: 'Button CTA',
      },
    ],
    image: '/images/blog-card.png',
  },
};
