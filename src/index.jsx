import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MoovdripHomeUi } from "./screens/MoovDropHome";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <MoovdripHomeUi />
  </StrictMode>,
);

