/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          purple: "#5B21B6",
          red: "#E11D2E",
          yellow: "#F5C518",
          ink: "#0B1220",
        },
      },
    },
  },
  plugins: [],
};
