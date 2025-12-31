import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Header from "./components/shared/Header";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/shared/Footer";
import { AuthProvider } from "./store/auth.store";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <div>
          <App />
          <Toaster richColors position="top-right"/>
        </div>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
