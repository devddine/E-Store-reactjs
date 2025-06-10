/**
 * @fileoverview Root React component that sets up the router for the application.
 */

import { BrowserRouter } from "react-router-dom";
import "./assets/styles/App.module.css";
import AppRoutes from "./routes";

/**
 * App component that wraps the application routes with BrowserRouter.
 * @component
 * @returns {JSX.Element} The root component with routing enabled.
 */
function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
