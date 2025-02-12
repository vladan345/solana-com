import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from './';
import { Icon } from '../../molecules/Icon';

const meta: Meta<typeof Tooltip> = {
  title: 'Molecules/Tooltip',
  parameters: {
    controls: {
      exclude: ['className'],
    },
  },
  component: Tooltip,
  argTypes: {
    title: {
      control: 'text',
    },
    tip: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const tooltip: Story = {
  render: args => {
    return (
      <div className="tw-w-screen tw-h-screen tw-grid tw-place-items-center">
        <Tooltip {...args}>
          <Icon id="github" />
        </Tooltip>
      </div>
    );
  },
  args: {
    withArrow: true,
    title: 'This is a title',
    tip: 'This is a tip. This part is typically longer than the title and can be used to provide more information',
  },
};
