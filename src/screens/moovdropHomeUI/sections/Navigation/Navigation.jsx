import React from "react";
import { Button } from "../../../../components/ui";
import { quickLinks } from "../../../../data/navigation";

const navLinks = quickLinks.slice(0, 3); // Use first 3 links for nav

export const Navigation = () => {
  return (
    <nav className="flex-col md:flex-row flex-between pt-6 pb-12 section-padding-x relative w-full bg-moovdrop-primary gap-4">
      <div className="flex-col md:flex-row flex-center w-full md:w-auto md:max-w-[753.65px] gap-4 md:gap-[88px] relative">
        {/* Logo */}
        <div className="relative w-[161.85px] h-[44.05px] bg-[url(https://c.animaapp.com/F0ApqIw8/img/screenshot-2025-11-24-at-10-51-18-pm-1@2x.png)] bg-cover bg-[50%_50%]" />

        {/* Navigation Links */}
        <div className="flex-center gap-4 md:gap-9 relative flex-wrap">
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
