import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { HtmlParser } from '.';
import { Section } from '../../../molecules/Section';

const meta: Meta<typeof HtmlParser> = {
  title: 'Components/Rich Text',
  component: HtmlParser,
  parameters: {
    controls: {
      sort: 'requiredFirst',
      exclude: ['headingAs'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof HtmlParser>;

export const htmlParser: Story = {
  render: args => (
    <Section className="tw-max-w-4xl">
      <HtmlParser {...args} />
    </Section>
  ),
  args: {
    rawHtml: `
        <h1>Heading 1</h1>
        <p>Text with a <strong>strong</strong> tag.</p>
        <p>For security reasons, all scripts are stripped. Click the button to test. Nothing should happen.</p>
        <button onclick="alert('Clicked');">Hover Me</button>
        <h2>Heading 2</h2>
        <p>Text with a <em>em</em> tag.</p>
        <h3>Heading 3</h3>
        <p>Text with a <a href="https://solana.com">link</a> tag.</p>
        <h4>Heading 4</h4>
        <p>Just some text</p>
        <h5>Heading 5</h5>
        <p>Text with a <del>del</del> tag.</p>
        <h2>Solana Emissions</h2>
        <p>Starting today, the Solana Foundation is leading the charge by making Solana the first major smart-contract blockchain to have its emissions measured in real time.</p>
        <p>The emissions tracker was developed in collaboration with Trycarbonara, a carbon data platform, and embeds software directly on Solana nodes to provide the most comprehensive and accurate measurement of the blockchain’s footprint to date. This measurement dynamically changes based on the throughput of individual validators, when they’re online and offline and changes in the validator network over time.This data is includes, for the first time:</p>
        <h2>This is a great day for the communities of both Helium and Solana.</h2>
        <ul>
          <li><strong>Emissions measurement of RPC nodes</strong> via instrumentation of the underlying hardware</li>
          <li><strong>Emissions granularity</strong> at the server level incorporating geolocation of validator and RPC nodes</li>
          <li><strong>Marginal (or consequential) emissions</strong> based on the incremental emissions impact of new demand as it relates to the overall distribution of grid supply. This framework can be useful when gauging the environmental impact of changes and optimizations to energy consumption and accounts for the renewable energy mix of different sources of electricity.</li>
          <li><strong>Embodied emissions</strong> based on the manufacturing, transportation, and end-of-life management of the hardware infrastructure of the Solana Network.</li>
          <li><strong>Power Usage Effectiveness (PUE)</strong> which describes the overall efficiency of a data center.</li>
        </ul>
        <h2>This is a great day for the communities of both Helium and Solana.</h2>
        <ol>
          <li><strong>Emissions measurement of RPC nodes</strong> via instrumentation of the underlying hardware</li>
          <li><strong>Emissions granularity</strong> at the server level incorporating geolocation of validator and RPC nodes</li>
          <li><strong>Marginal (or consequential) emissions</strong> based on the incremental emissions impact of new demand as it relates to the overall distribution of grid supply. This framework can be useful when gauging the environmental impact of changes and optimizations to energy consumption and accounts for the renewable energy mix of different sources of electricity.</li>
          <li><strong>Embodied emissions</strong> based on the manufacturing, transportation, and end-of-life management of the hardware infrastructure of the Solana Network.</li>
          <li><strong>Power Usage Effectiveness (PUE)</strong> which describes the overall efficiency of a data center.</li>
        </ol>
        `,
  },
};
