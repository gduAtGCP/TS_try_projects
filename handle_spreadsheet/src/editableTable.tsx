// EditableTable.tsx
import React from 'react';
import { useCSV } from './context.tsx'

const EditableTable: React.FC = () => {
  const { csvData, setCSVData, updateCell } = useCSV();

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ backgroundColor: 'grey' }}>
            {csvData[0]?.map((header, colIndex) => (
              <th 
                key={`header-${colIndex}`}
                style={{ padding: '8px', border: '1px solid #ddd' }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {csvData.slice(1).map((row, rowIndex) => (
            <tr key={`row-${rowIndex}`}>
              {row.map((cell, colIndex) => (
                <td 
                  key={`cell-${rowIndex}-${colIndex}`}
                  style={{ padding: '8px', border: '1px solid #ddd' }}
                >
                  <input
                    type="text"
                    value={cell}
                    onChange={(e) => 
                      updateCell(rowIndex + 1, colIndex, e.target.value)
                    }
                    style={{ border: 'none', width: '100%' }}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditableTable;

