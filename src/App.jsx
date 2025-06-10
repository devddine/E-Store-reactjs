import { BrowserRouter } from "react-router-dom";
import "./assets/styles/App.module.css";
import AppRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
