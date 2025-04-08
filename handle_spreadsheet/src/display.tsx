import React from 'react';
import { useCSV } from './context.tsx'

interface Table2DProps {
  data: (string | number)[][];
}

const Table2D: React.FC<Table2DProps> = () => {

  const { csvData, setCSVData } = useCSV();
  const data = csvData
  if (data.length <=0) return

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          {data[0] && (
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              {data[0].map((header, colIndex) => (
                <th 
                  key={`header-${colIndex}`} 
                  style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold' }}
                >
                  {header}
                </th>
              ))}
            </tr>
          )}
        </thead>
        <tbody>
          {data.slice(1).map((row, rowIndex) => (
            <tr key={`row-${rowIndex}`}>
              {row.map((cell, colIndex) => (
                <td 
                  key={`cell-${rowIndex}-${colIndex}`}
                  style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left' }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table2D;

