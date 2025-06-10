import ReactECharts from "echarts-for-react";
import { useTranslation } from "react-i18next";

const AreaChart = ({ stockData, salesData }) => {
  const { t } = useTranslation();
  const option = {
    title: {
      text: t("dashboard.charts.area.title"),
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
      data: t("dashboard.charts.weekdays", { returnObjects: true }),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: t("dashboard.charts.area.series1"),
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
        name: t("dashboard.charts.area.series2"),
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
