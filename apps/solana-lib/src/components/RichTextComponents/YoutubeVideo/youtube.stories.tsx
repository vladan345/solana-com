import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { YoutubeVideo } from '..';
import { Section } from '../../../molecules/Section';

const meta: Meta<typeof YoutubeVideo> = {
  title: 'Components/Rich Text',
  component: YoutubeVideo,
  parameters: {
    controls: {
      sort: 'requiredFirst',
      exclude: ['headingAs'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof YoutubeVideo>;

export const youtubeVideo: Story = {
  render: args => (
    <Section className="tw-max-w-4xl">
      <YoutubeVideo {...args} />
    </Section>
  ),
  args: {
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
};
