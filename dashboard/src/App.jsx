import React, { useEffect, useState } from "react";
import { getLogs, getAnomalies, getRisks } from "./api";
import LogTable from "./components/LogTable";
import AnomalyTable from "./components/AnomalyTable";
import RiskScores from "./components/RiskScores";


export default function App() {
  const [logs, setLogs] = useState([]);
  const [anomalies, setAnomalies] = useState([]);
  const [risks, setRisks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const [l, a, r] = await Promise.all([getLogs(), getAnomalies(), getRisks()]);
        setLogs(l);
        setAnomalies(a);
        setRisks(r);
      } catch (e) {
        console.error(e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-600">Error: {error}</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">ThreatHawk Dashboard</h1>

      <div style={{ display: "grid", gap: 20, gridTemplateColumns: "1fr 360px" }}>
        <div>
          <LogTable logs={logs} />
          <AnomalyTable anomalies={anomalies} />
        </div>

        <aside>
          <RiskScores risks={risks} />
        </aside>
      </div>
    </div>
  );
}
