import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const auth = JSON.parse(localStorage.getItem("loggedIn"));
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
