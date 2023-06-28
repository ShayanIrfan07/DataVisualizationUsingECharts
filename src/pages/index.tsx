import React from 'react';
import LineChart from "@/Data/lineChartData";
import ChartWrapper from "@/components/wrapper component";
import EchartRenderer from "@/components/ChartRender";

const App: React.FC = () => {
  return (
    <div className='p-3 flex flex-col space-y-6'>
      <ChartWrapper title='Production Trend'>
        <EchartRenderer option={LineChart} />
      </ChartWrapper>
    </div>
  );
};

export default App;
