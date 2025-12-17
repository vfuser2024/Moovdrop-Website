import React from "react";

/**
 * Section component - provides consistent section layouts with background variants
 * @param {string} bg - Background color: 'white' | 'cream' | 'primary' | 'primary-dark'
 * @param {string} className - Additional custom classes
 */
export const Section = ({ bg = "white", className = "", children, ...props }) => {
  const backgrounds = {
    white: "bg-white",
    cream: "bg-moovdrop-cream",
    primary: "bg-moovdrop-primary",
    "primary-dark": "bg-moovdrop-primary-dark",
  };

  return (
    <section className={`w-full ${backgrounds[bg]} ${className}`} {...props}>
      {children}
    </section>
  );
};
