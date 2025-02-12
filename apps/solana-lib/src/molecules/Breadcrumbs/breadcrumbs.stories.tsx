import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Breadcrumbs } from './';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Molecules/Breadcrumbs',
  component: Breadcrumbs,
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const breadcrumbs: Story = {
  render: args => (
    <div className="tw-w-screen tw-h-screen tw-grid tw-place-items-center">
      <div className="tw-w-96">
        <Breadcrumbs {...args} />
      </div>
    </div>
  ),
  args: {
    breadcrumbs: [
      {
        label: 'Settings',
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      },
      {
        label: 'Dashboard',
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      },
      {
        label: 'Team',
        link: 'https://www.google.com',
      },
    ],
  },
};
