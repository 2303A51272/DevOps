import React, { useEffect, useState } from "react";
import api from "../api";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    // This runs as soon as the page loads
    const fetchDashboard = async () => {
      try {
        const res = await api.get("/api/dashboard");
        setData(res.data);
      } catch (e) {
        setErr("Failed to load dashboard data. Are you logged in?");
      }
    };
    fetchDashboard();
  }, []);

  if (err) return <p style={{ color: "crimson", padding: 20 }}>{err}</p>;
  if (!data) return <p style={{ padding: 20 }}>Loading dashboard...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard Summary</h2>
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h3>Total Balance</h3>
          <p style={{ fontSize: "24px", color: "green" }}>${data.summary.totalBalance}</p>
        </div>
        <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h3>Expenses</h3>
          <p style={{ fontSize: "24px", color: "red" }}>${data.summary.totalExpenses}</p>
        </div>
      </div>
    </div>
  );
}