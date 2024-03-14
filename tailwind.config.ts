import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1500px",
      },
    },
    extend: {
      fontFamily: {
        colus: ["'Colus Regular'"],
      },
      backgroundImage: {
        hero: "url('/images/hero_bg.png')",
        sale: "url('/images/sale.png')",
        meet: "url('/images/meet-bg.png')",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        white2: "#F8F2E6",
        gray: "#6D6875",
        gray2: "#858585",
        gray3: "#444247",
        orange: "#F0B366",
        orange2: "#F4A261",
        orange3: "#FF8E00",
        red: "#E63946",
        "light-yellow": "#F8F2E6",
        green: "#2A9D8F",
        brown: "#32110A",
        blue: "#457B9D",
        black: "#302E32",
        sand: "#DDCAC0",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
