/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "serif"],
      },
      backgroundImage: {
        "aside-bg": "url('./src/assets/bg.png')",
      },
    },
  },
  plugins: [daisyui],
};
