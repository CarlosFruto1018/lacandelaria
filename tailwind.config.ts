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
          DEFAULT: "#0B192C",
          50: "#E9ECF1",
          100: "#D3D9E3",
          200: "#A7B3C7",
          300: "#7B8DAB",
          400: "#4F678F",
          500: "#2A3F60",
          600: "#1A2C47",
          700: "#122036",
          800: "#0B192C",
          900: "#070F1C",
        },
        gold: {
          DEFAULT: "#D4AF37",
          50: "#FBF5E3",
          100: "#F6E9C3",
          200: "#EDD68A",
          300: "#E4C451",
          400: "#D4AF37",
          500: "#B4922A",
          600: "#8C7120",
        },
        surface: "#F5F5F7",
        govco: {
          DEFAULT: "#3366CC",
          dark: "#2951A3",
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
