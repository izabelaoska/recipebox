import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'main-title': '#27272A',
        'recipe-title': '#3F3F46',
        'bookmark-title': '#FFFFFF',
        'button-bg-dark': '#18181B',
        'button-bg': '#555555',
        'drawer-bg': '#18181B',
      },
      fontWeight: {
        'font-semibold': '600',
        'font-medium': '500',
        'font-normal': '400',
      },
      letterSpacing: {
        custom: '0.5em',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light'],
  },
}
export default config
