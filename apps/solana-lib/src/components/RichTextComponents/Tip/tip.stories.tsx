import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Tip } from '.';
import { Section } from '../../../molecules/Section';

const meta: Meta<typeof Tip> = {
  title: 'Components/Rich Text',
  component: Tip,
  parameters: {
    controls: {
      sort: 'requiredFirst',
      exclude: ['headingAs'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tip>;

export const tip: Story = {
  render: args => (
    <Section className="tw-max-w-4xl">
      <Tip {...args} />
    </Section>
  ),
  args: {
    title: 'Hot Tip',
    tip:
      'Lorem ipsum dolor sit amet consectetur. Et enim sit donec semper viverra ac nisl enim in. Justo eget placerat consequat tristique. Vulputate lacinia felis orci pellentesque morbi eget cursus nulla. Turpis.',
  },
};
