import React from "react";
import { Button, Card, CardHeader, CardFooter, VehicleCard } from "../../../../components/ui";
import { featureCards, serviceBenefits, howItWorksSteps } from "../../../../data/features";
import { vehicles } from "../../../../data/vehicles";

export const HowItWorksSection = () => {
  return (
    <div className="flex-col-center section-container relative flex-[0_0_auto] overflow-visible">
      {/* Feature Cards Section */}
      <div className="grid-features pt-20 pb-0 section-padding-x relative self-stretch w-full items-stretch">
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
      <div className="flex-col-center content-gap-lg p-10 sm:p-16 md:p-20 relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative self-stretch w-full h-[200px] sm:h-[400px] md:h-[566px]" />
      </div>

      {/* Service Benefits Section */}
      <div className="flex-col-start gap-2.5 pt-0 pb-20 px-0 relative flex-[0_0_auto] w-screen overflow-visible" style={{ marginLeft: 'calc((100vw - 100%) / -2)', marginRight: 'calc((100vw - 100%) / -2)', paddingLeft: 'calc((100vw - 100%) / 2)', paddingRight: 'calc((100vw - 100%) / 2)' }}>
        <div className="flex-col md:flex-row flex-start min-h-[787.71px] gap-4 md:gap-2.5 section-padding-x py-8 md:py-[60px] relative bg-moovdrop-cream rounded-moovdrop-md overflow-visible w-full section-container mx-auto">
          <div className="flex-col-start content-gap-lg pt-[var(--size-space-600)] pb-[var(--size-space-600)] px-0 relative flex-[0_0_auto] w-full md:w-auto z-10">
            <div className="flex-col-start gap-3 relative flex-[0_0_auto] w-full">
              <div className="relative self-stretch body-large">
                24/7 Delivery Services
              </div>

              <div className="relative w-full md:w-[542px] h-auto md:h-[55px]">
                <h2 className="relative md:absolute top-0 left-0 heading-primary leading-tight md:leading-[55px]">
                  Fast.&nbsp;&nbsp;Simple.&nbsp;&nbsp;Affordable.
                </h2>
              </div>
            </div>

            <div className="flex-col-start gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
              {serviceBenefits.map((benefit, index) => (
                <div
                  key={benefit.id}
                  className={`inline-flex ${index === 0 ? 'min-h-[74.68px]' : 'h-[74.68px]'} justify-center pl-0 ${index === 0 ? 'pr-0 md:pr-[69.36px]' : 'pr-[69.36px]'} py-4 ${index > 0 ? 'border-t [border-top-style:solid] border-white' : ''} flex-col items-start relative w-full`}
                >
                  <div className={`relative w-fit ${index > 2 ? 'mt-[-4.66px]' : ''} label-bold whitespace-nowrap`}>
                    {benefit.title}
                  </div>

                  <p className={`relative w-full ${index < 2 ? 'md:w-[480px]' : 'sm:w-[480px]'} ${index > 2 ? 'mb-[-2.66px]' : ''} body-base`}>
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
      <div className="flex-col md:flex-row flex-center w-full min-h-[792px] gap-8 md:gap-14 px-4 md:px-0 section-padding-y relative bg-moovdrop-primary-dark">
        <div className="flex-col-center w-full md:w-[359px] h-auto md:h-[563px] gap-[8.67px] p-[8.67px] relative rounded-[26.01px] overflow-hidden">
          <img
            className="relative w-full max-w-[265px] h-auto md:h-[551px] mt-[-2.67px] mb-[-2.67px] aspect-[0.48] object-contain mx-auto md:mx-0"
            alt="Screenshot"
            src="https://c.animaapp.com/F0ApqIw8/img/screenshot-2025-11-24-at-10-40-29-pm-1.png"
          />
        </div>

        <div className="flex-col-start w-full md:w-[489px] content-gap-lg pt-[var(--size-space-600)] pb-[var(--size-space-600)] px-4 md:px-0 relative">
          <div className="flex-col-start gap-[34.68px] pl-0 pr-0 md:pr-[69.36px] py-0 relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="relative w-full md:w-[581px] heading-primary text-white leading-tight sm:leading-snug md:leading-[55px]">
              Moving service connected
              <br />
              to your needs
            </h2>
          </div>

          <div className="flex-col-start w-full md:w-[473px] flex-[0_0_auto] relative">
            {howItWorksSteps.map((step, index) => (
              <div
                key={step.id}
                className={`flex ${index === 0 ? 'gap-4 md:gap-[26.01px]' : 'items-start justify-center gap-4 md:gap-[26.01px]'} ${index === 0 ? 'self-stretch w-full items-start justify-center' : ''} pl-0 pr-0 md:pr-[69.36px] ${index === 0 ? 'py-4' : 'py-[17.34px]'} relative ${index === 0 ? 'self-stretch w-full' : 'self-stretch w-full'} flex-[0_0_auto] ${index > 0 ? 'border-t border-moovdrop-primary' : ''}`}
              >
                <div className={`relative w-fit ${index > 0 ? 'mt-[-0.87px]' : ''} ${index > 0 ? '[font-family:\'DM_Sans\',Helvetica]' : 'font-dm-sans'} font-light text-white text-3xl sm:text-4xl ${index > 0 ? 'tracking-[-0.18px]' : ''} leading-[40px] sm:leading-[50.4px] whitespace-nowrap flex-shrink-0`}>
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
      <div className="flex-col md:flex-row flex-center gap-8 md:gap-[60px] px-4 md:px-[68px] section-padding-y relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex-col-start w-full md:w-[486px] content-gap-lg relative">
          <div className="flex-col-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="relative self-stretch heading-primary">
              Ready to get started?
            </h2>

            <p className="relative self-stretch body-large">
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
      <div className="flex-col-center content-gap-lg section-padding relative self-stretch w-full flex-[0_0_auto] section-container">
        <h2 className="relative w-full heading-primary text-center">
          Find your desire vehicle type
        </h2>

        <div className="grid-cards relative w-full">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} {...vehicle} />
          ))}
        </div>
      </div>
    </div>
  );
};
