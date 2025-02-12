import { Meta, StoryObj } from '@storybook/react';

import { ConversionPanel } from '.';

const meta: Meta<typeof ConversionPanel> = {
  title: 'Components/Conversion Panel',
  component: ConversionPanel,
};

export default meta;
type Story = StoryObj<typeof ConversionPanel>;

export const centered: Story = {
  name: 'Centered',
  parameters: {
    controls: {
      exclude: ['variant', 'mobileBackground', 'desktopBackground', 'image', 'listItems'],
    },
  },
  args: {
    newsLetter: true,
    formId: 'fake-form-id',
    placeholder: 'Enter your email',
    variant: 'centered',
    heading: 'Get started today',
    body:
      'Bring blockchain to the people. Solana supports experiences for power users, new consumers, and everyone in between.',
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
    showLogos: true,
    logos: [
      {
        src: '/images/griffin-gaming-partners.png',
        alt: 'Griffin Gaming Partners',
      },
      {
        src: '/images/solana-ventures.png',
        alt: 'Solana Ventures',
      },
      {
        src: '/images/forte.png',
        alt: 'Forte',
      },
    ],
  },
};

export const centeredWithBackground: Story = {
  name: 'Centered w/ Background',
  parameters: {
    controls: {
      exclude: ['variant', 'image', 'listItems'],
    },
  },
  args: {
    variant: 'centered',
    mobileBackground: {
      src: '/images/glows-mobile.png',
    },
    desktopBackground: {
      src: '/images/glows.png',
    },
    heading: 'Get started today',
    body:
      'Bring blockchain to the people. Solana supports experiences for power users, new consumers, and everyone in between.',
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
    showLogos: true,
    logos: [
      {
        src: '/images/griffin-gaming-partners.png',
        alt: 'Griffin Gaming Partners',
      },
      {
        src: '/images/solana-ventures.png',
        alt: 'Solana Ventures',
      },
      {
        src: '/images/forte.png',
        alt: 'Forte',
      },
    ],
  },
};

export const inlineCentered: Story = {
  parameters: {
    controls: {
      exclude: ['variant', 'logos', 'showLogos', 'mobileBackground', 'desktopBackground', 'image'],
    },
  },
  args: {
    variant: 'inline-centered',
    heading: 'Join the Community',
    body: 'Miss any content?',
    buttons: [
      {
        hierarchy: 'secondary',
        size: 'lg',
        label: 'Submit request',
      },
    ],
    listItems: [
      {
        hierarchy: 'link',
        size: 'sm',
        label: 'Solana Discord Support',
        startIcon: 'discord-green',
        endIcon: 'arrow-up-right',
      },
      {
        hierarchy: 'link',
        size: 'sm',
        label: 'Solana Forums',
        startIcon: 'solana-green',
        endIcon: 'arrow-up-right',
      },
    ],
  },
};

export const offset: Story = {
  parameters: {
    controls: {
      exclude: ['variant', 'logos', 'showLogos', 'mobileBackground', 'desktopBackground', 'listItems'],
    },
  },
  args: {
    variant: 'offset',
    heading: 'Solana Collective',
    body: 'Support the Solana core team through community and marketing intiatives while accumulating rewards.',
    buttons: [
      {
        hierarchy: 'secondary',
        size: 'lg',
        label: 'Apply Now',
      },
    ],
    desktopImage: {
      src: '/images/warp-desktop.png',
    },
    mobileImage: {
      src: '/images/warp-mobile.png',
    },
  },
};
