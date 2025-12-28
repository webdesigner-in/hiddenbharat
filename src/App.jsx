import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Destinations from "./pages/Destinations";
import Packages from "./pages/Packages";
import Stories from "./pages/Stories";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/stories" element={<Stories />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
