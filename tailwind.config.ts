import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#1f6b3b",
          50: "#f1f8f2",
          100: "#dcefe0",
          600: "#1f6b3b",
          700: "#175630",
          800: "#123f24",
          900: "#0c2a18",
          950: "#071a0f",
        },
        gold: {
          DEFAULT: "#c8a24a",
          light: "#dcc07f",
          dark: "#a3812f",
        },
        cream: "#f8f6f0",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
