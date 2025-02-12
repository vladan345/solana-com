import { Meta, StoryObj } from '@storybook/react';

import { Stats } from '.';

const meta: Meta<typeof Stats> = {
  title: 'Components/Stats',
  component: Stats,
  parameters: {
    controls: {
      sort: 'requiredFirst',
      exclude: ['headingAs', 'contained'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stats>;

export const standard: Story = {
  args: {
    eyebrow: 'Optional Eyebrow',
    headline: 'Join a community of millions',
    buttons: [
      {
        hierarchy: 'link',
        size: 'sm',
        label: 'Start Building',
        endIcon: 'arrow-up-right',
      },
    ],
    stats: [
      {
        stat: '11.5M+',
        description: 'active accounts',
      },
      {
        stat: '100K',
        description: 'NFTs Minted',
      },
      {
        stat: '$0.00025',
        description: 'Average cost per transaction',
      },
    ],
  },
};

export const contained: Story = {
  args: {
    contained: true,
    stats: [
      {
        stat: '16x',
        description: '16x growth in number of full time developers since 2018.',
      },
      {
        stat: '83%',
        description: 'The number of total Solana developers grew 83% in 2022.',
      },
      {
        stat: '2,000',
        description: 'More than monthly active developers are building on Solana.',
      },
    ],
  },
};
