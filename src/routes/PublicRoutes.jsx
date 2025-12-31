import { Navigate } from "react-router-dom";
import { useAuth } from "@/store/auth.store";

/**
 * PublicRoute
 * Blocks auth pages for logged-in users
 */
export default function PublicRoute({ children }) {
  const { user, loading } = useAuth();

  // Still checking session
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center text-muted-foreground">
        Checking session…
      </div>
    );
  }

  // If already logged in → redirect
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  // Otherwise allow access
  return children;
}