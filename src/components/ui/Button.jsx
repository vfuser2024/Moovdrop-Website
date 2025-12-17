import React from "react";

/**
 * Reusable Button component with consistent styling variants
 * @param {string} variant - Button style variant: 'primary', 'accent', 'ghost', 'nav'
 * @param {string} size - Button size: 'sm', 'md', 'lg'
 * @param {string} className - Additional custom classes
 * @param {React.ReactNode} children - Button content
 * @param {string} href - Optional link href (renders as <a> tag)
 * @param {object} props - Additional props passed to button/anchor element
 */
export const Button = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  href,
  ...props
}) => {
  const baseStyles =
    "flex items-center justify-center gap-2.5 transition-colors duration-200 font-sans font-bold text-center whitespace-nowrap";

  const variants = {
    primary:
      "bg-moovdrop-primary text-white hover:opacity-90 rounded-moovdrop-full",
    accent:
      "bg-moovdrop-accent text-white hover:bg-[#c06d00] rounded-moovdrop-full",
    ghost: "bg-black/15 text-white hover:bg-black/25 rounded-moovdrop-xl",
    nav: "bg-black/15 text-white hover:bg-black/25 rounded-moovdrop-xl",
  };

  const sizes = {
    sm: "px-6 py-1.5 text-base",
    md: "px-8 py-3 text-lg",
    lg: "px-12 py-3 text-lg",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};
