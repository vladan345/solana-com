/** @type {import('tailwindcss').Config} */
const { colors } = require('./src/theme/colors');
const { fontSize, fontFamily, letterSpacing } = require('./src/theme/font');
const { gradients } = require('./src/theme/gradients');
const { boxShadow } = require('./src/theme/shadows');
const { screens } = require('./src/theme/screens');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', '../../apps/solana-lib/src/**/*.{js,jsx,ts,tsx}'],
  prefix: 'tw-',
  theme: {
    fontFamily,
    fontSize,
    colors,
    boxShadow,
    screens,
    extend: {
      backgroundImage: gradients,
      letterSpacing,
      fontSize: {
        24: '24px',
        30: '30px',
        36: '36px',
      },
      padding: {
        18: '4.5rem',
      },
      screens: {
        tablet: '768px',
        md: '834px',
      },
      height: {
        device: '100dvh',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '9/16': '9 / 16',
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
};
