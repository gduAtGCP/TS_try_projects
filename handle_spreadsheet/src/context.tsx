// CSVContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface CSVContextType {
  csvData: (string | number)[][];
  setCSVData: React.Dispatch<React.SetStateAction<(string | number)[][]>>;
  updateCell?: (rowIndex: number, colIndex: number, value: string | number) => void;
}

const CSVContext = createContext<CSVContextType | undefined>(undefined);

export const CSVProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [csvData, setCSVData] = useState<(string | number)[][]>([
    ['Name', 'Age', 'City'],
    ['Alice', 30, 'New York'],
    ['Bob', 25, 'San Francisco']
  ]);

  const updateCell = (rowIndex: number, colIndex: number, value: string | number) => {
    setCSVData(prev => {
      const newData = [...prev];
      newData[rowIndex] = [...newData[rowIndex]];
      newData[rowIndex][colIndex] = value;
      return newData;
    });
  };

  return (
    <CSVContext.Provider value={{ csvData, setCSVData, updateCell }}>
      {children}
    </CSVContext.Provider>
  );
};

export const useCSV = () => {
  const context = useContext(CSVContext);
  if (!context) throw new Error('useCSV must be used within a CSVProvider');
  return context;
};

