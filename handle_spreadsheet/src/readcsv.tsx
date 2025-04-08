import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';

const CSVReader: React.FC = () => {
  const [csvData, setCsvData] = useState<any[]>([]);

  useEffect(() => {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        const csvText = event.target?.result as string;
        try {
          const parsedData = d3.csvParse(csvText);
          setCsvData(parsedData);
          alert(`Successfully parsed ${parsedData.length} rows!`);
        } catch (error) {
          console.error('CSV parsing error:', error);
          alert('Error parsing CSV file. Please check the format.');
        }
      };
      reader.onerror = () => {
        console.error('File reading error');
        alert('Failed to read file');
      };
      reader.readAsText(file);
    };

    const fileInput = document.getElementById('csvUpload') as HTMLInputElement;
    fileInput.addEventListener('change', handleFileChange);

    return () => {
      fileInput.removeEventListener('change', handleFileChange);
    };
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>CSV File Reader</h1>
      <input type="file" id="csvUpload" accept=".csv" style={{ marginBottom: '20px' }} />
      {csvData.length > 0 && (
        <div>
          <h2>Parsed Data:</h2>
          <pre>{JSON.stringify(csvData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default CSVReader;

