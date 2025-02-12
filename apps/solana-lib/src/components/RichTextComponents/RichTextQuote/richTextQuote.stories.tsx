import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { RichTextQuote } from '.';
import { Section } from '../../../molecules/Section';

const meta: Meta<typeof RichTextQuote> = {
  title: 'Components/Rich Text/Quote',
  component: RichTextQuote,
  parameters: {
    controls: {
      sort: 'requiredFirst',
      exclude: ['headingAs'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof RichTextQuote>;

export const quote: Story = {
  render: args => (
    <Section className="tw-max-w-4xl">
      <RichTextQuote {...args} />
    </Section>
  ),
  args: {
    quote:
      'xNFTs take a radically practical approach to solving two of web3’s main problems today, decentralization and distribution, with profound implications.',
    author: {
      name: 'Austin Federa',
      role: 'Head of strategy',
      company: 'Solana Foundation',
    },
  },
};
