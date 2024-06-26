import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      outfit: ['var(--font-outfit)'],
      lobster: ['var(--font-lobster)'],
    },

    screens: {
      xs: '380px',
      sm: '624px',
      md: '800px',
      lg: '1024px',
      xl: '1400px',
    },
  },
  plugins: [],
};
export default config;
