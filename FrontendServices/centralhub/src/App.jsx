import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./components/Layout"; // Adjust path accordingly

function App() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("/api/ExceptionLog")
      .then((response) => {
        setLogs(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching data");
        setLoading(false);
        console.error(err);
      });
  }, []);

  if (loading) return <div>Loading logs...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Layout>
      <h1>Exception Logs</h1>
      <ul>
        {logs.map((log) => (
          <li key={log.id}>
            <strong>{log.level}</strong>: {log.message} (
            {new Date(log.occurredAt).toLocaleString()})
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default App;
