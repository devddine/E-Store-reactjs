
import ReactECharts from "echarts-for-react";
import { useTranslation } from "react-i18next";

const BarChart = ({ stockData, salesData }) => {
  const { t } = useTranslation();
  const option = {
    title: {
      text: t("dashboard.charts.bar.title"),
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
        data: t("dashboard.charts.weekdays", { returnObjects: true }),
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
        name: t("dashboard.charts.bar.series1"),
        type: "bar",
        data: stockData,
        animationDelay: () => Math.random() * 2000,
      },
      {
        name: t("dashboard.charts.bar.series2"),
        type: "bar",
        data: salesData,
        animationDelay: () => Math.random() * 2000,
      },
    ],
  };

  return <ReactECharts option={option} />;
};

export default BarChart;
