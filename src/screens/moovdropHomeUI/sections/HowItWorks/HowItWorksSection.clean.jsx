import React from "react";
import { Button, VehicleCard } from "../../../../components/ui";
import { BenefitList } from "../../../../components/ui/BenefitList";
import { StepList } from "../../../../components/ui/StepList";
import { Section } from "../../../../components/layout/Section";
import { Container } from "../../../../components/layout/Container";
import { Stack } from "../../../../components/layout/Stack";
import { featureCards, serviceBenefits, howItWorksSteps } from "../../../../data/features";
import { vehicles } from "../../../../data/vehicles";
import { Card, CardHeader, CardFooter } from "../../../../components/ui";

export const HowItWorksSection = () => {
  return (
    <>
      {/* Feature Cards Section */}
      <Section bg="white">
        <Container className="py-20">
          <div className="grid-features">
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
        </Container>
      </Section>

      {/* Spacer */}
      <Section bg="white">
        <div className="h-48 md:h-96 lg:h-[566px]" />
      </Section>

      {/* Service Benefits Section */}
      <Section bg="white" className="py-20">
        <Container>
          <div className="relative bg-moovdrop-cream rounded-moovdrop-md overflow-hidden">
            <Stack
              direction="vertical"
              spacing="lg"
              className="md:flex-row md:items-start md:justify-between py-12 md:py-16 px-0 md:px-0 min-h-[788px]"
            >
              {/* Left Column - Content */}
              <Stack spacing="lg" className="w-full md:w-1/2 px-4 md:px-20 z-10">
                <Stack spacing="xs">
                  <p className="body-large">24/7 Delivery Services</p>
                  <h2 className="heading-primary leading-tight md:leading-[55px]">
                    Fast.&nbsp;&nbsp;Simple.&nbsp;&nbsp;Affordable.
                  </h2>
                </Stack>

                <BenefitList items={serviceBenefits} />
              </Stack>

              {/* Right Column - Image Placeholder for Layout */}
              <div className="hidden md:block w-1/2 min-h-[516px] opacity-0 pointer-events-none" />
            </Stack>

            {/* Floating Image - Desktop */}
            <div className="hidden md:block absolute right-0 top-24 w-[576px] h-[502px] z-30 pointer-events-none">
              <img
                className="w-full h-full object-cover drop-shadow-2xl"
                alt="Service Image"
                src="https://c.animaapp.com/F0ApqIw8/img/image-418.png"
              />
            </div>

            {/* Mobile Image */}
            <div className="block md:hidden px-4 pb-8">
              <img
                className="w-full max-w-xl mx-auto"
                alt="Service Image"
                src="https://c.animaapp.com/F0ApqIw8/img/image-418.png"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* How It Works Steps Section */}
      <Section bg="primary-dark" className="py-20">
        <Container>
          <Stack
            direction="vertical"
            spacing="lg"
            className="md:flex-row md:items-center md:justify-center md:gap-14"
          >
            {/* Left - Phone Mockup */}
            <div className="flex items-center justify-center md:justify-start">
              <div className="w-[265px] md:w-[359px] rounded-moovdrop-lg overflow-hidden p-2">
                <img
                  className="w-full h-auto"
                  alt="App Screenshot"
                  src="https://c.animaapp.com/F0ApqIw8/img/screenshot-2025-11-24-at-10-40-29-pm-1.png"
                />
              </div>
            </div>

            {/* Right - Steps */}
            <Stack spacing="lg" className="px-4 md:px-0">
              <h2 className="heading-primary text-white leading-tight md:leading-[55px] max-w-lg">
                Moving service connected
                <br />
                to your needs
              </h2>

              <StepList steps={howItWorksSteps} />

              <Button
                variant="primary"
                size="md"
                href="https://www.figma.com/sites"
                target="_blank"
                className="px-16"
              >
                Discover More
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Section>

      {/* Download App Section */}
      <Section bg="white" className="py-20">
        <Container>
          <Stack
            direction="vertical"
            spacing="lg"
            className="md:flex-row md:items-center md:justify-center md:gap-16"
          >
            {/* Left - Content */}
            <Stack spacing="lg" className="w-full md:w-1/2">
              <Stack spacing="xs">
                <h2 className="heading-primary">Ready to get started?</h2>
                <p className="body-large">
                  Download our APP today to get your deliveries going places.
                </p>
              </Stack>

              <img
                className="w-full max-w-md"
                alt="App Store Badges"
                src="https://c.animaapp.com/F0ApqIw8/img/group-427321000@2x.png"
              />
            </Stack>

            {/* Right - Truck Image */}
            <div className="relative w-full md:w-[430px] h-[250px] md:h-[359px]">
              <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[260px] h-[331px] rounded-t-full overflow-hidden bg-gradient-to-br from-[#edede3] via-[#f1eca3] to-moovdrop-accent">
                <img
                  className="w-[624px] h-[331px] ml-[-210px] mt-12"
                  alt="Truck with wooden dresser"
                  src="https://c.animaapp.com/F0ApqIw8/img/truck-with-wooden-dresser-2-1.png"
                />
              </div>

              <img
                className="absolute top-1/2 -translate-y-1/2 right-4 w-[453px] h-[331px]"
                alt="Truck with wooden dresser"
                src="https://c.animaapp.com/F0ApqIw8/img/truck-with-wooden-dresser-2-1-1@2x.png"
              />
            </div>
          </Stack>
        </Container>
      </Section>

      {/* Vehicle Types Section */}
      <Section bg="white" className="pb-20">
        <Container>
          <Stack spacing="lg" align="center">
            <h2 className="heading-primary text-center">
              Find your desire vehicle type
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {vehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} {...vehicle} />
              ))}
            </div>
          </Stack>
        </Container>
      </Section>
    </>
  );
};
