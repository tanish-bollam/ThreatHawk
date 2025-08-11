import React from "react";

export default function LogTable({ logs }) {
  if (!logs || logs.length === 0) return <div>No logs</div>;

  return (
    <div style={{ marginBottom: 20 }}>
      <h2 style={{ fontWeight: 600 }}>All Logs</h2>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ background: "#f3f4f6" }}>
            <tr>
              <th style={{ padding: 8, textAlign: "left" }}>Timestamp</th>
              <th style={{ padding: 8, textAlign: "left" }}>Username</th>
              <th style={{ padding: 8, textAlign: "left" }}>Role</th>
              <th style={{ padding: 8, textAlign: "left" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, i) => (
              <tr key={i} style={{ borderTop: "1px solid #e5e7eb" }}>
                <td style={{ padding: 8 }}>{log.timestamp}</td>
                <td style={{ padding: 8 }}>{log.username}</td>
                <td style={{ padding: 8 }}>{log.role}</td>
                <td style={{ padding: 8 }}>{log.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
