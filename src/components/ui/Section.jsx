import React from "react";

/**
 * @deprecated Use Section from components/layout instead
 * Keeping for backwards compatibility
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
    <h2 className={`heading-primary text-center px-4 ${className}`}>
      {children}
    </h2>
  );
};

/**
 * SectionSubheading component for consistent section subtitles
 */
export const SectionSubheading = ({ children, className = "" }) => {
  return (
    <p className={`body-large ${className}`}>
      {children}
    </p>
  );
};

/**
 * @deprecated Use Container from components/layout instead
 * Keeping for backwards compatibility
 */
export const Container = ({ maxWidth = "7xl", className = "", children }) => {
  const maxWidths = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    "2xl": "max-w-screen-2xl",
    "7xl": "max-w-7xl",
    custom: "max-w-container",
  };

  return (
    <div className={`mx-auto w-full ${maxWidths[maxWidth]} ${className}`}>
      {children}
    </div>
  );
};
