/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'primer': '#f59e0b',
        'primer': '#f59e0b',
        'sekunder': '#CA8A04',
        'nav': '#6b7280'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}