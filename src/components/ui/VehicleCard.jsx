import React from "react";

/**
 * Reusable VehicleCard component for displaying vehicle information
 * @param {string} name - Vehicle name
 * @param {string} image - Vehicle image URL
 * @param {string} maxWeight - Maximum weight capacity
 * @param {string} maxSize - Maximum size dimensions
 * @param {string} suitableFor - Description of suitable use cases
 * @param {string} className - Additional custom classes
 */
export const VehicleCard = ({
  name,
  image,
  maxWeight,
  maxSize,
  suitableFor,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col w-full bg-white rounded-moovdrop-md overflow-hidden border-4 border-solid border-moovdrop-primary-light hover:shadow-lg transition-shadow ${className}`}
    >
      {/* Vehicle Image Section */}
      <div className="relative w-full h-[172px] bg-moovdrop-primary-light overflow-hidden">
        <div className="absolute top-[17px] left-[26px] mix-blend-multiply font-dm-sans font-normal text-moovdrop-primary-light text-4xl sm:text-5xl md:text-6xl whitespace-nowrap">
          {name}
        </div>
        <img
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto max-w-[75%] max-h-[140px] sm:max-h-[160px] object-contain"
          alt={name}
          src={image}
        />
      </div>

      {/* Vehicle Details Section */}
      <div className="flex flex-col w-full items-start gap-4 sm:gap-6 p-5 sm:p-6">
        <h3 className="relative w-full font-rem font-normal text-text-primary text-2xl sm:text-3xl">
          {name}
        </h3>

        <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
          {/* Specs Row */}
          <div className="flex items-start gap-4 sm:gap-6 relative self-stretch w-full">
            {/* Max Weight */}
            <div className="flex flex-1 items-start gap-2 min-w-0">
              <img
                className="relative w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                alt="Weight icon"
                src="https://c.animaapp.com/F0ApqIw8/img/vector-4.svg"
              />
              <div className="flex flex-col items-start gap-1 min-w-0 flex-1">
                <div className="font-dm-sans font-normal text-text-secondary text-xs whitespace-nowrap">
                  Max Weight
                </div>
                <div className="font-dm-sans font-normal text-text-secondary text-xs break-words w-full">
                  {maxWeight}
                </div>
              </div>
            </div>

            {/* Max Size */}
            <div className="flex flex-1 items-start gap-2 min-w-0">
              <img
                className="relative w-3.5 h-[14.02px] flex-shrink-0 mt-0.5"
                alt="Size icon"
                src="https://c.animaapp.com/F0ApqIw8/img/group-427321639-4@2x.png"
              />
              <div className="flex flex-col items-start gap-1 min-w-0 flex-1">
                <div className="font-dm-sans font-normal text-text-secondary text-xs whitespace-nowrap">
                  Max Size
                </div>
                <p className="font-dm-sans font-normal text-text-secondary text-xs break-words w-full">
                  {maxSize}
                </p>
              </div>
            </div>
          </div>

          {/* Suitable For Section */}
          <p className="font-dm-sans font-normal text-text-secondary text-xs leading-relaxed w-full">
            <span className="font-semibold">Suitable For:</span>
            <br />
            {suitableFor}
          </p>
        </div>
      </div>
    </div>
  );
};
