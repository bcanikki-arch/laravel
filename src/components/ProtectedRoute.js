import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, allow }) {
  const role = localStorage.getItem("role");

  if (!role) return <Navigate to="/login" />;

  if (!allow.includes(role)) return <Navigate to="/attendance" />;

  return children;
}
