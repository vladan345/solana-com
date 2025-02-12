import { cva } from 'class-variance-authority';
import styles from './CodeBlockStyles.module.scss';

export const wrapper = cva(['tw-relative', 'tw-rounded-md', 'tw-border', 'tw-border-gray-500', 'tw-shadow-lg', 'tw-overflow-hidden', styles.codeblockTheme]);

export const pre = cva(
  ['tw-max-w-full', 'tw-block', 'tw-p-3', 'tw-bg-gray-900', 'tw-break-all', 'tw-mb-0', styles.scrollbar],
  {
    variants: {
      language: {
        jsx: ['language-jsx'],
        typescript: ['language-typescript'],
        tsx: ['language-tsx'],
        rust: ['language-rust'],
        json: ['language-json'],
        bash: ['language-bash'],
        latex: ['language-latex'],
      },
    },
  }
);

export const copyBar = cva(['tw-flex', 'tw-justify-between', 'tw-items-center', 'tw-py-1', 'tw-px-3', 'tw-bg-purple-900', 'tw-text-sm']);

export const copyButton = cva(['tw-text-green-400', 'tw-font-bold']);

export const currentLanguage = cva(['tw-text-white']);
