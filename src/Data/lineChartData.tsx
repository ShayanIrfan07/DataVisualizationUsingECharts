const lineChartOption = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Filled Bottles', 'Filler Main Motor', 'Labeller Production']
  },
  grid: {
     left: '3%',
     right: '4%',
     bottom: '3%',
     top: '3%',
     containLabel: true
  }, 
  toolbox: {
    feature: {
      saveAsImage: {},
      dataZoom: {
        yAxisIndex: 'none'
      },
      restore: {} 
    }

  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['12', '16', '20', '7', '4']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Filled Bottles',
      data: [328631,465, 948, 1431, 1915, 2394, 2394,2877],
      type: 'line',
      stack:'Total'
    },
    {
      name: 'Filler Main Motor',
      type: 'line',
      stack: 'Total',
      data: [28525191, 5255137, 35267131, 35267131, 38589623, 38604615, 38625622, 38645120]
    },
    {
      name: 'Labeller Production',
      type: 'line',
      stack: 'Total',
      data: [235742, 244741, 267297, 290601, 302318, 332837, 336442, 340027]

    }
    ]
};

export default lineChartOption;
