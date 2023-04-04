/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 1.5s linear infinite",
      },
      backdropBlur: {
        sm: "8px",
      },
      colors: {
        "lt-primary": "#FFC107",
        "lt-ground": "#F8F9FA",
        "lt-surface": "#FFFFFF",
        "lt-border": "#DEE2E6",
        "lt-heading": "#212121",
        "lt-text": "#495057",
        "lt-focus": "#FFE69C",
        "dk-primary": "#FFD54F",
        "dk-ground": "#17212F",
        "dk-surface": "#1F2D40",
        "dk-border": "#304562",
        "dk-heading": "#FFFFFF",
        "dk-text": "RGB(255, 255, 255, .87)",
        "dk-focus": "#FFE284",
        "primary-color-text": "#212529",
      },
    },
  },
  plugins: [],
};
