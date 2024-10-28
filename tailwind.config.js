import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(circle at var(--tw-radial-x, 50%) var(--tw-radial-y, 50%), var(--tw-gradient-stops))',
      },
      animation: {
        slide: 'slide 30s linear infinite',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities }) {
      matchUtilities({
        'radial-x': (value) => ({ '--tw-radial-x': value }),
        'radial-y': (value) => ({ '--tw-radial-y': value }),
      })
    }),
  ],
}
