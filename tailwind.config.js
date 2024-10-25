import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle at var(--tw-radial-x, 50%) var(--tw-radial-y, 50%), var(--tw-gradient-stops))",
      },
      // radial-gradient(circle at 50% -100%, var(--tw-gradient-from) 0%, var(--tw-gradient-from) 10%, var(--tw-gradient-to) 80%, var(--tw-gradient-to))
    },
  },
  plugins: [
    plugin(function ({ matchUtilities }) {
      matchUtilities({
        "radial-x": (value) => ({ "--tw-radial-x": value }),
        "radial-y": (value) => ({ "--tw-radial-y": value }),
      });
    }),
  ],
};
