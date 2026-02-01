import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          purple: '#D946EF',
          cyan: '#06B6D4',
          pink: '#EC4899',
          blue: '#3B82F6',
        },
      },
      boxShadow: {
        glow: '0 0 30px rgba(217, 70, 239, 0.5)',
        'glow-cyan': '0 0 30px rgba(6, 182, 212, 0.5)',
      },
    },
  },
};

export default config;
