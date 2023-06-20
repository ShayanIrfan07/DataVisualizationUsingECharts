import React, { useState } from "react";
import LineChart from "./components/LineChart";
import lineChartData from "./components/LIneChartData";

const App: React.FC = () => {
  const [selectedData, setSelectedData] = useState("filled bottles");

  const handleDataChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedData(e.target.value);
  };

  let data: { xAxisData: string[]; seriesData: string[] | number[] } | undefined;
  switch (selectedData) {
    case "filled bottles":
      data = lineChartData.filledBottlesData;
      break;
    case "CIP":
      data = lineChartData.cipData;
      break;
    case "Labeller production":
      data = lineChartData.labellerProductionData;
      break;
    case "Number of Good Cases":
      data = lineChartData.goodCasesData;
      break;
    default:
      data = undefined;
      break;
  }

  return (
    <div>
      <div className="flex justify-between items-center px-4 py-2 bg-gray-200">
        <h1 className="text-lg font-semibold">Production Trend</h1>
        <select
          value={selectedData}
          onChange={handleDataChange}
          className="px-4 py-2 bg-white border border-gray-300 rounded-md"
        >
          <option value="filled bottles">Filled Bottles</option>
          <option value="CIP">CIP</option>
          <option value="Labeller production">Labeller Production</option>
          <option value="Number of Good Cases">Number of Good Cases</option>
        </select>
      </div>
      {data && <LineChart data={data} />}
    </div>
  );
};

export default App;
