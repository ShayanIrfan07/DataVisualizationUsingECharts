import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import DropdownMenu from "./DropDown"

interface LineChartProps {
  data: {
    xAxisData: string[];
    seriesData: (string | number )[];
  };
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
      const options = {
        xAxis: {
          type: "category",
          data: data.xAxisData,
          axisTick:{
            alignWithLabel: true,
          }
        },
        yAxis: {
          type: "value",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
        },
        series: [
          {
            data: data.seriesData,
            type: "line",
          },
        ],
      };

      chart.setOption(options);
    }
  }, [data]);

  return <div ref={chartRef} className="w-full h-80"></div>;
};

export default LineChart;
