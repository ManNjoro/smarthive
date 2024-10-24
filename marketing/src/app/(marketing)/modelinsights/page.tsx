"use client";
import React, { useEffect, useState } from 'react';
import './model.css';
const ModelInsights: React.FC = () => {
  const [insights, setInsights] = useState<any>(null);

  useEffect(() => {
    const fetchInsights = async () => {
      const response = await fetch('/api/model-insights');
      const data = await response.json();
      setInsights(data);
    };
    fetchInsights();
  }, []);

  return (
    <div className="model-insights">
      <h2>Model Insights</h2>
      {insights ? (
        <pre>{JSON.stringify(insights, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ModelInsights;
