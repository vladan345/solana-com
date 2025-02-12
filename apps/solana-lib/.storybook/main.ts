import type { FrameworkOptions, StorybookConfig } from '@storybook/react-webpack5';
import path from 'path'

// Storybook doesn't have correct types for framework
interface Config extends Omit<StorybookConfig, 'framework'> {
  framework: {
    name: '@storybook/nextjs' | '@storybook/react-webpack5'
    options: FrameworkOptions
  }
}

const config: Config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: true,
      },
    },
  ],
  staticDirs: ['./public'],
  framework: {
    name: '@storybook/nextjs', 
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    if(config.resolve){
      config.resolve.modules = [
        ...(config.resolve.modules || []),
        path.resolve(__dirname, "../src"),
      ];

    }

    return config;
  },
  
};
export default config;
