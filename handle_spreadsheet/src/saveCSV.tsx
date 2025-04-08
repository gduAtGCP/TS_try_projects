import { useCSV } from './context.tsx'

function arrayToCSV(data: (string | number)[][], delimiter = ','): string {
    console.log(data)
  return data
    .map(row => 
      row
        .map(cell => `"${cell.toString().replace(/"/g, '""')}"`) // Escape quotes
        .join(delimiter)
    )
    .join('\n');
}

function downloadCSV(content: string, filename: string): void {
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function SaveCSV(){
    const { csvData, setCSVData } = useCSV();

    // const data: (string | number)[][] = [
    //       ["Name", "Age", "City"],
    //       ["Alice", "30", "New York"],
    //       ["Bob", "25", "San Francisco"]]
   // console.log(ata)
   
   function saveFile(){
        const csvString = arrayToCSV(csvData);
    downloadCSV(csvString, 'output.csv');
    }

    return (
        <div>
        <h2> SAVE FILE</h2>
        <button onClick={saveFile}> Download File </button>
        </div>
    )

}

export default SaveCSV


