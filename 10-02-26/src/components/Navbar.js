import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { clearAuth, getUser } from "../auth";

export default function Navbar() {
  const navigate = useNavigate();
  const user = getUser(); // Get user info (like their name) from our Security Manager

  function logout() {
    clearAuth();      // 1. Remove the token from memory
    navigate("/login"); // 2. Send the user back to the login page
  }

  return (
    <nav style={{ 
      display: "flex", 
      gap: "20px", 
      padding: "1rem", 
      background: "#f8f9fa", 
      borderBottom: "1px solid #ddd",
      alignItems: "center" 
    }}>
      <Link to="/dashboard" style={{ fontWeight: "bold", textDecoration: "none", color: "blue" }}>FinanceTracker</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/expenses">Expenses</Link>
      <Link to="/income">Income</Link>

      <div style={{ marginLeft: "auto" }}>
        {user ? (
          <>
            <span style={{ marginRight: "15px" }}>Welcome, <b>{user.name}</b></span>
            <button onClick={logout} style={{ cursor: "pointer" }}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}