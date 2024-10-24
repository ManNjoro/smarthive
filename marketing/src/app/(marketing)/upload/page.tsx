"use client";
import React, { useState } from 'react';
import './upload.css';
const page: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'text/csv') {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        const rows = text.split('\n').map(row => row.split(','));
        setData(rows);
        setError(null);
      };
      reader.onerror = () => {
        setError('Error reading file');
      };
      reader.readAsText(file);
    } else {
      setError('Please upload a valid CSV file');
    }
  };

  return (
    <div className="upload-page">
      <h2>Upload CSV File</h2>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {error && <p className="error">{error}</p>}
      {data.length > 0 && (
        <div className="data-preview">
          <h3>Data Preview</h3>
          <table>
            <thead>
              <tr>
                {data[0].map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.slice(1, 6).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default page;