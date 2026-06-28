import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        surface: {
          50: "#fdfdfc",
          100: "#f8f8f6",
          200: "#f2f2f0",
          300: "#ebebe8",
        },
        edge: {
          DEFAULT: "#e2e2df",
          light: "#ededeb",
          mid: "#d5d5d2",
        },
        accent: {
          DEFAULT: "#2d2d2c",
          hover: "#1a1a1a",
          muted: "#5c5c5a",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "Fira Code", "monospace"],
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03)",
        "card-hover":
          "0 4px 16px rgba(0,0,0,0.06), 0 2px 4px rgba(0,0,0,0.04)",
        subtle: "0 1px 2px rgba(0,0,0,0.04)",
      },
    },
  },
  plugins: [],
} satisfies Config;
