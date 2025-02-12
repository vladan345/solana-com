import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button as ButtonComp } from './';

const meta: Meta<typeof ButtonComp> = {
  title: 'Molecules/Button',
  component: ButtonComp,
  parameters: {
    controls: {
      exclude: ['url'],
    },
  },
  argTypes: {
    label: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonComp>;

export const button: Story = {
  render: args => (
    <div className="tw-w-screen tw-h-screen tw-grid tw-place-items-center">
      <ButtonComp {...args} />
    </div>
  ),
  args: {
    label: 'Button CTA',
    hierarchy: 'primary',
    size: 'md',
    disabled: false,
  },
};
