"use client";
import React from 'react';
import './download.css';
const DownloadResults: React.FC = () => {
  const handleDownload = (format: string) => {
    window.open(`/api/download-results?format=${format}`, '_blank');
  };

  return (
    <div className="download-results">
      <h2>Download Results</h2>
      <button onClick={() => handleDownload('csv')}>Download CSV</ button>
      <button onClick={() => handleDownload('excel')}>Download Excel</button>
    </div>
  );
};

export default DownloadResults;