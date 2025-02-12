import { Meta, StoryObj } from '@storybook/react';

import { Slider } from '.';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    controls: {
      sort: 'requiredFirst',
      exclude: ['headingAs'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const slider: Story = {
  args: {
    cards: [
      {
        title: 'Solana Core Concepts',
        body: 'by Solana',
        button: { hierarchy: 'link', label: 'Watch on Youtube', endIcon: 'youtube', iconSize: 'xl' },
        image: { src: '/images/slider-card.png' },
        url: '/',
      },
      {
        title: 'Solana Core Concepts',
        body: 'by Solana',
        button: { hierarchy: 'link', label: 'Watch on Youtube', endIcon: 'youtube', iconSize: 'xl' },
        image: { src: '/images/slider-card.png' },
        url: '/',
      },
      {
        title: 'Solana Core Concepts',
        body: 'by Solana',
        button: { hierarchy: 'link', label: 'Watch on Youtube', endIcon: 'youtube', iconSize: 'xl' },
        image: { src: '/images/slider-card.png' },
        url: '/',
      },
      {
        title: 'Solana Core Concepts',
        body: 'by Solana',
        button: { hierarchy: 'link', label: 'Watch on Youtube', endIcon: 'youtube', iconSize: 'xl' },
        image: { src: '/images/slider-card.png' },
        url: '/',
      },
      {
        title: 'Solana Core Concepts',
        body: 'by Solana',
        button: { hierarchy: 'link', label: 'Watch on Youtube', endIcon: 'youtube', iconSize: 'xl' },
        image: { src: '/images/slider-card.png' },
        url: '/',
      },
      {
        title: 'Solana Core Concepts',
        body: 'by Solana',
        button: { hierarchy: 'link', label: 'Watch on Youtube', endIcon: 'youtube', iconSize: 'xl' },
        image: { src: '/images/slider-card.png' },
        url: '/',
      },
      {
        title: 'Solana Core Concepts',
        body: 'by Solana',
        button: { hierarchy: 'link', label: 'Watch on Youtube', endIcon: 'youtube', iconSize: 'xl' },
        image: { src: '/images/slider-card.png' },
        url: '/',
      },
      {
        title: 'Solana Core Concepts',
        body: 'by Solana',
        button: { hierarchy: 'link', label: 'Watch on Youtube', endIcon: 'youtube', iconSize: 'xl' },
        image: { src: '/images/slider-card.png' },
        url: '/',
      },
      {
        title: 'Solana Core Concepts',
        body: 'by Solana',
        button: { hierarchy: 'link', label: 'Watch on Youtube', endIcon: 'youtube', iconSize: 'xl' },
        image: { src: '/images/slider-card.png' },
        url: '/',
      },
    ],
  },
};
