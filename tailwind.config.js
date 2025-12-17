/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        moovdrop: {
          primary: "#7048ce",
          "primary-dark": "#381e61",
          "primary-light": "#cdc6f9",
          accent: "#d97b00",
          "accent-dark": "#c06d00",
          cream: "#f0ede2",
        },
        text: {
          primary: "#1e1d1f",
          secondary: "#57555a",
          tertiary: "#999999",
          placeholder: "#aaaaaa",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "Helvetica", "Arial", "sans-serif"],
        serif: ["REM", "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        xs: ["13px", { lineHeight: "18.2px", letterSpacing: "-0.07px" }],
        sm: ["14px", { lineHeight: "22.4px", letterSpacing: "-0.35px" }],
        base: ["16px", { lineHeight: "22.4px", letterSpacing: "-0.40px" }],
        lg: ["18px", { lineHeight: "25.2px", letterSpacing: "-0.45px" }],
        xl: ["20px", { lineHeight: "28px", letterSpacing: "-0.10px" }],
        "2xl": ["24px", { lineHeight: "34.4px", letterSpacing: "-0.61px" }],
        "3xl": ["32px", { lineHeight: "31.5px", letterSpacing: "-1.20px" }],
        "4xl": ["36px", { lineHeight: "normal", letterSpacing: "-1.08px" }],
        "5xl": ["50px", { lineHeight: "55px", letterSpacing: "-1.50px" }],
        "6xl": ["69.4px", { lineHeight: "69.4px", letterSpacing: "-2.77px" }],
        "7xl": ["80px", { lineHeight: "67.4px", letterSpacing: "-4px" }],
      },
      spacing: {
        18: "4.5rem", // 72px
        22: "5.5rem", // 88px
      },
      maxWidth: {
        container: "1300px",
      },
      borderRadius: {
        "moovdrop-sm": "15.61px",
        "moovdrop-md": "20px",
        "moovdrop-lg": "26.01px",
        "moovdrop-xl": "50px",
        "moovdrop-full": "866.95px",
      },
      boxShadow: {
        moovdrop: "4px 4px 20px 0px rgba(102, 86, 140, 0.15)",
        "moovdrop-inset": "inset 4px 4px 10px rgba(0, 0, 0, 0.25), inset 2px -2px 10px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
