// src/api.js
const BASE_URL = "http://127.0.0.1:8000"; // Your backend address

export async function getLogs() {
  const res = await fetch(`${BASE_URL}/logs`);
  if (!res.ok) throw new Error("Failed to fetch logs");
  return res.json();
}

export async function getAnomalies() {
  const res = await fetch(`${BASE_URL}/anomalies`);
  if (!res.ok) throw new Error("Failed to fetch anomalies");
  return res.json();
}

export async function getRisks() {
  const res = await fetch(`${BASE_URL}/risks`);
  if (!res.ok) throw new Error("Failed to fetch risks");
  return res.json();
}

