import React from "react";
import ReactECharts from "echarts-for-react";

const data = [
  {
    id: 7635059,
    tagId: "Tags.Line_1_Filler.Filler.Tags.Filler_production_counter",
    machineId: "lahori-line1",
    tagValue: "2394",
    time: 1686623723025,
    createdAt: "2023-06-13T02:38:08.000Z"
  },
  {
    id: 7635085,
    tagId: "Tags.Line_1_Filler.Filler.Tags.Filler_production_counter",
    machineId: "lahori-line1",
    tagValue: "2394",
    time: 1686623723025,
    createdAt: "2023-06-13T02:38:09.000Z"
  },
  {
    id: 7635144,
    tagId: "Tags.Line_1_Filler.Filler.Tags.Filler_production_counter",
    machineId: "lahori-line1",
    tagValue: "2877",
    time: 1686623783035,
    createdAt: "2023-06-13T02:39:01.000Z"
  }
];

const LineChartData = () => {
  const option = {
    xAxis: {
      type: "category",
      data: data.map(item => item.time),
      axisTick: {
        alignWithLabel: true
      }
    },
    yAxis: {
      type: "value"
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross"
      }
    },
    series: [
      {
        data: data.map(item => item.tagValue),
        type: "line"
      }
    ]
  };

  return <ReactECharts option={option} style={{ width: "100%", height: "400px" }} />;
};

export default LineChartData;
