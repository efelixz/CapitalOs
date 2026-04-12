/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#040d1b',
        card: '#0f172a',
        primary: '#00f2ff', // cyan
        accent: '#10b981', // emerald
        gold: '#facc15',
        muted: '#94a3b8',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'premium': '0 25px 50px -12px rgba(0, 242, 255, 0.05)',
        'insight': '0 20px 25px -5px rgba(250, 204, 21, 0.1)',
      }
    },
  },
  plugins: [],
}
