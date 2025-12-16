/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // MoovDrop Brand Colors
        moovdrop: {
          primary: "var(--color-primary)",
          "primary-dark": "var(--color-primary-dark)",
          "primary-light": "var(--color-primary-light)",
          accent: "var(--color-accent)",
          "accent-dark": "var(--color-accent-dark)",
          background: "var(--color-background)",
          cream: "var(--color-background-cream)",
          dark: "var(--color-background-dark)",
        },
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          tertiary: "var(--color-text-tertiary)",
          placeholder: "var(--color-text-placeholder)",
          white: "var(--color-text-white)",
        },
      },
      fontFamily: {
        sans: ["var(--font-family-sans)"],
        serif: ["var(--font-family-serif)"],
        "dm-sans": ["var(--font-family-sans)"],
        rem: ["var(--font-family-serif)"],
      },
      fontSize: {
        xs: ["var(--font-size-xs)", { lineHeight: "18.2px", letterSpacing: "-0.07px" }],
        sm: ["var(--font-size-sm)", { lineHeight: "22.4px", letterSpacing: "-0.35px" }],
        base: ["var(--font-size-base)", { lineHeight: "22.4px", letterSpacing: "-0.40px" }],
        lg: ["var(--font-size-lg)", { lineHeight: "25.2px", letterSpacing: "-0.45px" }],
        xl: ["var(--font-size-xl)", { lineHeight: "28px", letterSpacing: "-0.10px" }],
        "2xl": ["var(--font-size-2xl)", { lineHeight: "34.4px", letterSpacing: "-0.61px" }],
        "3xl": ["var(--font-size-3xl)", { lineHeight: "31.5px", letterSpacing: "-1.20px" }],
        "4xl": ["var(--font-size-4xl)", { lineHeight: "normal", letterSpacing: "-1.08px" }],
        "5xl": ["var(--font-size-5xl)", { lineHeight: "55px", letterSpacing: "-1.50px" }],
        "6xl": ["var(--font-size-6xl)", { lineHeight: "69.4px", letterSpacing: "-2.77px" }],
        "7xl": ["var(--font-size-7xl)", { lineHeight: "67.4px", letterSpacing: "-4px" }],
      },
      spacing: {
        "moovdrop-xs": "var(--spacing-xs)",
        "moovdrop-sm": "var(--spacing-sm)",
        "moovdrop-md": "var(--spacing-md)",
        "moovdrop-lg": "var(--spacing-lg)",
        "moovdrop-xl": "var(--spacing-xl)",
        "moovdrop-2xl": "var(--spacing-2xl)",
        "moovdrop-3xl": "var(--spacing-3xl)",
        "moovdrop-4xl": "var(--spacing-4xl)",
        "moovdrop-5xl": "var(--spacing-5xl)",
        "moovdrop-6xl": "var(--spacing-6xl)",
      },
      borderRadius: {
        "moovdrop-sm": "var(--radius-sm)",
        "moovdrop-md": "var(--radius-md)",
        "moovdrop-lg": "var(--radius-lg)",
        "moovdrop-xl": "var(--radius-xl)",
        "moovdrop-full": "var(--radius-full)",
      },
      boxShadow: {
        "moovdrop": "var(--shadow-md)",
        "moovdrop-inset": "var(--shadow-inset)",
      },
      transitionDuration: {
        "moovdrop-fast": "var(--transition-fast)",
        "moovdrop-base": "var(--transition-base)",
        "moovdrop-slow": "var(--transition-slow)",
      },
    },
  },
  plugins: [],
};
