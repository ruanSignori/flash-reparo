import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['*.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Instrument Sans', ...defaultTheme.fontFamily.sans],
        morganite: ['Morganite', 'sans-serif'],  
        morganite_italic: ['Morganite Italic', 'sans-serif']
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
      screens: {
        'mobile-sm': { max: '450px' }, // Classe personalizada para telas menores que 450px
      },
    },
  },
  plugins: [],
};
