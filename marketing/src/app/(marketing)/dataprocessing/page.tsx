"use client";
import React, { useEffect, useState } from 'react';
import './data.css';
const page: React.FC = () => {
  const [summary, setSummary] = useState<any>(null);

  useEffect(() => {
    const fetchSummary = async () => {
      const response = await fetch('/api/dataprocessing');
      const data = await response.json();
      setSummary(data);
    };
    fetchSummary();
  }, []);

  return (
    <div className="data-preprocessing-summary">
      <h2>Data Preprocessing Summary</h2>
      {summary ? (
        <pre>{JSON.stringify(summary, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default page;