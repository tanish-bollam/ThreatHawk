import React from "react";

export default function AnomalyTable({ anomalies }) {
  if (!anomalies || anomalies.length === 0) return <div>No anomalies</div>;

  return (
    <div style={{ marginBottom: 20 }}>
      <h2 style={{ fontWeight: 600 }}>Anomalies</h2>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ background: "#fff7f7" }}>
            <tr>
              <th style={{ padding: 8, textAlign: "left" }}>Timestamp</th>
              <th style={{ padding: 8, textAlign: "left" }}>Username</th>
              <th style={{ padding: 8, textAlign: "left" }}>Action</th>
              <th style={{ padding: 8, textAlign: "left" }}>Role</th>
            </tr>
          </thead>
          <tbody>
            {anomalies.map((a, i) => (
              <tr key={i} style={{ borderTop: "1px solid #e5e7eb" }}>
                <td style={{ padding: 8 }}>{a.timestamp ?? a.time ?? "n/a"}</td>
                <td style={{ padding: 8 }}>{a.username ?? a.username_decoded ?? "n/a"}</td>
                <td style={{ padding: 8 }}>{a.action ?? "n/a"}</td>
                <td style={{ padding: 8 }}>{a.role ?? "n/a"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
