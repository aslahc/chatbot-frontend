import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, isAdminRoute }) => {
  const auth = useSelector((state) => state.authStore);

  if (!auth.token) {
    return <Navigate to="/login" />;
  }

  if (isAdminRoute && !auth.user?.isAdmin) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
