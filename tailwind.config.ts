import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: '#07308C',
        navy2: '#001D6C',
        navy3: '#00204E',
        'nav-item': '#4F4F4E',
        'base-color': '21272A',
        'blue-1': '#687DAB',
        'content-bullet': '#C9CBC7',
        'content-color': '#454545',
      },
      // Add the font family using the css variables we created in the layout.tsx
      fontFamily: {
        'open-sans': ['var(--font-open-sans)', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
        karla: ['var(--font-karla)', 'sans-serif'],
      },
      fontSize: {
        xs: '11px', // Extra small
        sm: '13px', // Small
        base: '16px', // Base (default size)
        lg: '18px', // Large
        xl: '20px', // Extra large
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '42px',
        special: '96px',
      },
      opacity: {
        43: '0.43', // Add 43% opacity
      },
    },
  },
  plugins: [],
};

export default config;
