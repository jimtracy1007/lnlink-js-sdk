import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Test from "./test/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div
      style={{
        width: "100%",
        height: "100%",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <Test />
    </div>
  </StrictMode>
);
