/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        program: "url('../src/assets/gold.png')",
        newFlavours: "url('../src/assets/program.jpg')",
        vape: "url('../src/assets/vape.jpg')",
        pod: "url('../src/assets/pods.png')",
        newRelease3: "url('../src/assets/newRelease3.jpg')",
        newRelease4: "url('../src/assets/newRelease4.jpg')",
      },
    },
  },
  plugins: [],
};
