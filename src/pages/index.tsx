// import React from 'react';
// import { render } from 'react-dom';
// // import LineChart from '@/components/LineChart';
// import lineChartOption from '@/Data/lineChartData';
// import option from '@/Data/pieChartOptions';
// import ChartWrapper from '@/components/wrapper component';
// import EchartRenderer from '@/components/ChartRender';

// const App: React.FC = () => {  return (
//     <div className="p-3 flex flex-col space-y-6">
//       <ChartWrapper title='Production Trend'/>
//         <EchartRenderer option={lineChartOption} />
//         </ChartWrapper>

//     </div>
//   );
// };

import React, {useState} from "react";
import ChartWrapper from '@/components/wrapper component';
import EchartRenderer from "@/components/ChartRender";
import lineChartOptions from '@/Data/lineChartData';
import pieChartOptions from '@/Data/pieChartOptions';
import summaryoptions from "@/Data/pieChartOptions";
const App: React.FC = () => {
return (
    <div className='p-3 flex flex-col space-y-6'>
    <ChartWrapper title='Production Trend'>
        <EchartRenderer option={lineChartOptions} />
      </ChartWrapper>
<ChartWrapper title='Funnel View'>
        <EchartRenderer option={summaryoptions} />
      </ChartWrapper>
      <ChartWrapper title='Pie-Chart View'>
        <EchartRenderer option={pieChartOptions} />
      </ChartWrapper>
    </div>
  );
};

export default App;