import React from 'react';
import ReactEcharts from 'echarts-for-react';

const EchartRenderer: React.FC<{ option? : any }> = ({ option }) => {
    return (
        <div className='w-full h-80 p-3'>
            <ReactEcharts option={option} />
        </div>
    );
};

export default EchartRenderer;