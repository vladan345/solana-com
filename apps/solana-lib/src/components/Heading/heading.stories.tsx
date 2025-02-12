import { Meta, StoryObj } from '@storybook/react';

import { Heading } from '.';

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    controls: {
      sort: 'requiredFirst',
      exclude: ['headingAs', 'variant'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const standard: Story = {
  args: {
    paddingBottom: 'none',
    eyebrow: 'optional tw-eyebrow',
    headline: 'Go to the source.',
    body: 'Read the documentation for Solana and popular tools.',
    buttons: [
      {
        hierarchy: 'link',
        size: 'lg',
        label: 'View All',
        endIcon: 'arrow-up-right',
      },
    ],
  },
};

export const floatingButton: Story = {
  args: {
    paddingBottom: 'none',
    eyebrow: 'optional tw-eyebrow',
    headline: 'Go to the source.',
    body: 'Read the documentation for Solana and popular tools.',
    variant: 'floatingButton',
    buttons: [
      {
        hierarchy: 'link',
        size: 'lg',
        label: 'View All',
        endIcon: 'arrow-up-right',
      },
    ],
  },
};

export const centered: Story = {
  args: {
    paddingBottom: 'none',
    eyebrow: 'optional tw-eyebrow',
    headline: 'Go to the source.',
    body: 'Read the documentation for Solana and popular tools.',
    variant: 'centered',
    buttons: [
      {
        hierarchy: 'purpleGradient',
        size: 'xl',
        label: 'Button CTA',
      },
      {
        hierarchy: 'outline',
        size: 'xl',
        label: 'Button CTA',
      },
    ],
  },
};
