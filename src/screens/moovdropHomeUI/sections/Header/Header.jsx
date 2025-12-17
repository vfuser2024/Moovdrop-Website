import React from "react";
import { Button } from "../../../../components/ui";

export const Header = () => {
  return (
    <header className="relative w-full min-h-[795px] bg-moovdrop-primary overflow-hidden flex flex-col">
      {/* Background Layer */}
      <img
        className="absolute w-full max-w-[1441px] h-[801px] top-[-38px] left-0 object-cover z-0"
        alt="Layer"
        src="https://c.animaapp.com/F0ApqIw8/img/layer1.png"
      />

      {/* Content Container */}
      <div className="relative z-10 flex-col-center flex-1 px-4">
        {/* Decorative Icon - Top Right */}
        <img
          className="absolute top-4 right-4 md:right-[1271px] w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[117px] md:h-[117px] z-20"
          alt="Frame"
          src="https://c.animaapp.com/F0ApqIw8/img/frame-2147236769.svg"
        />

        {/* Main Heading */}
        <h1 className="mt-12 sm:mt-20 md:mt-[99px] mb-6 sm:mb-8 heading-hero text-center px-4 z-10 max-w-[1100px]">
          Book Trusted Drivers in Minutes.
        </h1>

        {/* Subheading */}
        <p className="mb-8 sm:mb-12 font-dm-sans font-normal text-white text-lg sm:text-xl md:text-2xl lg:text-3xl text-center tracking-tight md:tracking-[-1.20px] leading-relaxed sm:leading-[31.5px] px-4 max-w-[943px] z-10">
          Join MoovDrop - like ride sharing, but for moving items instead of people.
        </p>

        {/* Search/Quote Box */}
        <div className="flex-col sm:flex-row flex-center sm:flex-between w-full max-w-[683px] gap-4 sm:gap-0 px-4 sm:px-6 md:px-9 py-4 md:py-[16.31px] bg-white rounded-moovdrop-md overflow-hidden shadow-moovdrop-inset z-10 mb-auto">
          <div className="flex-center gap-4 sm:gap-6 md:gap-12 relative flex-[0_0_auto] min-w-0 w-full sm:w-auto">
            <span className="font-dm-sans font-normal text-text-placeholder text-base sm:text-lg md:text-2xl tracking-[-0.61px] leading-[34.4px] whitespace-nowrap truncate">
              Select your desire vehicle
            </span>
            <img
              className="relative w-[13.38px] h-[13.38px] flex-shrink-0"
              alt="Dropdown arrow"
              src="https://c.animaapp.com/F0ApqIw8/img/vector-5.svg"
            />
          </div>

          <div className="hidden sm:block w-px h-8 md:h-12 bg-gray-300 mx-2 md:mx-4 flex-shrink-0" />

          <Button
            variant="primary"
            size="sm"
            href="#"
            className="px-6 sm:px-4 md:px-[24.64px] py-3 md:py-[15.68px] w-full sm:w-auto"
          >
            Get the quote
          </Button>
        </div>
      </div>

      {/* Vehicle Fleet Image - Bottom */}
      <div className="relative z-10 w-full flex-center">
        <img
          className="w-full max-w-[1262px] h-auto aspect-[3.28] object-contain mt-auto"
          alt="White SUV fleet"
          src="https://c.animaapp.com/F0ApqIw8/img/white-suv-fleet-1.png"
        />
      </div>
    </header>
  );
};
