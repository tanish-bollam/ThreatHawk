import React from "react";

export default function RiskScores({ risks }) {
  if (!risks || risks.length === 0) return <div>No risk data</div>;

  // risks expected to be [{ username: 'alice', anomaly_count: 5 }, ...]
  return (
    <div style={{ border: "1px solid #e5e7eb", padding: 12, borderRadius: 6 }}>
      <h3 style={{ fontWeight: 700, marginBottom: 8 }}>Top Risk Users</h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {risks.slice(0, 10).map((r, i) => (
          <li key={i} style={{ padding: "8px 0", borderTop: i ? "1px solid #f3f4f6" : "none" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <strong>{r.username}</strong>
              <span>{r.anomaly_count ?? r.anomalyCount ?? 0}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
