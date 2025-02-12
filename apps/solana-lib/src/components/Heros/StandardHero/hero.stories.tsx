import { Meta, StoryObj } from '@storybook/react';

import { Hero } from '.';

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    controls: {
      sort: 'requiredFirst',
      exclude: ['headingAs'],
    },
  },
  argTypes: {
    placeholder: { control: 'text', if: { arg: 'newsLetter' } },
    leftImage: { if: { arg: 'centered' } },
    rightImage: { if: { arg: 'centered' } },
    image: { if: { arg: 'centered', truthy: false } },
  },
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const leftAligned: Story = {
  args: {
    eyebrow: 'optional tw-eyebrow',
    headline: 'Powerful for developers. Fast for everyone.',
    newsLetter: true,
    placeholder: 'Enter your email',
    formId: 'fake-form-id',
    centered: false,
    body:
      'Bring blockchain to the people. Solana supports experiences for power users, new consumers, and everyone in between.',
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
        label: 'Start Building',
      },
      {
        hierarchy: 'outline',
        size: 'lg',
        label: 'Read docs',
      },
    ],
    image: {
      src: '/images/ring-ball.png',
    },
    leftImage: {
      src: '/images/hero/left-bar-circle.png',
    },
    rightImage: {
      src: '/images/hero/right-bar-circle.png',
    },
  },
};

export const Centered: Story = {
  args: {
    eyebrow: 'optional tw-eyebrow',
    headline: 'Powerful for developers. Fast for everyone.',
    newsLetter: true,
    formId: 'fake-form-id',
    placeholder: 'Enter your email',
    centered: true,
    body:
      'Bring blockchain to the people. Solana supports experiences for power users, new consumers, and everyone in between.',
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
        label: 'Start Building',
      },
      {
        hierarchy: 'outline',
        size: 'lg',
        label: 'Read docs',
      },
    ],
    image: {
      src: '/images/ring-ball.png',
    },
    leftImage: {
      src: '/images/hero/left-bar-circle.png',
    },
    rightImage: {
      src: '/images/hero/right-bar-circle.png',
    },
  },
};
