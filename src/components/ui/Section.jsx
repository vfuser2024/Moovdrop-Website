import React from "react";

/**
 * Reusable Section component for consistent section layouts
 * @param {string} variant - Section style variant: 'default', 'dark', 'cream'
 * @param {string} className - Additional custom classes
 * @param {React.ReactNode} children - Section content
 * @param {object} props - Additional props
 */
export const Section = ({
  variant = "default",
  className = "",
  children,
  ...props
}) => {
  const baseStyles = "flex flex-col items-center relative w-full";

  const variants = {
    default: "bg-white",
    dark: "bg-moovdrop-primary-dark",
    cream: "bg-moovdrop-cream",
    primary: "bg-moovdrop-primary",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  return (
    <div className={combinedClassName} {...props}>
      {children}
    </div>
  );
};

/**
 * SectionHeading component for consistent section titles
 */
export const SectionHeading = ({ children, className = "" }) => {
  return (
    <h2
      className={`font-rem font-normal text-text-primary text-3xl md:text-4xl lg:text-5xl text-center px-4 ${className}`}
    >
      {children}
    </h2>
  );
};

/**
 * SectionSubheading component for consistent section subtitles
 */
export const SectionSubheading = ({ children, className = "" }) => {
  return (
    <p
      className={`font-dm-sans font-normal text-text-secondary text-lg md:text-xl ${className}`}
    >
      {children}
    </p>
  );
};

/**
 * Container component for consistent max-width containers
 */
export const Container = ({ maxWidth = "7xl", className = "", children }) => {
  const maxWidths = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    "2xl": "max-w-screen-2xl",
    "7xl": "max-w-7xl",
    custom: "max-w-[1300.42px]",
  };

  return (
    <div className={`mx-auto w-full ${maxWidths[maxWidth]} ${className}`}>
      {children}
    </div>
  );
};
