import { Meta, StoryObj } from '@storybook/react';

import { Switcher } from '.';

const meta: Meta<typeof Switcher> = {
  title: 'Components/Switcher',
  component: Switcher,
  parameters: {
    controls: {
      sort: 'requiredFirst',
      exclude: ['headingAs'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switcher>;

export const switcher: Story = {
  args: {
    eyebrow: 'optional tw-eyebrow',
    headline: 'Build for growth.',
    body: 'Read the documentation for Solana and popular tools.',
    switcherCards: [
      {
        category: 'Gaming',
        image: {
          src: '/images/switcher/anybodies.jpg',
        },
        eyebrow: 'anybodies',
        featuredCompany: {
          name: 'Anybodies',
          logo: {
            src: '/images/logos/anybodies.png',
          },
        },
        description:
          'The first fully-fledged NFT marketplace on Solana. Get quick and easy access to digital collectibles and explore, buy and sell NFTs from different collections and artists.',
        button: {
          hierarchy: 'link',
          size: 'lg',
          label: 'view all',
          endIcon: 'arrow-up-right',
          iconSize: 'md',
        },
        companies: [
          {
            name: 'Google',
            logo: {
              src: '/images/logos/google.png',
            },
          },
          {
            name: 'Circle',
            logo: {
              src: '/images/logos/circle.png',
            },
          },
          {
            name: 'Crossmint',
            logo: {
              src: '/images/logos/crossmint.png',
            },
          },
          {
            name: 'Jump',
            logo: {
              src: '/images/logos/jump.png',
            },
          },
          {
            name: 'Lollapalooza',
            logo: {
              src: '/images/logos/lollapalooza.png',
            },
          },
          {
            name: 'Meta',
            logo: {
              src: '/images/logos/meta.png',
            },
          },
          {
            name: 'Stepn',
            logo: {
              src: '/images/logos/stepn.png',
            },
          },
        ],
      },
      {
        category: 'NFTs',
        image: {
          src: '/images/switcher/bladerite.webp',
        },
        eyebrow: 'Bladerite',
        featuredCompany: {
          name: 'Bladerite',
          logo: {
            src: '/images/logos/bladerite.webp',
          },
        },
        description:
          'Play and own. Bladerite, a free-to-play melee battle royale game, uses Solana to power its in-game item ownership system.',
        button: {
          hierarchy: 'link',
          size: 'lg',
          label: 'view all',
          endIcon: 'arrow-up-right',
          iconSize: 'md',
        },
        companies: [
          {
            name: 'magic eden',
            logo: {
              src: '/images/logos/magiceden.png',
            },
          },
          {
            name: 'Crossmint',
            logo: {
              src: '/images/logos/crossmint.png',
            },
          },
          {
            name: 'Lollapalooza',
            logo: {
              src: '/images/logos/lollapalooza.png',
            },
          },
          {
            name: 'Meta',
            logo: {
              src: '/images/logos/meta.png',
            },
          },
          {
            name: 'Stepn',
            logo: {
              src: '/images/logos/stepn.png',
            },
          },
          {
            name: 'Jump',
            logo: {
              src: '/images/logos/jump.png',
            },
          },
        ],
      },
      {
        category: 'DeFi',
        image: {
          src: '/images/switcher/anybodies.jpg',
        },
        eyebrow: 'anybodies',
        featuredCompany: {
          name: 'Anybodies',
          logo: {
            src: '/images/logos/anybodies.png',
          },
        },
        description:
          'The first fully-fledged NFT marketplace on Solana. Get quick and easy access to digital collectibles and explore, buy and sell NFTs from different collections and artists.',
        button: {
          hierarchy: 'link',
          size: 'lg',
          label: 'view all',
          endIcon: 'arrow-up-right',
          iconSize: 'md',
        },
        companies: [
          {
            name: 'Google',
            logo: {
              src: '/images/logos/google.png',
            },
          },
          {
            name: 'Circle',
            logo: {
              src: '/images/logos/circle.png',
            },
          },
          {
            name: 'Crossmint',
            logo: {
              src: '/images/logos/crossmint.png',
            },
          },
          {
            name: 'Jump',
            logo: {
              src: '/images/logos/jump.png',
            },
          },
          {
            name: 'Lollapalooza',
            logo: {
              src: '/images/logos/lollapalooza.png',
            },
          },
          {
            name: 'Meta',
            logo: {
              src: '/images/logos/meta.png',
            },
          },
          {
            name: 'Stepn',
            logo: {
              src: '/images/logos/stepn.png',
            },
          },
        ],
      },
      {
        category: 'Payments',
        image: {
          src: '/images/switcher/bladerite.webp',
        },
        eyebrow: 'Bladerite',
        featuredCompany: {
          name: 'Bladerite',
          logo: {
            src: '/images/logos/bladerite.webp',
          },
        },
        description:
          'Play and own. Bladerite, a free-to-play melee battle royale game, uses Solana to power its in-game item ownership system.',
        button: {
          hierarchy: 'link',
          size: 'lg',
          label: 'view all',
          endIcon: 'arrow-up-right',
          iconSize: 'md',
        },
        companies: [
          {
            name: 'magic eden',
            logo: {
              src: '/images/logos/magiceden.png',
            },
          },
          {
            name: 'Crossmint',
            logo: {
              src: '/images/logos/crossmint.png',
            },
          },
          {
            name: 'Lollapalooza',
            logo: {
              src: '/images/logos/lollapalooza.png',
            },
          },
          {
            name: 'Meta',
            logo: {
              src: '/images/logos/meta.png',
            },
          },
          {
            name: 'Stepn',
            logo: {
              src: '/images/logos/stepn.png',
            },
          },
          {
            name: 'Jump',
            logo: {
              src: '/images/logos/jump.png',
            },
          },
        ],
      },
      {
        category: 'DAOs',
        image: {
          src: '/images/switcher/anybodies.jpg',
        },
        eyebrow: 'anybodies',
        featuredCompany: {
          name: 'Anybodies',
          logo: {
            src: '/images/logos/anybodies.png',
          },
        },
        description:
          'The first fully-fledged NFT marketplace on Solana. Get quick and easy access to digital collectibles and explore, buy and sell NFTs from different collections and artists.',
        button: {
          hierarchy: 'link',
          size: 'lg',
          label: 'view all',
          endIcon: 'arrow-up-right',
          iconSize: 'md',
        },
        companies: [
          {
            name: 'Google',
            logo: {
              src: '/images/logos/google.png',
            },
          },
          {
            name: 'Circle',
            logo: {
              src: '/images/logos/circle.png',
            },
          },
          {
            name: 'Crossmint',
            logo: {
              src: '/images/logos/crossmint.png',
            },
          },
          {
            name: 'Jump',
            logo: {
              src: '/images/logos/jump.png',
            },
          },
          {
            name: 'Lollapalooza',
            logo: {
              src: '/images/logos/lollapalooza.png',
            },
          },
          {
            name: 'Meta',
            logo: {
              src: '/images/logos/meta.png',
            },
          },
          {
            name: 'Stepn',
            logo: {
              src: '/images/logos/stepn.png',
            },
          },
        ],
      },
    ],
  },
};
