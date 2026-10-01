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
        surface: "#FBF8F1",
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
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "Segoe UI", "Arial", "sans-serif"],
      },
      backdropBlur: {
        apple: "20px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(18,38,26,0.04), 0 12px 32px -14px rgba(18,38,26,0.18)",
        "card-hover": "0 2px 6px rgba(18,38,26,0.06), 0 24px 48px -16px rgba(18,38,26,0.28)",
        hard: "0 10px 25px -10px rgba(18,38,26,0.35)",
      },
      borderRadius: {
        apple: "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
