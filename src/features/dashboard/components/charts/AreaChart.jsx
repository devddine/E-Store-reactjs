import ReactECharts from "echarts-for-react";

const AreaChart = ({ stockData, salesData, weekdays }) => {
  const option = {
    title: {
      text: "Stock Quantité vs Ventes Quantité",
      left: "center",
      top: 20,
      textStyle: {
        color: "black",
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#7749F8",
        },
      },
    },
    grid: {
      left: "0%",
      right: "0%",
      bottom: "0%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: weekdays,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Stock",
        type: "line",
        smooth: true,
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: stockData,
        animationDelay: () => Math.random() * 2000,
      },
      {
        name: "Ventes",
        type: "line",
        smooth: true,
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: salesData,
        animationDelay: () => Math.random() * 2000,
      },
    ],
  };

  return <ReactECharts option={option} />;
};

export default AreaChart;
