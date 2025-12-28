import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Header from "./components/shared/Header";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/shared/Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <div>
        <App />
      </div>
      <Footer/>
    </BrowserRouter>
  </StrictMode>
);
