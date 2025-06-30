/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          tailong:   "#00703c", // green
          cormenflex:"#f9a825", // golden yellow
          marksman:  "#b81d24", // red
          charcoal:  "#1c1c1c",
          light:     "#f5f5f4",
        },
      },
    },
  },
  plugins: [],
};
