import { Meta, StoryObj } from '@storybook/react';

import { Switchback } from '.';

const meta: Meta<typeof Switchback> = {
  title: 'Components/Switchback',
  component: Switchback,
  parameters: {
    controls: {
      sort: 'requiredFirst',
      exclude: ['headingAs'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switchback>;

export const switchback: Story = {
  args: {
    assetSide: 'left',
    eyebrow: 'optional tw-eyebrow',
    headline: 'Build the future together',
    body:
      'Lorem ipsum dolor sit amet consectetur. Ipsum nunc quam tellus tincidunt egestas pharetra nibh. Pharetra et felis imperdiet eget in pharetra interdum malesuada. A tortor massa morbi sed purus vitae elit nullam porta. In amet pharetra orci cras sit sit massa dignissim. ',
    buttons: [
      {
        hierarchy: 'purpleGradient',
        size: 'xl',
        label: 'Start Building',
      },
      {
        hierarchy: 'outline',
        size: 'xl',
        label: 'video popup',
        endIcon: 'play',
        videoPopup: {
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
      },
    ],
    image: {
      src: '/images/ring-ball.png',
    },
  },
};
