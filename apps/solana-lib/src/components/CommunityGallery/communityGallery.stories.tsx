import { Meta, StoryObj } from '@storybook/react';

import { CommunityGallery } from '.';

const meta: Meta<typeof CommunityGallery> = {
  title: 'Components/Community Gallery',
  component: CommunityGallery,
};

export default meta;
type Story = StoryObj<typeof CommunityGallery>;

export const standard: Story = {
  args: {
    square: false,
    cards: [
      {
        eyebrow: 'Solana Hacker House participants',
        stat: '11,000',
        body: 'Lorem ipsum dolor sit amet consectetur. Interdum tellus eget et aenean mattis auctor nunc tincidunt.',
        button: {
          hierarchy: 'link',
          size: 'sm',
          label: 'Learn More',
          endIcon: 'arrow-up-right',
          iconSize: 'md',
        },
      },
      {
        size: 'large',
        heading: 'Seattle Hacker House',
        body:
          'Lorem ipsum dolor sit amet consectetur. Ut ultrices dictum at enim dolor vestibulum. Sed enim quis accumsan faucibus facilisis euismod arcu ultrices. Risus dis in tortor massa.',
        button: {
          hierarchy: 'link',
          size: 'sm',
          label: 'Learn More',
          endIcon: 'arrow-up-right',
          iconSize: 'md',
        },
        image: {
          src: '/images/gallery/large.jpg',
          alt: 'Seattle Hacker House',
        },
      },
      {
        size: 'small',
        heading: 'Seattle Hacker House',
        body:
          'Lorem ipsum dolor sit amet consectetur. Ut ultrices dictum at enim dolor vestibulum. Sed enim quis accumsan faucibus facilisis euismod arcu ultrices. Risus dis in tortor massa.',
        button: {
          hierarchy: 'link',
          size: 'sm',
          label: 'Learn More',
          endIcon: 'arrow-up-right',
          iconSize: 'md',
        },
        image: {
          src: '/images/gallery/small.jpg',
          alt: 'Seattle Hacker House',
        },
      },

      {
        size: 'small',
        heading: 'Seattle Hacker House',
        body:
          'Lorem ipsum dolor sit amet consectetur. Ut ultrices dictum at enim dolor vestibulum. Sed enim quis accumsan faucibus facilisis euismod arcu ultrices. Risus dis in tortor massa.',
        button: {
          hierarchy: 'link',
          size: 'sm',
          label: 'Learn More',
          endIcon: 'arrow-up-right',
          iconSize: 'md',
        },
        image: {
          src: '/images/gallery/small.jpg',
          alt: 'Seattle Hacker House',
        },
      },
      {
        eyebrow: 'Solana Hacker House participants',
        stat: '11,000',
        color: 'green',
        body: 'Lorem ipsum dolor sit amet consectetur. Interdum tellus eget et aenean mattis auctor nunc tincidunt.',
        button: {
          hierarchy: 'link',
          size: 'sm',
          label: 'Learn More',
          endIcon: 'arrow-up-right',
          iconSize: 'md',
        },
      },
      {
        size: 'skinny',
        heading: 'Seattle Hacker House',
        body:
          'Lorem ipsum dolor sit amet consectetur. Ut ultrices dictum at enim dolor vestibulum. Sed enim quis accumsan faucibus facilisis euismod arcu ultrices. Risus dis in tortor massa.',
        button: {
          hierarchy: 'link',
          size: 'sm',
          label: 'Learn More',
          endIcon: 'arrow-up-right',
          iconSize: 'md',
        },
        image: {
          src: '/images/gallery/skinny.jpg',
          alt: 'Seattle Hacker House',
        },
      },
      {
        size: 'large',
        heading: 'Seattle Hacker House',
        body:
          'Lorem ipsum dolor sit amet consectetur. Ut ultrices dictum at enim dolor vestibulum. Sed enim quis accumsan faucibus facilisis euismod arcu ultrices. Risus dis in tortor massa.',
        button: {
          hierarchy: 'link',
          size: 'sm',
          label: 'Learn More',
          endIcon: 'arrow-up-right',
          iconSize: 'md',
        },
        image: {
          src: '/images/gallery/large.jpg',
          alt: 'Seattle Hacker House',
        },
      },
    ],
  },
};

export const square: Story = {
  args: {
    square: true,
    cards: [
      {
        size: 'large',
        heading: 'Seattle Hacker House',
        body:
          'Lorem ipsum dolor sit amet consectetur. Ut ultrices dictum at enim dolor vestibulum. Sed enim quis accumsan faucibus facilisis euismod arcu ultrices. Risus dis in tortor massa.',
        button: {
          hierarchy: 'link',
          size: 'sm',
          label: 'Learn More',
          endIcon: 'arrow-up-right',
          iconSize: 'md',
        },
        image: {
          src: '/images/gallery/large-square.png',
          alt: 'Seattle Hacker House',
        },
      },
      {
        size: 'small',
        heading: 'Degen Apes',
        button: {
          hierarchy: 'link',
          size: 'sm',
          label: 'Learn More',
          endIcon: 'arrow-up-right',
          iconSize: 'md',
        },
        image: {
          src: '/images/gallery/small-square.png',
          alt: 'Seattle Hacker House',
        },
      },
      {
        size: 'small',
        heading: 'Degen Apes',
        button: {
          hierarchy: 'link',
          size: 'sm',
          label: 'Learn More',
          endIcon: 'arrow-up-right',
          iconSize: 'md',
        },
        image: {
          src: '/images/gallery/small-square.png',
          alt: 'Seattle Hacker House',
        },
      },
      {
        size: 'large',
        heading: 'Seattle Hacker House',
        body:
          'Lorem ipsum dolor sit amet consectetur. Ut ultrices dictum at enim dolor vestibulum. Sed enim quis accumsan faucibus facilisis euismod arcu ultrices. Risus dis in tortor massa.',
        button: {
          hierarchy: 'link',
          size: 'sm',
          label: 'Learn More',
          endIcon: 'arrow-up-right',
          iconSize: 'md',
        },
        image: {
          src: '/images/gallery/large-square.png',
          alt: 'Seattle Hacker House',
        },
      },
      {
        size: 'small',
        heading: 'Degen Apes',
        button: {
          hierarchy: 'link',
          size: 'sm',
          label: 'Learn More',
          endIcon: 'arrow-up-right',
          iconSize: 'md',
        },
        image: {
          src: '/images/gallery/small-square.png',
          alt: 'Seattle Hacker House',
        },
      },
      {
        size: 'small',
        heading: 'Degen Apes',
        button: {
          hierarchy: 'link',
          size: 'sm',
          label: 'Learn More',
          endIcon: 'arrow-up-right',
          iconSize: 'md',
        },
        image: {
          src: '/images/gallery/small-square.png',
          alt: 'Seattle Hacker House',
        },
      },
    ],
  },
};
