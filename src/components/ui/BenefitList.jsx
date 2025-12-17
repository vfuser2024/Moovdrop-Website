import React from "react";
import { Stack } from "../layout";

/**
 * BenefitList component - displays a list of service benefits with consistent styling
 */
export const BenefitList = ({ items }) => {
  return (
    <Stack spacing="sm" className="w-full">
      {items.map((benefit, index) => (
        <div key={benefit.id}>
          <div className="flex flex-col gap-1 py-4">
            <h3 className="label-bold">{benefit.title}</h3>
            <p className="body-base">{benefit.description}</p>
          </div>
          {index < items.length - 1 && (
            <div className="w-full h-px bg-white" />
          )}
        </div>
      ))}
    </Stack>
  );
};
