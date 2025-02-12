import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Select, SelectProps } from '.';

const meta: Meta<typeof Select> = {
  title: 'Molecules/Select',
  component: Select,
  parameters: {
    controls: {
      exclude: ['value'],
    },
  },
};

const render = ({ value, ...args }: SelectProps) => {
  const [inputValue, setValue] = React.useState(value);

  return (
    <div className="tw-w-screen tw-h-screen tw-grid tw-place-items-center">
      <Select {...args} onChange={({ target }) => setValue(target.value)} value={inputValue} />
    </div>
  );
};

export default meta;
type Story = StoryObj<typeof Select>;

export const standard: Story = {
  render,
  args: {
    value: 'Select an option...',
    helperText: 'This is a hint text to help user.',
    label: 'Select Label',
    size: 'md',
    options: [
      { label: "Select an option...", value: "default" },
      { label: "Option 1", value: '1' },
      { label: "Option 2", value: '2' },
      { label: "Option 3", value: '3' },
    ],
    disabled: false,
    error: false,
  },
};
