import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Pagination } from './';

const meta: Meta<typeof Pagination> = {
  title: 'Molecules/Pagination',
  component: Pagination,
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const pagination: Story = {
  render: args => (
    <div className="tw-w-screen tw-h-screen tw-grid tw-place-items-center">
      <Pagination {...args} />
    </div>
  ),
  args: {
    count: 5,
    activeItem: 0,
  },
};
