import React, { useState } from 'react';
import * as d3 from 'd3';
import * as XLSX from 'xlsx';
import { useCSV } from './context.tsx'

const FileReaderComponent: React.FC = () => {
  // const [fileData, setFileData] = useState<any[][]>([]);
  const { csvData, setCSVData } = useCSV();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    const fileExtension = file.name.split('.').pop()?.toLowerCase();

    reader.onload = (event) => {
      const fileContent = event.target?.result;

      try {
        if (fileExtension === 'csv') {
          // Parse CSV into 2D array with headers
          const csvData = d3.csvParseRows(fileContent as string);
          setCSVData(csvData)
          // setFileData(csvData);
          alert(`Parsed ${csvData.length} rows from CSV!`);
        } else if (fileExtension === 'xlsx' || fileExtension === 'xls') {
          // Parse Excel into 2D array with headers
          const workbook = XLSX.read(fileContent, { type: 'binary' });
          const sheetName = workbook.SheetNames[0];
          const sheetData = XLSX.utils.sheet_to_json(
            workbook.Sheets[sheetName],
            { header: 1 } // Key change for 2D array
          ) as any[][];
          setCSVData(sheetData)
          // setFileData(sheetData);
          alert(`Parsed ${sheetData.length} rows from Excel!`);
        } else {
          alert('Unsupported file format.');
        }
      } catch (error) {
        console.error('Error parsing file:', error);
        alert('Error parsing the file.');
      }
    };

    // Read methods remain unchanged
    if (fileExtension === 'csv') reader.readAsText(file);
    else reader.readAsBinaryString(file);
  };

  return (
    <div>
    <h2> Read both csv and XLSX into 2D Array</h2>
      <input type="file" onChange={handleFileUpload} accept=".csv,.xls,.xlsx" />
      {
        /*
        csvData.length > 0 && (
        <div>
          <h2>2D Array Output:</h2>
          <pre>{JSON.stringify(csvData, null, 2)}</pre>
        </div>
        )
        */
      }
    </div>
  );
};

export default FileReaderComponent

