/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-blue": "#3588cb",
        "main-green": "rgb(138 197 62)",
        "color-footer": " #025f80",
      },
    },
  },
  plugins: [],
};
