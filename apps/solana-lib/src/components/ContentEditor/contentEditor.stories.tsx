import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { ContentEditor } from '.';
import { HtmlParser, RichTextQuote } from '../../components/RichTextComponents';

const meta: Meta<typeof ContentEditor> = {
  title: 'Components/Content Editor',
  component: ContentEditor,
  parameters: {
    controls: {
      exclude: ['url'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContentEditor>;

export const contentEditor: Story = {
  render: args => (
    <div className="tw-py-96">
      <ContentEditor {...args} />
      <div className="tw-h-96" />
    </div>
  ),
  args: {
    callToAction: {
      eyebrow: 'JOIN Solana',
      headline: 'Start your free trial',
      description:
        'Solana Ventures, Forte, and Griffin Gaming Partners announced they will invest $150 million in blockchain games.',
      button: {
        url: 'https://tinyurl.com/yv59wtk9',
        label: 'Get started',
      },
    },
    tocHeadline: 'In this article',
    children: (
      <>
        <HtmlParser
          rawHtml="
          <h2>Solana Emissions</h2>
            <p>Starting today, the Solana Foundation is leading the charge by making Solana the first major smart-contract blockchain to have its emissions measured in real time.</p>
            <p>The emissions tracker was developed in collaboration with Trycarbonara, a carbon data platform, and embeds software directly on Solana nodes to provide the most comprehensive and accurate measurement of the blockchain’s footprint to date. This measurement dynamically changes based on the throughput of individual validators, when they’re online and offline and changes in the validator network over time.This data is includes, for the first time:</p>
            <h2>Communities of both Helium and Solana</h2>
            <ul>
        <li><strong>Emissions measurement of RPC nodes</strong> via instrumentation of the underlying hardware</li>
        <li><strong>Emissions granularity</strong> at the server level incorporating geolocation of validator and RPC nodes</li>
        <li><strong>Marginal (or consequential) emissions</strong> based on the incremental emissions impact of new demand as it relates to the overall distribution of grid supply. This framework can be useful when gauging the environmental impact of changes and optimizations to energy consumption and accounts for the renewable energy mix of different sources of electricity.</li>
        <li><strong>Embodied emissions</strong> based on the manufacturing, transportation, and end-of-life management of the hardware infrastructure of the Solana Network.</li>
        <li><strong>Power Usage Effectiveness (PUE)</strong> which describes the overall efficiency of a data center.</li>
            </ul>
            <h2>Data Set</h2>
            <p>The data set is detail-rich, open, and free to use, making it possible to scrutinize the sources of network emissions down to the validator level. This allows validators and ecosystem projects and teams to look at individual contributions to the network’s carbon footprint and explore mitigation strategies.</p>
            <p>The data set is detail-rich, open, and free to use, making it possible to scrutinize the sources of network emissions down to the validator level. This allows validators and ecosystem projects and teams to look at individual contributions to the network’s carbon footprint and explore mitigation strategies.</p>
            <p>Below is an estimate of the network’s carbon emissions in the past year (the period between April 1, 2022 - March 31, 2023):</p>
            "
        />
        <RichTextQuote
          quote="xNFTs take a radically practical approach to solving two of web3’s main problems today, decentralization and distribution, with profound implications."
          author={{
            name: 'Austin Federa',
            role: 'Head of strategy',
            company: 'Solana Foundation',
          }}
        />
        <HtmlParser
          rawHtml="
          <h2>Solana Stuff</h2>
          <p>Starting today, the Solana Foundation is leading the charge by making Solana the first major smart-contract blockchain to have its emissions measured in real time.</p>
          <p>The emissions tracker was developed in collaboration with Trycarbonara, a carbon data platform, and embeds software directly on Solana nodes to provide the most comprehensive and accurate measurement of the blockchain’s footprint to date. This measurement dynamically changes based on the throughput of individual validators, when they’re online and offline and changes in the validator network over time.This data is includes, for the first time:</p>
          <p>The emissions tracker was developed in collaboration with Trycarbonara, a carbon data platform, and embeds software directly on Solana nodes to provide the most comprehensive and accurate measurement of the blockchain’s footprint to date. This measurement dynamically changes based on the throughput of individual validators, when they’re online and offline and changes in the validator network over time.This data is includes, for the first time:</p>
          <h2>Helium and Solana</h2>
          <ul>
            <li><strong>Emissions measurement of RPC nodes</strong> via instrumentation of the underlying hardware</li>
            <li><strong>Emissions granularity</strong> at the server level incorporating geolocation of validator and RPC nodes</li>
            <li><strong>Marginal (or consequential) emissions</strong> based on the incremental emissions impact of new demand as it relates to the overall distribution of grid supply. This framework can be useful when gauging the environmental impact of changes and optimizations to energy consumption and accounts for the renewable energy mix of different sources of electricity.</li>
            <li><strong>Embodied emissions</strong> based on the manufacturing, transportation, and end-of-life management of the hardware infrastructure of the Solana Network.</li>
            <li><strong>Power Usage Effectiveness (PUE)</strong> which describes the overall efficiency of a data center.</li>
          </ul>
          <h2>More Data Sets</h2>
          <p>The data set is detail-rich, open, and free to use, making it possible to scrutinize the sources of network emissions down to the validator level. This allows validators and ecosystem projects and teams to look at individual contributions to the network’s carbon footprint and explore mitigation strategies.</p>
          <p>Below is an estimate of the network’s carbon emissions in the past year (the period between April 1, 2022 - March 31, 2023):</p>
            "
        />
      </>
    ),
  },
};
