
/**
 * @fileoverview PieChart component renders a pie chart for product, sales, and stock stats using ECharts.
 */

import ReactECharts from "echarts-for-react";
import { useTranslation } from "react-i18next";

/**
 * PieChart component to display product, sales, and stock statistics as a pie chart.
 * @param {Object} props - Component props.
 * @param {Object} props.stats - Statistics object containing totalProducts, totalSales, and totalStock.
 * @returns {JSX.Element} The rendered pie chart component.
 */
const PieChart = ({ stats }) => {
  const { t } = useTranslation();

  // Chart options configuration for ECharts
  const option = {
    title: {
      text: t("dashboard.charts.pie.title"),
      left: "center",
      top: 10,
      textStyle: {
        color: "black",
      },
    },
    series: [
      {
        name: "stats",
        type: "pie",
        radius: "50%",
        center: ["50%", "50%"],
        data: [
          { value: Math.sqrt(stats.totalProducts), name: t("dashboard.charts.pie.series1") },
          { value: Math.sqrt(stats.totalSales), name: t("dashboard.charts.pie.series2") },
          { value: Math.sqrt(stats.totalStock), name: t("dashboard.charts.pie.series3") },
        ].sort((a, b) => a.value - b.value),
        roseType: "area",
        label: {
          color: "black",
        },
        labelLine: {
          smooth: 0.2,
          length: 10,
          length2: 20,
        },
        animationType: "scale",
        animationEasing: "elasticOut",
        animationDelay: () => Math.random() * 2000,
      },
    ],
  };

  return <ReactECharts option={option} />;
};

export default PieChart;
