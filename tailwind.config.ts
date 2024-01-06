import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#2C2C61',
        'secondary-color': '#1A1A8E',
        'bg-color': '#0C0C1D',
        'accent-color': '#49DE2B'
      },
    },
  },
  plugins: [],
}
export default config
