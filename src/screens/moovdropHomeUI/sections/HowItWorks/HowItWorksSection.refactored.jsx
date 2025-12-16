import React from "react";
import { Button, Card, CardHeader, CardFooter, VehicleCard } from "../../../../components/ui";
import { featureCards, serviceBenefits, howItWorksSteps } from "../../../../data/features";
import { vehicles } from "../../../../data/vehicles";

export const HowItWorksSection = () => {
  return (
    <div className="flex flex-col max-w-[1300.42px] items-center relative w-full flex-[0_0_auto] overflow-visible mx-auto">
      {/* Feature Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-20 pb-0 px-4 md:px-20 relative self-stretch w-full items-stretch">
        {featureCards.map((feature) => (
          <Card key={feature.id} variant="feature" href={feature.link}>
            <CardHeader
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
            <CardFooter>{feature.linkText}</CardFooter>
          </Card>
        ))}
      </div>

      {/* Spacer */}
      <div className="flex flex-col items-center justify-center gap-12 p-20 relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative self-stretch w-full h-[566px]" />
      </div>

      {/* Service Benefits Section */}
      <div className="inline-flex flex-col items-start gap-2.5 pt-0 pb-20 px-0 relative flex-[0_0_auto] w-screen overflow-visible" style={{ marginLeft: 'calc((100vw - 100%) / -2)', marginRight: 'calc((100vw - 100%) / -2)', paddingLeft: 'calc((100vw - 100%) / 2)', paddingRight: 'calc((100vw - 100%) / 2)' }}>
        <div className="inline-flex flex-col md:flex-row min-h-[787.71px] items-start gap-4 md:gap-2.5 px-4 md:px-20 py-8 md:py-[60px] relative bg-moovdrop-cream rounded-moovdrop-md overflow-visible w-full max-w-[1300.42px] mx-auto">
          <div className="inline-flex flex-col items-start gap-8 md:gap-12 pt-[var(--size-space-600)] pb-[var(--size-space-600)] px-0 relative flex-[0_0_auto] w-full md:w-auto z-10">
            <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto] w-full">
              <div className="relative self-stretch font-dm-sans font-normal text-text-secondary text-lg md:text-xl">
                24/7 Delivery Services
              </div>

              <div className="relative w-full md:w-[542px] h-auto md:h-[55px]">
                <h2 className="absolute top-0 left-0 font-rem font-normal text-text-primary text-3xl md:text-4xl lg:text-5xl leading-[55px]">
                  Fast.&nbsp;&nbsp;Simple.&nbsp;&nbsp;Affordable.
                </h2>
              </div>
            </div>

            <div className="flex flex-col items-start gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
              {serviceBenefits.map((benefit, index) => (
                <div
                  key={benefit.id}
                  className={`inline-flex ${index === 0 ? 'min-h-[74.68px]' : 'h-[74.68px]'} justify-center pl-0 ${index === 0 ? 'pr-0 md:pr-[69.36px]' : 'pr-[69.36px]'} py-4 ${index > 0 ? 'border-t [border-top-style:solid] border-white' : ''} flex-col items-start relative w-full`}
                >
                  <div className={`relative w-fit ${index > 2 ? 'mt-[-4.66px]' : ''} ${index > 2 ? '[font-family:\'DM_Sans\',Helvetica]' : 'font-dm-sans'} font-bold ${index > 2 ? 'text-[#57555a]' : 'text-text-secondary'} text-lg md:text-xl ${index > 2 ? 'tracking-[-0.10px] leading-[28.0px]' : ''} whitespace-nowrap`}>
                    {benefit.title}
                  </div>

                  <p className={`relative ${index < 2 ? 'w-full md:w-[480px]' : 'w-[480px]'} ${index > 2 ? 'mb-[-2.66px]' : ''} ${index > 2 ? '[font-family:\'DM_Sans\',Helvetica]' : 'font-dm-sans'} font-normal ${index > 2 ? 'text-[#999999]' : 'text-text-tertiary'} text-sm md:text-base ${index > 2 ? 'tracking-[-0.08px] leading-[22.4px]' : ''}`}>
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Placeholder for layout - hidden on desktop */}
          <div className="hidden md:block relative w-full md:w-[436.5px] h-auto md:h-[516.42px] flex items-center justify-center opacity-0 pointer-events-none">
            <div className="w-full max-w-[576px] h-[502px]" />
          </div>
        </div>

        {/* Full-width floating image for desktop - positioned absolutely to show full width, extending beyond container */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-[576px] h-[502px] z-30 pointer-events-none top-[94px] md:left-[calc(50%+70px)] md:-translate-x-0">
          <img
            className="w-full h-full aspect-[1.15] object-cover drop-shadow-2xl"
            alt="Image"
            src="https://c.animaapp.com/F0ApqIw8/img/image-418.png"
          />
        </div>

        {/* Mobile image */}
        <div className="block md:hidden w-full flex items-center justify-center mt-8">
          <img
            className="w-full max-w-[576px] h-auto aspect-[1.15] object-cover"
            alt="Image"
            src="https://c.animaapp.com/F0ApqIw8/img/image-418.png"
          />
        </div>
      </div>

      {/* How It Works Steps Section */}
      <div className="flex flex-col md:flex-row w-full min-h-[792px] items-center justify-center gap-8 md:gap-14 px-4 md:px-0 py-20 relative bg-moovdrop-primary-dark">
        <div className="flex flex-col w-full md:w-[359px] h-auto md:h-[563px] items-start justify-center gap-[8.67px] p-[8.67px] relative rounded-[26.01px] overflow-hidden">
          <img
            className="relative w-full max-w-[265px] h-auto md:h-[551px] mt-[-2.67px] mb-[-2.67px] aspect-[0.48] object-contain mx-auto md:mx-0"
            alt="Screenshot"
            src="https://c.animaapp.com/F0ApqIw8/img/screenshot-2025-11-24-at-10-40-29-pm-1.png"
          />
        </div>

        <div className="flex flex-col w-full md:w-[489px] items-start gap-8 md:gap-12 pt-[var(--size-space-600)] pb-[var(--size-space-600)] px-4 md:px-0 relative">
          <div className="flex flex-col items-start gap-[34.68px] pl-0 pr-0 md:pr-[69.36px] py-0 relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="relative w-full md:w-[581px] font-rem font-normal text-white text-3xl md:text-4xl lg:text-5xl leading-[55px]">
              Moving service connected
              <br />
              to your needs
            </h2>
          </div>

          <div className="flex w-full md:w-[473px] flex-[0_0_auto] flex-col items-start relative">
            {howItWorksSteps.map((step, index) => (
              <div
                key={step.id}
                className={`flex ${index === 0 ? 'gap-4 md:gap-[26.01px]' : 'items-start justify-center gap-4 md:gap-[26.01px]'} ${index === 0 ? 'self-stretch w-full items-start justify-center' : ''} pl-0 pr-0 md:pr-[69.36px] ${index === 0 ? 'py-4' : 'py-[17.34px]'} relative ${index === 0 ? 'self-stretch w-full' : 'self-stretch w-full'} flex-[0_0_auto] ${index > 0 ? 'border-t border-moovdrop-primary' : ''}`}
              >
                <div className={`relative w-fit ${index > 0 ? 'mt-[-0.87px]' : ''} ${index > 0 ? '[font-family:\'DM_Sans\',Helvetica]' : 'font-dm-sans'} font-light text-white text-4xl ${index > 0 ? 'tracking-[-0.18px]' : ''} leading-[50.4px] whitespace-nowrap`}>
                  {step.number}
                </div>

                <p className={`relative flex-1 ${index > 0 ? 'mt-[-0.87px]' : ''} ${index > 0 ? '[font-family:\'DM_Sans\',Helvetica]' : 'font-dm-sans'} font-normal text-white text-base ${index > 0 ? 'tracking-[-0.08px]' : 'tracking-[-0.01px]'} leading-[22.4px]`}>
                  <span className={`font-bold tracking-[-0.01px]`}>
                    {step.title}
                    <br />
                  </span>
                  <span className="tracking-[-0.01px]">
                    {step.description}
                  </span>
                </p>
              </div>
            ))}
          </div>

          <Button
            variant="primary"
            size="md"
            href="https://www.figma.com/sites"
            target="_blank"
            className="px-8 md:px-[60px]"
          >
            Discover More
          </Button>
        </div>
      </div>

      {/* Download App Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-[60px] px-4 md:px-[68px] py-20 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col w-full md:w-[486px] items-start gap-8 md:gap-12 relative">
          <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="relative self-stretch font-rem font-normal text-text-primary text-3xl md:text-4xl lg:text-5xl">
              Ready to get started?
            </h2>

            <p className="relative self-stretch font-dm-sans font-normal text-text-primary text-lg md:text-xl">
              Download our APP today to get your deliveries going places.
            </p>
          </div>

          <img
            className="relative w-full max-w-[416.35px] h-auto"
            alt="Group"
            src="https://c.animaapp.com/F0ApqIw8/img/group-427321000@2x.png"
          />
        </div>

        <div className="relative w-full md:w-[430px] h-[250px] md:h-[359px]">
          <div className="absolute top-[calc(50.00%_-_190px)] right-px w-[260px] h-[331px] flex rounded-[500px_500px_0px_0px] overflow-hidden bg-[linear-gradient(106deg,rgba(237,238,227,1)_0%,rgba(241,236,163,1)_36%,rgba(217,123,0,1)_87%)]">
            <img
              className="mt-[51px] w-[624px] h-[331px] ml-[-210px] aspect-[1.89]"
              alt="Truck with wooden"
              src="https://c.animaapp.com/F0ApqIw8/img/truck-with-wooden-dresser-2-1.png"
            />
          </div>

          <img
            className="absolute top-[calc(50.00%_-_139px)] right-[18px] w-[453px] h-[331px] aspect-[1.37]"
            alt="Truck with wooden"
            src="https://c.animaapp.com/F0ApqIw8/img/truck-with-wooden-dresser-2-1-1@2x.png"
          />
        </div>
      </div>

      {/* Vehicle Types Section */}
      <div className="flex flex-col items-center gap-8 md:gap-12 px-4 md:px-0 py-20 relative self-stretch w-full flex-[0_0_auto]">
        <h2 className="relative w-fit font-rem font-normal text-text-primary text-3xl md:text-4xl lg:text-5xl text-center px-4">
          Find your desire vehicle type
        </h2>

        <div className="flex flex-col items-center gap-6 md:gap-[35px] relative self-stretch w-full flex-[0_0_auto]">
          {/* First row of vehicles */}
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-[35px] px-4 md:px-20 py-0 relative self-stretch w-full flex-[0_0_auto]">
            {vehicles.slice(0, 3).map((vehicle) => (
              <VehicleCard key={vehicle.id} {...vehicle} />
            ))}
          </div>

          {/* Second row of vehicles */}
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-[35px] px-4 md:px-20 py-0 relative self-stretch w-full flex-[0_0_auto]">
            {vehicles.slice(3, 5).map((vehicle) => (
              <VehicleCard key={vehicle.id} {...vehicle} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
