import { Meta, StoryObj } from '@storybook/react';

import { ListingHero } from '.';

const meta: Meta<typeof ListingHero> = {
  title: 'Components/Hero',
  component: ListingHero,
  parameters: {
    controls: {
      sort: 'requiredFirst',
      exclude: ['headingAs'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListingHero>;

export const listing: Story = {
  args: {
    headline: 'Welcome to Solana News',
    subHead: 'The center for everything Solana',
    title: 'Solana keeps accelerating with ecosystem-born innovations like xNFTs',
    intro: 'The official Solana documentations on developing, validators, SPL tokens, wallets and more.',
    publishedDate: 'April 21, 2023 03:24:00',
    slug: '/blog/solana-keeps-accelerating-with-ecosystem-born-innovations-like-xnfts',
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
    ctaText: 'read article',
    image: '/images/blog-card.png',
  },
};
