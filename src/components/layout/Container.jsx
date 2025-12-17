import React from "react";

/**
 * Container component - provides consistent max-width and horizontal padding
 * @param {string} size - Container width: 'sm' | 'md' | 'lg' | 'xl' | 'full'
 * @param {string} className - Additional custom classes
 */
export const Container = ({ size = "xl", className = "", children }) => {
  const sizes = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-container", // 1300px
    full: "max-w-full",
  };

  return (
    <div className={`mx-auto w-full px-4 md:px-20 ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
};
