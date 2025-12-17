import React from "react";

/**
 * Stack component - vertical or horizontal spacing between children
 * @param {string} direction - Layout direction: 'vertical' | 'horizontal'
 * @param {string} spacing - Gap size: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
 * @param {string} align - Alignment: 'start' | 'center' | 'end' | 'stretch'
 * @param {string} justify - Justify: 'start' | 'center' | 'end' | 'between'
 * @param {string} className - Additional custom classes
 */
export const Stack = ({
  direction = "vertical",
  spacing = "md",
  align = "start",
  justify = "start",
  className = "",
  children,
  ...props
}) => {
  const directions = {
    vertical: "flex-col",
    horizontal: "flex-row",
  };

  const spacings = {
    xs: "gap-2",
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-12",
    "2xl": "gap-16",
  };

  const alignments = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
  };

  const justifications = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
  };

  return (
    <div
      className={`flex ${directions[direction]} ${spacings[spacing]} ${alignments[align]} ${justifications[justify]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
