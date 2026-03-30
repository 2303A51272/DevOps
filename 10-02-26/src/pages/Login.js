import React, { useState } from "react";
import { setAuth } from "../auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("user1@gmail.com");
  const [password, setPassword] = useState("123456");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // We bypass the backend server here
    console.log("Mock Login: Skipping server check...");

    // Create a fake user and token
    const mockToken = "fake-jwt-token";
    const mockUser = { name: "Demo User", email: email };

    // Save to our security manager
    setAuth(mockToken, mockUser);

    // This will now trigger the Bouncer to let you in!
    console.log("Mock Login: Success! Redirecting...");
    navigate("/dashboard");
  };

  return (
    <div style={{ padding: "40px", maxWidth: "400px", margin: "50px auto", border: "1px solid #ddd", borderRadius: "10px", textAlign: "center" }}>
      <h2>Login</h2>
      <p style={{ color: "green", fontSize: "0.9rem" }}>Server Bypass Mode Active</p>
      
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" }}>
        <input 
          type="email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          placeholder="Email"
          style={{ padding: "10px" }}
        />
        <input 
          type="password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          placeholder="Password"
          style={{ padding: "10px" }}
        />
        <button 
          type="submit" 
          style={{ padding: "10px", background: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
        >
          Login
        </button>
      </form>
    </div>
  );
}