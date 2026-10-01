import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#12261A",
          50: "#EAF1EC",
          100: "#D4E2D8",
          200: "#A9C5B2",
          300: "#7EA88D",
          400: "#4F8363",
          500: "#2F5A40",
          600: "#1E4430",
          700: "#17331F",
          800: "#12261A",
          900: "#0B1A11",
        },
        gold: {
          DEFAULT: "#F5C518",
          50: "#FFF9DB",
          100: "#FFF1AD",
          200: "#FFE57A",
          300: "#FFD84A",
          400: "#F5C518",
          500: "#D9A800",
          600: "#8F6A00",
        },
        surface: "#F6F8F5",
        govco: {
          DEFAULT: "#1A7F37",
          dark: "#12602A",
        },
        malambo: {
          red: "#D62828",
          "red-dark": "#B01E1E",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Inter",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      backdropBlur: {
        apple: "20px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,25,44,0.04), 0 8px 24px rgba(11,25,44,0.06)",
        "card-hover": "0 2px 4px rgba(11,25,44,0.06), 0 16px 40px rgba(11,25,44,0.10)",
      },
      borderRadius: {
        apple: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
