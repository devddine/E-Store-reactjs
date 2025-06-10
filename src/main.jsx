/**
 * @fileoverview Entry point of the React application. Sets up the root and renders the App component.
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./config/i18n.js";

/**
 * Create the React root and render the App component wrapped in StrictMode.
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
