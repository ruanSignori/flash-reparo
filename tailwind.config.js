import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: 'var(--color-primary)',
        bg: {
          DEFAULT: 'var(--color-bg)',
          light: 'var(--color-bg-light)',
          gray: {
            DEFAULT: 'var(--color-bg-gray)',
            light: 'var(--color-bg-gray-light)',
          },
        },
        black: 'var(--color-black)',
        white: 'var(--color-white)',
        green: 'var(--color-green)',
        red: 'var(--color-red)',
        gray: 'var(--color-gray)'
      },
    },
  },
  plugins: [],
};
