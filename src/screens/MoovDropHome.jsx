import React from "react";
import { Header } from "./moovdropHomeUI/sections/Header";
import { HowItWorksSection } from "./moovdropHomeUI/sections/HowItWorks";
import { Navigation } from "./moovdropHomeUI/sections/Navigation";
import { FAQ } from "./moovdropHomeUI/sections/FAQ";
import { Footer } from "./moovdropHomeUI/sections/Footer";

export const MoovdripHomeUi = () => {
  return (
    <div
      className="flex flex-col items-center relative bg-backgroundbackground-1 min-h-screen w-full overflow-x-hidden overflow-y-visible"
      data-model-id="193:8901"
    >
      <Navigation />
      <Header />
      <HowItWorksSection />
      <FAQ />
      <Footer />
    </div>
  );
};
