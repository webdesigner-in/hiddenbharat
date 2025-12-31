import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Destinations from "./pages/Destinations";
import Packages from "./pages/Packages";
import Stories from "./pages/Stories";
import Contact from "./pages/Contact";
import ForgotPassword from "./pages/Forgot-Password";
import ResetPassword from "./pages/ResetPassword";
import SecureRoute from "./routes/SecureRoutes";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Unauthorized from "./pages/Unauthorized";
import PublicRoute from "./routes/PublicRoutes";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        }
      />
      <Route
        path="/forgot-password"
        element={
          <PublicRoute>
            <ForgotPassword />
          </PublicRoute>
        }
      />
      <Route
        path="/reset-password"
        element={
          <PublicRoute>
            <ResetPassword />
          </PublicRoute>
        }
      />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/stories" element={<Stories />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route
        path="/dashboard"
        element={
          <SecureRoute allowedRoles={["user", "admin"]}>
            <Dashboard />
          </SecureRoute>
        }
      />

      <Route
        path="/admin"
        element={
          <SecureRoute allowedRoles={["admin"]}>
            <AdminDashboard />
          </SecureRoute>
        }
      />
    </Routes>
  );
}

export default App;
