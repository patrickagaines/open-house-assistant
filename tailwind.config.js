/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "lt-primary": "#FFC107",
        "lt-ground": "#F8F9FA",
        "lt-surface": "#FFFFFF",
        "lt-border": "#DEE2E6",
        "lt-heading": "#212121",
        "lt-text": "#6C757D",
        "lt-focus": "#FFE69C",
        "dk-primary": "#FFD54F",
        "dk-ground": "#17212F",
        "dk-surface": "#1F2D40",
        "dk-border": "#304562",
        "dk-heading": "RGB(255, 255, 255, .87)",
        "dk-text": "RGB(255, 255, 255, .6)",
        "dk-focus": "#FFE284",
      },
    },
  },
  plugins: [],
};
