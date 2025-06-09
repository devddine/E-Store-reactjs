
import ReactECharts from "echarts-for-react";

const BarChart = ({ stockData, salesData, weekdays }) => {
  const option = {
    title: {
      text: "Total des articles",
      left: "center",
      top: 10,
      textStyle: {
        color: "black",
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: weekdays,
      },
    ],
    yAxis: [
      {
        type: "value",
        boundaryGap: [0, 0.01],
      },
    ],
    series: [
      {
        name: "Stock",
        type: "bar",
        data: stockData,
        animationDelay: () => Math.random() * 2000,
      },
      {
        name: "Ventes",
        type: "bar",
        data: salesData,
        animationDelay: () => Math.random() * 2000,
      },
    ],
  };

  return <ReactECharts option={option} />;
};

export default BarChart;
