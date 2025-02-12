import { Meta, StoryObj } from '@storybook/react';

import { CaseDetailsHero } from '.';

const meta: Meta<typeof CaseDetailsHero> = {
  title: 'Components/Hero',
  component: CaseDetailsHero,
  parameters: {
    controls: {
      sort: 'requiredFirst',
      exclude: ['headingAs'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof CaseDetailsHero>;

export const caseDetail: Story = {
  args: {
    title: 'Discord Partners with Solana for Ultimate Technology Upgrade',
    author: {
      name: 'Austin Federa',
    },
    breadCrumbs: [
      {
        label: 'Settings',
      },
      {
        label: 'Team',
      },
    ],
    image: '/images/discord_hero.png',
    sideBar: {
      sidebarLogo: '/images/Discord.png',
      sideBarItems: [
        { title: 'Company Name', value: 'Discord' },
        { title: 'Industry', value: 'Technology' },
        { title: 'Solana Technology', value: '500+' },
        { title: 'Years with Solana', value: '5+' },
      ],
    },
  },
};
