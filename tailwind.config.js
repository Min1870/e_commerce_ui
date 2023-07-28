/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        program: "url('/public/gold.png')",
        newFlavours: "url('/public/program.jpg')",
        vape: "url('/public/vape.jpg')",
        pod: "url('/public/pods.png')",
        newRelease3: "url('/public/newRelease3.jpg')",
        newRelease4: "url('/public/newRelease4.jpg')",
      },
    },
  },
  plugins: [],
};
