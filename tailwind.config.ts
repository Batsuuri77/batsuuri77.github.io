import type { Config } from "tailwindcss";

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        footer_bg: "#0077b6",
        switchNight: "#283B67",
        borderBlack: "#0F172A",
      },
      fontFamily: {
        mr: ["var(--font-mr)"],
        in: ["var(--font-in)"],
        sm: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      fontSize: {
        base: "1.125rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
