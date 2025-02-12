import { Meta, StoryObj } from '@storybook/react';

import { AnnouncementBar } from './';

const meta: Meta<typeof AnnouncementBar> = {
  title: 'Components/Announcement Bar',
  component: AnnouncementBar,
  parameters: {
    controls: {
      exclude: ['url'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof AnnouncementBar>;

export const announcementBar: Story = {
  args: {
    text: 'Join the nft showdown - ',
    cta: {
      label: 'Build the next generation of nft brands on Solana',
      url: 'https://solana.com/',
    },
  },
};
