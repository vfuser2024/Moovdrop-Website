import React from "react";

export const Navigation = () => {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between pt-6 pb-12 px-4 md:px-20 relative w-full bg-moovdrop-primary gap-4">
      <div className="flex flex-col md:flex-row items-center w-full md:w-auto md:max-w-[753.65px] gap-4 md:gap-[88px] relative">
        {/* Logo */}
        <div className="relative w-[161.85px] h-[44.05px] bg-[url(https://c.animaapp.com/F0ApqIw8/img/screenshot-2025-11-24-at-10-51-18-pm-1@2x.png)] bg-cover bg-[50%_50%]" />

        {/* Navigation Links */}
        <div className="inline-flex items-center gap-4 md:gap-9 relative flex-wrap justify-center">
          <button className="inline-flex items-center justify-center gap-2.5 px-6 py-1.5 bg-black/15 rounded-moovdrop-xl font-dm-sans font-bold text-white text-base text-center tracking-[-0.40px] leading-[22.4px] whitespace-nowrap hover:bg-black/25 transition-colors">
            Rent a Vehicle
          </button>

          <button className="inline-flex items-center justify-center gap-2.5 px-6 py-1.5 bg-black/15 rounded-moovdrop-xl font-dm-sans font-bold text-white text-base text-center tracking-[-0.40px] leading-[22.4px] whitespace-nowrap hover:bg-black/25 transition-colors">
            Become Driver
          </button>

          <button className="inline-flex items-center justify-center gap-2.5 px-6 py-1.5 bg-black/15 rounded-moovdrop-xl font-dm-sans font-bold text-white text-base text-center tracking-[-0.40px] leading-[22.4px] whitespace-nowrap hover:bg-black/25 transition-colors">
            About Us
          </button>
        </div>
      </div>

      {/* CTA Button */}
      <a
        className="inline-flex items-center gap-[1.73px] px-8 md:px-12 py-3 bg-moovdrop-accent rounded-moovdrop-full justify-center font-dm-sans font-bold text-white text-lg text-center tracking-[-0.45px] leading-[25.2px] whitespace-nowrap hover:bg-moovdrop-accent-dark transition-colors"
        href="#"
        rel="noopener noreferrer"
      >
        Register Now
      </a>
    </nav>
  );
};
