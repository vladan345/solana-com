import { Meta, StoryObj } from '@storybook/react';
import { FeatureHighlight, FeatureHighlightProps } from '.';

const meta: Meta<typeof FeatureHighlight> = {
  title: 'Components/FeatureHighlight',
  component: FeatureHighlight,
  parameters: {
    controls: {
      sort: 'requiredFirst',
      exclude: ['headingAs'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof FeatureHighlight>;

// TODO add a map of different card types and lengths

export const featureHighlight: Story = {
  args: {
    headline: 'Made for mass adoption',
    eyebrow: 'live data',
    body: 'Lorem ipsum dolor sit amet consectetur. Ipsum vel mauris dolor semper cursus nunc.',
    mobileBackground: {
      src: '/images/glows-mobile.png',
    },
    desktopBackground: {
      src: '/images/glows.png',
    },
    cards: [
      {
        eyebrow: 'Solanart',
        logo: {
          src: '/images/solanaart.png',
        },
        variant: 'logo',
        feature: 'Fast',
        body:
          'Don’t keep your users waiting. Solana has block times of 400 milliseconds — and as hardware gets faster, so will the network.',

        button: {
          hierarchy: 'link',
          size: 'sm',
          label: 'Visit Site',
          endIcon: 'arrow-up-right',
        },
      },
      {
        feature: 'Fast',
        body:
          'Don’t keep your users waiting. Solana has block times of 400 milliseconds — and as hardware gets faster, so will the network.',
        stat: {
          stat: '3,751',
          description: 'Transactions per second',
        },
      },
      {
        feature: 'Fast',
        body:
          'Don’t keep your users waiting. Solana has block times of 400 milliseconds — and as hardware gets faster, so will the network.',
        stat: {
          stat: '3,751',
          description: 'Transactions per second',
        },
      },
      {
        feature: 'Fast',
        body:
          'Don’t keep your users waiting. Solana has block times of 400 milliseconds — and as hardware gets faster, so will the network.',
        stat: {
          stat: '3,751',
          description: 'Transactions per second',
        },
      },
      {
        feature: 'Fast',
        body:
          'Don’t keep your users waiting. Solana has block times of 400 milliseconds — and as hardware gets faster, so will the network.',
        stat: {
          stat: '3,751',
          description: 'Transactions per second',
        },
      },
    ],
    buttons: [
      {
        hierarchy: 'link',
        size: 'sm',
        label: 'Start Building',
        endIcon: 'arrow-up-right',
      },
    ],
  } as Partial<FeatureHighlightProps>,
};
