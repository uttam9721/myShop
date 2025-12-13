import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AppContext from "../context/AppContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AppContext);

  // If user is not logged in, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Else show the component
  return children;
};

export default ProtectedRoute;
