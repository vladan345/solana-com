import { Meta, StoryObj } from '@storybook/react';

import { Quote } from '.';

const meta: Meta<typeof Quote> = {
  title: 'Components/Quote',
  component: Quote,
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Quote>;

export const quote: Story = {
  args: {
    eyebrow: 'why solana',
    quote:
      'Get started with the best reference implementations. Ecosystem projects provide resources to launch your NFT on Solana in {% record speed %}.',
    author: {
      name: 'Kelly Williams',
      role: 'Head of Design',
      company: 'WEb3 company',
      thumbnail: {
        src: '/images/avatar.png',
      },
    },
    image: {
      src: '/images/bean.png',
    },
  },
};
