"use client";
import React, { useEffect, useState } from 'react';
import './eda.css';
const page: React.FC = () => {
  const [edaData, setEdaData] = useState<any>(null);

  useEffect(() => {
    const fetchEdaData = async () => {
      const response = await fetch('/api/eda');
      const data = await response.json();
      setEdaData(data);
    };
    fetchEdaData();
  }, []);

  return (
    <div className="eda-dashboard">
      <h2>Exploratory Data Analysis Dashboard</h2>
      {edaData ? (
        <div>
          <h3>Top Products</h3>
          {/* Visualization code goes here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default page;