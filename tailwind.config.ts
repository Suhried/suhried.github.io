import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0B0B0B',
          lighter: '#121212',
          border: '#2a2a2a',
        },
        accent: {
          orange: '#F36A2F',
          green: '#C8FF3D',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#9A9A9A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Inconsolata', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config;
