import React from "react";
import { Button } from "../../../../components/ui";
import { quickLinks } from "../../../../data/navigation";

const navLinks = quickLinks.slice(0, 3); // Use first 3 links for nav

export const Navigation = () => {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between pt-6 pb-12 px-4 md:px-20 w-full bg-moovdrop-primary gap-4">
      <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-auto md:max-w-3xl gap-4 md:gap-22">
        {/* Logo */}
        <div className="w-40 h-11 bg-[url(https://c.animaapp.com/F0ApqIw8/img/screenshot-2025-11-24-at-10-51-18-pm-1@2x.png)] bg-cover bg-center" />

        {/* Navigation Links */}
        <div className="flex items-center justify-center gap-4 md:gap-9 flex-wrap">
          {navLinks.map((link) => (
            <Button key={link.id} variant="nav" size="sm">
              {link.label}
            </Button>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <Button variant="accent" size="lg" href="#">
        Register Now
      </Button>
    </nav>
  );
};
