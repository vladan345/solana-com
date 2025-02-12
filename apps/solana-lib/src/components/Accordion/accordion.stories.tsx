import { Meta, StoryObj } from '@storybook/react';

import { Accordion } from '.';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    controls: {
      sort: 'requiredFirst',
      exclude: ['headingAs'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const accordion: Story = {
  args: {
    headline: 'Frequently asked questions',
    eyebrow: 'Solana faqs',
    accordions: [
      {
        title: 'Is there a Bug Bounty Program?',
        body:
          'Yes! One of our top priorities is the security and safety of the network. We welcome security researchers to submit bug reports and earn rewards for their work.',
      },
      {
        title: 'How do I get help running a validator node?',
        body:
          'Yes! One of our top priorities is the security and safety of the network. We welcome security researchers to submit bug reports and earn rewards for their work.',
      },
      {
        title: 'How do I run a validator node?',
        body:
          'Yes! One of our top priorities is the security and safety of the network. We welcome security researchers to submit bug reports and earn rewards for their work.',
      },
      {
        title: 'What is an NFT?',
        body:
          'Yes! One of our top priorities is the security and safety of the network. We welcome security researchers to submit bug reports and earn rewards for their work.',
      },
      {
        title: 'Is there a free trial available?',
        body:
          'Yes! One of our top priorities is the security and safety of the network. We welcome security researchers to submit bug reports and earn rewards for their work.',
      },
      {
        title: 'Is there a free trial available?',
        body:
          'Yes! One of our top priorities is the security and safety of the network. We welcome security researchers to submit bug reports and earn rewards for their work.',
      },
    ],
  },
};
