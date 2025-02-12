import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { RichTextStat } from '.';
import { Section } from '../../../molecules/Section';

const meta: Meta<typeof RichTextStat> = {
  title: 'Components/Rich Text',
  component: RichTextStat,
  parameters: {
    controls: {
      sort: 'requiredFirst',
      exclude: ['headingAs'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof RichTextStat>;

export const stat: Story = {
  render: args => (
    <Section className="tw-max-w-5xl">
      <RichTextStat {...args} />
    </Section>
  ),
  args: {
    stats: [
      {
        stat: '10 million',
        description: 'this is placeholder copy for this bulletpoint',
      },
      {
        stat: '75% reduction',
        description: 'this is placeholder copy for this bulletpoint',
      },
      {
        stat: 'Improved efficiency',
        description: 'this is placeholder copy for this bulletpoint',
      },
      {
        stat: '10 million',
        description: 'this is placeholder copy for this bulletpoint',
      },
    ],
  },
};
