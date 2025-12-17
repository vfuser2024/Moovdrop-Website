import React from "react";
import { Stack } from "../layout";

/**
 * StepList component - displays numbered steps with consistent styling
 */
export const StepList = ({ steps }) => {
  return (
    <Stack spacing="xs" className="w-full md:max-w-md">
      {steps.map((step, index) => (
        <div key={step.id}>
          <div className="flex gap-4 md:gap-6 py-4">
            <div className="w-12 sm:w-16 text-3xl sm:text-4xl font-light text-white leading-snug flex-shrink-0">
              {step.number}
            </div>
            <p className="text-base text-white leading-relaxed flex-1">
              <span className="font-bold">{step.title}</span>
              <br />
              {step.description}
            </p>
          </div>
          {index < steps.length - 1 && (
            <div className="w-full h-px bg-moovdrop-primary" />
          )}
        </div>
      ))}
    </Stack>
  );
};
