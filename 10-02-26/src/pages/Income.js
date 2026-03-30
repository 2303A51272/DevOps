import React, { useEffect, useState } from "react";
import api from "../api";

export default function Income() {
  const [items, setItems] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    api.get("/api/income")
      .then(res => setItems(res.data))
      .catch(() => setErr("Failed to load income"));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Income</h2>
      {err && <p style={{ color: "red" }}>{err}</p>}
      <ul>
        {items.map((item) => (
          <li key={item.id} style={{ padding: "8px 0" }}>
            <b>{item.title}</b>: <span style={{color: 'green'}}>+${item.amount}</span> ({item.date})
          </li>
        ))}
      </ul>
    </div>
  );
}