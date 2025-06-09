
import ReactECharts from "echarts-for-react";

const PieChart = ({ stats }) => {
  const option = {
    title: {
      text: "Statistiques sur les produits",
      left: "center",
      top: 10,
      textStyle: {
        color: "black",
      },
    },
    series: [
      {
        name: "Statistiques",
        type: "pie",
        radius: "50%",
        center: ["50%", "50%"],
        data: [
          { value: Math.sqrt(stats.totalProducts), name: "Tout Produits" },
          { value: Math.sqrt(stats.totalSales), name: "Produits Vendus" },
          { value: Math.sqrt(stats.totalStock), name: "Produits en Stock" },
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
