import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CSVReader from './readcsv.tsx'
// import FileReaderComponent from './readboth.tsx'
import FileReaderComponent from './read2dArray.tsx'
import SaveCSV from './saveCSV.tsx'
import { CSVProvider } from './context.tsx' 
// import Table2D from './display.tsx'
import EditableTable from './editableTable.tsx'
function App() {

  return (
    <>
      <CSVProvider>
      {/*          <CSVReader /> 
          <Table2D />*/}
          <EditableTable />
          <FileReaderComponent />
          <SaveCSV />
      </CSVProvider>
    </>
  )
}

export default App
