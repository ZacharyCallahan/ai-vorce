/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "primary": "#c9a6d8",
        "secondary": "#b95fa7",
        "accent": "#ff77e5",
        "background": "#f2f1f9",
        "text-color": "#0a0812",
      },
      gridTemplateColumns: {
        'fluid': 'repeat(auto-fit, minmax(15rem, 2fr))',
        'product-fluid': 'repeat(auto-fit, minmax(15rem, 1fr))',
      },
    },
  },
  plugins: [],
}
