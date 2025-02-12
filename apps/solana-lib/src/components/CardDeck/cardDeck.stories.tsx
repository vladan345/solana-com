import { Meta, StoryObj } from '@storybook/react';

import { CardDeck } from '.';
import { DefaultCard } from './DefaultCard/defaultCard';

const meta: Meta<typeof CardDeck> = {
  title: 'Components/Card Deck',
  component: CardDeck,
  parameters: {
    controls: {
      sort: 'requiredFirst',
      exclude: ['headingAs', 'contained'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardDeck>;

const numCards = { standard: 9, gradient: 3, image: 6, cta: 2, blog: 6, tall: 2 };

const standardCard: DefaultCard = {
  type: 'standard',
  eyebrow: 'Tool / Library',
  heading: 'Core Documentations',
  body: 'The official Solana documentations on developing, validators, SPL tokens, wallets and more.',
  callToAction: {
    hierarchy: 'link',
    size: 'sm',
    label: 'Learn More',
    endIcon: 'arrow-up-right',
    iconSize: 'md',
  },
};

const gradientCard: DefaultCard = {
  type: 'gradient',
  eyebrow: '',
  heading: 'Fork us on GitHub',
  body: 'Ready to build? Head over to github to make something new.',
  callToAction: {
    hierarchy: 'outline',
    size: 'md',
    label: 'Go to Github',
    endIcon: 'arrow-up-right',
    iconSize: 'md',
    url: '/iframe',
  },
};

const gradients = ['pink', 'purple', 'blue', 'green'];
const gradientCards: DefaultCard[] = gradients.map(gradient => {
  return { backgroundGradient: gradient, ...gradientCard } as DefaultCard;
});

const imageCard: DefaultCard = {
  type: 'image',
  eyebrow: '17 chapters',
  heading: 'Solana Bytes is cool!',
  backgroundImage: {
    src: '/images/solana-bytes.png',
  },
  callToAction: {
    hierarchy: 'outline',
    size: 'md',
    label: '',
    endIcon: 'arrow-right',
    iconSize: 'md',
    url: '/',
  },
};

const featuredImageCard: DefaultCard = {
  type: 'image',
  eyebrow: '17 chapters',
  heading: 'Solana Bytes',
  body: "Solana's high speed, low cost, and energy efficiency make it the ideal network to learn on",
  backgroundImage: {
    src: '/images/solana-bytes.png',
  },
  callToAction: {
    hierarchy: 'outline',
    size: 'md',
    label: '',
    endIcon: 'arrow-right',
    iconSize: 'md',
    url: '/',
  },
};

const ctaCard: DefaultCard = {
  type: 'cta',
  eyebrow: '',
  heading: 'Solana docs',
  body: "Learn how Solana works and get a high-level understanding of Solana's architecture",
  callToAction: {
    hierarchy: 'outline',
    size: 'md',
    label: 'View All',
    endIcon: 'arrow-up-right',
    iconSize: 'md',
    url: '/',
  },
};

const blogCard: DefaultCard = {
  type: 'blog',
  publishedDate: 'April 21, 2023 03:24:00',
  heading: 'Solana Ecosystem Innovation in Gaming',
  body:
    'The official Solana documentations on developing, validators, SPL tokens, wallets and more. Lorem Ipsum is overrated.',
  backgroundImage: {
    src: '/images/blog-card.png',
  },
  callToAction: {
    hierarchy: 'link',
    size: 'md',
    label: 'Learn More',
    endIcon: 'arrow-up-right',
    iconSize: 'md',
    url: '/',
  },
};

const tallCard: DefaultCard = {
  type: 'tall',
  heading: 'Solana Bytes is cool!',
  body: 'The official Solana documentations on developing, validators, SPL tokens, wallets and more. Lorem Ipsum is overrated.',
  backgroundImage: {
    src: '/images/tall-card-01-desktop.png',
  },
  mobileBackgroundImage: {
    src: '/images/tall-card-01-mobile.png',
  },
  callToAction: {
    hierarchy: 'outline',
    size: 'lg',
    label: '',
    endIcon: 'arrow-right',
    iconSize: 'lg',
    url: '/',
  },
};

export const standard: Story = {
  args: {
    cards: Array(numCards['standard']).fill(standardCard),
    numCols: 3,
    featured: false,
  },
};

export const gradient: Story = {
  args: {
    cards: gradientCards,
    numCols: 2,
    featured: false,
  },
};

export const image: Story = {
  args: {
    cards: [featuredImageCard, ...Array(numCards['image']).fill(imageCard)],
    numCols: 3,
    featured: true,
  },
};

export const cta: Story = {
  args: {
    cards: Array(numCards['cta']).fill(ctaCard),
    numCols: 2,
    featured: false,
  },
};

export const blog: Story = {
  args: {
    cards: Array(numCards['blog']).fill(blogCard),
    numCols: 2,
    featured: false,
  },
};

export const tall: Story = {
  args: {
    cards: Array(numCards['tall']).fill(tallCard),
    numCols: 2,
    featured: false,
  },
};