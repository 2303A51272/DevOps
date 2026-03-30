import React, { useEffect, useState } from "react";
import api from "../api";

export default function Expenses() {
  const [items, setItems] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    api.get("/api/expenses")
      .then(res => setItems(res.data))
      .catch(() => setErr("Failed to load expenses"));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Expenses</h2>
      {err && <p style={{ color: "red" }}>{err}</p>}
      <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#eee" }}>
            <th>Title</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <li key={item.id} style={{ padding: "8px 0", borderBottom: "1px solid #eee" }}>
               {item.title} — <span style={{color: 'red'}}>${item.amount}</span> — {item.date}
            </li>
          ))}
        </tbody>
      </table>
    </div>
  );
}