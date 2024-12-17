import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css"; // Global styles
import App from "./App.jsx"; // Main App component

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/031_arch_studio">
      <App />
    </BrowserRouter>
  </StrictMode>
);
