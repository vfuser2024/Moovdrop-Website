import React from "react";

/**
 * Reusable Card component for feature cards and content containers
 * @param {string} variant - Card style variant: 'feature', 'elevated', 'faq'
 * @param {string} className - Additional custom classes
 * @param {React.ReactNode} children - Card content
 * @param {string} href - Optional link href (renders as <a> tag)
 * @param {object} props - Additional props
 */
export const Card = ({
  variant = "feature",
  className = "",
  children,
  href,
  ...props
}) => {
  const baseStyles = "flex flex-col relative rounded-moovdrop-md";

  const variants = {
    feature:
      "items-start justify-between gap-[30px] px-8 md:px-12 py-9 bg-moovdrop-primary-light hover:opacity-90 transition-opacity",
    elevated:
      "items-center gap-2.5 px-4 md:px-[78px] py-8 md:py-[45px] bg-white shadow-moovdrop",
    vehicle:
      "bg-white rounded-moovdrop-md overflow-hidden border-4 border-solid border-moovdrop-primary-light hover:shadow-lg transition-shadow",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        rel="noopener noreferrer"
        target="_blank"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <div className={combinedClassName} {...props}>
      {children}
    </div>
  );
};

/**
 * Card Header component for consistent card headers
 */
export const CardHeader = ({ icon, title, description, className = "" }) => {
  return (
    <div className={`flex flex-col items-start gap-[30px] w-full flex-1 ${className}`}>
      {icon && (
        <img className="relative w-[70px] h-[70px]" alt="" src={icon} />
      )}
      <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
        {title && (
          <h3 className="relative w-fit font-rem font-normal text-text-primary text-4xl text-center">
            {title}
          </h3>
        )}
        {description && (
          <p className="relative self-stretch font-dm-sans font-normal text-text-primary text-xl">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

/**
 * Card Footer component for consistent card footers
 */
export const CardFooter = ({ children, className = "" }) => {
  return (
    <div className={`relative self-stretch font-dm-sans font-normal text-moovdrop-primary text-base ${className}`}>
      {children}
    </div>
  );
};
