import type { Config } from 'tailwindcss';

// under theme, is where you define your own custom styles for the tailwindcss for this specific project
// you can either extend the default configurations or override them
// extend means you can later combine your own custom configurations with the default utility classes
// you must use Tailwind's predefined category names such as colors, fontFamily, fontSize, etc before adding your custom styles under either extend or override
// under each category, you can then add your custom styles through key-value pairs using your own naming
const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: '340px',
      md: '700px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        'navy-1': '#07308C',
        'navy-2': '#001D6C',
        'navy-3': '#00204E',
        'nav-item': '#4F4F4E',
        'color-base-1': '#21272A',
      },
      // Add the font family using the css variables we created in the layout.tsx
      // reference font css variables because they've been properly declared and made available through the body class.
      // without the body class, the font css variables won't be available to the tailwindcss
      fontFamily: {
        'open-sans': ['var(--font-open-sans)', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
        karla: ['var(--font-karla)', 'sans-serif'],
      },
      fontSize: {
        xs: '12px', // Extra small
        sm: '14px', // Small
        'size-base': '16px', // Base (default size)
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
