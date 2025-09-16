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
        primary: {
          base: "#C9DABF", 
          100: "#EAF4E5", 
          200: "#A4B29B", 
          250: "#b5c4ac", 
          300: '#808B79'
        },
        secondary: {
          base: "#D0E4E7",
          50: "#f0f6f7",
          100: "#E9F2F4",
          150: "#CCDFE1",
          200: "#BFD7DA",
          250: "#A7CDD2",
          275: '#C3CFD0',
          300: "#9BAFB1",
          350: "#96b2b4",
          400: "#788E90",
          


        },
        neutral: {
          100: "#F5F5F5",
          200: "#E5E5E5",
          900: "#111827",
        }
      }
    },
  },
  plugins: [],
};
export default config;
