import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: '#07308C',
        'light-blue': '#EBF2F9',
        crisis: '#00204E',
      },
      fontFamily: {
        'open-sans': ['var(--font-open-sans)', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
        karla: ['var(--font-karla)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
