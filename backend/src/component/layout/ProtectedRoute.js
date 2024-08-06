import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../Admin/auth"; // Adjust the path as necessary

const ProtectedRoute = ({ allowedRoles }) => {
  const [auth] = useAuth();

  if (!auth.user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(auth.user.role)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
