import React, { useEffect, useState } from "react";

export default function App() {
  const [message, setMessage] = useState("Connecting to backend...");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(import.meta.env.VITE_API_BASE + "/")
      .then(async (res) => {
        if (!res.ok) throw new Error(`Error ${res.status}`);
        const text = await res.text();
        setMessage(text);
      })
      .catch((err) => {
        console.error(err);
        setError("❌ Could not connect to backend");
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "system-ui" }}>
      <h1>SmartLabTrack Frontend</h1>
      <p>This is connected to your backend 👇</p>

      <div style={{ padding: "15px", border: "1px solid #ddd", borderRadius: "8px", width: "60%", margin: "20px auto" }}>
        <strong>Backend Response:</strong>
        <p style={{ color: "green", marginTop: "10px" }}>{message}</p>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
}
