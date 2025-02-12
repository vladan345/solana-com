import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Icon } from './';

const meta: Meta<typeof Icon> = {
  title: 'Molecules/Icon',
  parameters: {
    controls: {
      exclude: ['className', 'stroke', 'fill'],
    },
  },
  component: Icon,
  argTypes: {
    size: {
      control: 'number',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const icon: Story = {
  render: args => (
    <div className="tw-w-screen tw-h-screen tw-grid tw-place-items-center">
      <Icon {...args} />
    </div>
  ),
  args: {
    size: 32,
    id: 'circle',
    className: 'tw-text-purple-500',
    stroke: 'currentColor',
  },
};
