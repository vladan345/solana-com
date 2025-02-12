import React from 'react';
import Image from 'next/image';
import { Meta, StoryObj } from '@storybook/react';
import { VideoPopup } from '.';
import { Button } from '../../molecules/Button';

const meta: Meta<typeof VideoPopup> = {
  title: 'Components/Video Popup',
  component: VideoPopup,
  parameters: {
    controls: {
      exclude: ['url'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof VideoPopup>;

export const videoPopup: Story = {
  render: args => (
    <div className="tw-w-screen tw-h-screen tw-grid tw-place-items-center">
      <Image src="/images/glows.png" fill alt="for representational purposes" className="tw-pointer-events-none" />
      <Button label="Open Video Popup" videoPopup={args} endIcon="play" />
    </div>
  ),
  args: {
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // ❤️
    headline: 'Solana core concepts',
    body:
      'Lorem ipsum dolor sit amet consectetur. Pulvinar est aliquam volutpat quis porttitor urna. Vel laoreet sed purus sed molestie. Mauris sed vestibulum arcu eu blandit sed. Duis suspendisse nunc libero morbi varius lacus ipsum. Lorem adipiscing risus morbi sed augue mollis. Sit suspendisse vestibulum in eget aliquet scelerisque sem sed et.',
    button: {
      label: 'View all',
      hierarchy: 'link',
      size: 'xl',
      endIcon: 'arrow-up-right',
    },
  },
};
