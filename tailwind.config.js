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
      fontSize: {
        '12xl': '14rem',
        '14xl': '16rem'        
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
        'mobile-sm': { max: '450px' }
      },
      transitionDelay: {
        50: "50ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        250: "250ms",
        300: "300ms",
      },
    },
  },
  plugins: [],
};
