/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#dc2626',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 