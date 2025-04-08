import React, { useState } from 'react';
import * as d3 from 'd3';
import * as XLSX from 'xlsx';

const FileReaderComponent: React.FC = () => {
  const [fileData, setFileData] = useState<any[]>([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    const fileExtension = file.name.split('.').pop()?.toLowerCase();

    reader.onload = (event) => {
      const fileContent = event.target?.result;

      try {
        if (fileExtension === 'csv') {
          // Parse CSV using d3.js
          const parsedData = d3.csvParse(fileContent as string);
          setFileData(parsedData);
          alert(`Successfully parsed ${parsedData.length} rows from CSV!`);
        } else if (fileExtension === 'xlsx' || fileExtension === 'xls') {
          // Parse Excel using xlsx
          const workbook = XLSX.read(fileContent, { type: 'binary' });
          const sheetName = workbook.SheetNames[0];
          const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
          setFileData(sheetData);
          alert(`Successfully parsed ${sheetData.length} rows from Excel!`);
        } else {
          alert('Unsupported file format. Please upload a CSV or Excel file.');
        }
      } catch (error) {
        console.error('Error parsing file:', error);
        alert('Error parsing the file. Please check the format.');
      }
    };

    reader.onerror = () => {
      console.error('File reading error');
      alert('Failed to read file');
    };

    // Use different reading methods for CSV and Excel files
    if (fileExtension === 'csv') {
      reader.readAsText(file);
    } else if (fileExtension === 'xlsx' || fileExtension === 'xls') {
      reader.readAsBinaryString(file);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>File Reader (CSV & Excel)</h1>
      <input type="file" onChange={handleFileUpload} accept=".csv,.xls,.xlsx" style={{ marginBottom: '20px' }} />
      {fileData.length > 0 && (
        <div>
          <h2>Parsed Data:</h2>
          <pre>{JSON.stringify(fileData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default FileReaderComponent;

