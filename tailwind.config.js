/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",     // adjust to ./app/** if you skipped src/
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.mdx"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#b81d24",
          green: "#00703c",
          yellow: "#f9a825",
          charcoal: "#1c1c1c",
          light: "#fafafa",
        },
      },
    },
  },
  plugins: [],
};
