import { Meta, StoryObj } from '@storybook/react';

import { SwitchbackChain } from '.';

const meta: Meta<typeof SwitchbackChain> = {
  title: 'Components/Switchback Chain',
  component: SwitchbackChain,
  parameters: {
    controls: {
      sort: 'requiredFirst',
      exclude: ['headingAs'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof SwitchbackChain>;

export const switchbackChain: Story = {
  args: {
    switchbacks: [
      {
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
            label: 'Read docs',
          },
        ],
        image: {
          src: '/images/ring-ball.png',
        },
      },
      {
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
            label: 'Read docs',
          },
        ],
        image: {
          src: '/images/ring-ball.png',
        },
      },
      {
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
            label: 'Read docs',
          },
        ],
        image: {
          src: '/images/ring-ball.png',
        },
      },
    ],
  },
};
