import { Navigate } from "react-router-dom";
import { useAuth } from "@/store/auth.store";

/**
 * SecureRoute
 * @param {ReactNode} children
 * @param {Array<string>} allowedRoles
 */
export default function SecureRoute({
  children,
  allowedRoles = [],
}) {
  const { user, role, loading } = useAuth();

  /* Still checking auth */
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center text-muted-foreground">
        Checking permissions…
      </div>
    );
  }

  /* Not logged in */
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  /* Role not allowed */
  if (allowedRoles.length && !allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  /* Access granted */
  return children;
}
