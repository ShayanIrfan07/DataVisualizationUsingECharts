import React from "react";
import LineChartData from "@/Data/lineChartData";

const LineChart: React.FC = () => {
  return (
    <div className="p-3 flex flex-col space-y-6">
      <LineChartData />
    </div>
  );
};

export default LineChart;
