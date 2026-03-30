import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../auth";

export default function ProtectedRoute({ children }) {
  const isAuth = isAuthenticated();
  
  // This log will appear in your F12 Console
  console.log("Bouncer check: Is user authenticated?", isAuth);

  if (!isAuth) {
    console.warn("Bouncer: Access Denied. Sending to /login");
    return <Navigate to="/login" replace />;
  }

  console.log("Bouncer: Access Granted. Loading page...");
  return children;
}