import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C89B3C",
          light: "#E2B96A",
          dark: "#9E7B2E",
        },
        navy: {
          DEFAULT: "#0D2B5B",
          light: "#1A4080",
          dark: "#081D3E",
        },
        sky: {
          accent: "#6EC6FF",
        },
        orange: {
          accent: "#F28C28",
        },
        ink: "#111111",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-raleway)", "Helvetica", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "slide-right": "slideRight 0.6s ease forwards",
        shimmer: "shimmer 2s infinite",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(200,155,60,0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(200,155,60,0)" },
        },
      },
      backgroundImage: {
        "gradient-gold": "linear-gradient(135deg, #C89B3C 0%, #E2B96A 50%, #9E7B2E 100%)",
        "gradient-navy": "linear-gradient(180deg, #0D2B5B 0%, #081D3E 100%)",
        "gradient-hero": "linear-gradient(135deg, rgba(13,43,91,0.92) 0%, rgba(8,29,62,0.85) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
