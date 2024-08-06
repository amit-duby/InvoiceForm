import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../Admin/auth"; // Adjust the path as necessary

const AuthCheckRoute = () => {
  const [auth] = useAuth();

  return auth.user ? <Navigate to="/dashboard/user" replace /> : <Outlet />;
};

export default AuthCheckRoute;
