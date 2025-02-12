import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Input, InputProps } from './';

const meta: Meta<typeof Input> = {
  title: 'Molecules/Input',
  component: Input,
  parameters: {
    controls: {
      exclude: ['value'],
    },
  },
};

const render = ({ value, ...args }: InputProps) => {
  const [inputValue, setValue] = React.useState(value);

  return (
    <div className="tw-w-screen tw-h-screen tw-grid tw-place-items-center">
      <Input {...args} onChange={({ target }) => setValue(target.value)} value={inputValue} />
    </div>
  );
};

export default meta;
type Story = StoryObj<typeof Input>;

export const standard: Story = {
  render,
  args: {
    value: 'email@example.com',
    helperText: 'This is a hint text to help user.',
    label: 'Email',
    size: 'md',
    disabled: false,
    error: false,
  },
};

export const withButton: Story = {
  render,
  args: {
    value: 'email@example.com',
    helperText: 'This is a hint text to help user.',
    label: 'Email',
    size: 'sm',
    disabled: false,
    error: false,
    button: {
      label: 'Sign up',
      hierarchy: 'secondary',
    },
  },
};
