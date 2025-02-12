import { Meta, StoryObj } from '@storybook/react';

import { QuoteSlider } from '.';

const meta: Meta<typeof QuoteSlider> = {
  title: 'Components/Quote Slider',
  component: QuoteSlider,
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
};

export default meta;
type Story = StoryObj<typeof QuoteSlider>;

export const quoteSlider: Story = {
  args: {
    cards: [
      {
        author: {
          name: 'Kelly Williams',
          role: 'Head of Design',
          company: 'WEb3 company',
          thumbnail: {
            src: '/images/avatar.png',
          },
        },
        starCount: 5,
        quote: `Lorem ipsum dolor sit amet consectetur. Amet dis dolor in nunc turpis dolor convallis pulvinar nisi. Tristique id ipsum massa vel amet id. Dictum nulla dictum.`,
      },
      {
        author: {
          name: 'Kelly Williams',
          role: 'Head of Design',
          company: 'WEb3 company',
          thumbnail: {
            src: '/images/avatar.png',
          },
        },
        starCount: 4,
        quote: `Lorem ipsum dolor sit amet consectetur. Amet dis dolor in nunc turpis dolor convallis pulvinar nisi.`,
      },
      {
        author: {
          name: 'Kelly Williams',
          role: 'Head of Design',
          company: 'WEb3 company',
          thumbnail: {
            src: '/images/avatar.png',
          },
        },
        starCount: 3,
        quote: `Lorem ipsum dolor sit amet consectetur. Amet dis dolor in nunc turpis dolor convallis pulvinar nisi. Tristique id ipsum massa vel amet id. Dictum nulla dictum.`,
      },
    ],
  },
};
