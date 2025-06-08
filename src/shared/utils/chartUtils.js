/**
* @fileoverview Chart utility functions for rendering stock, sales, and product statistics charts.
*/

import { elements } from "../domElements.js";
import { getDayOfWeek } from "./dateUtils.js";

// * Weekday abbreviations in French
const weekdays = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
// * Default title color for charts
const titleColor = "#707070";

/**
* Renders a line chart comparing stock and sales data
* @param {Array} stock - Stock transaction data
* @param {Array} sales - Sales transaction data
*/
export function renderLineChart(stock, sales) {
 // ! Initialize data arrays for stock and sales
 const stockData = new Array(7).fill(0);
 const salesData = new Array(7).fill(0);

 // * Aggregate stock quantities by day
 stock.forEach((item) => {
   const weekdayIndex = getDayOfWeek(item.date);
   let sum = 0;

   item.articles.forEach((product) => {
     sum += product.quantity;
   });
   
   stockData[weekdayIndex] += sum;
 });

 // * Aggregate sales quantities by day
 sales.forEach((item) => {
   const weekdayIndex = getDayOfWeek(item.date);
   let sum = 0;

   item.articles.forEach((product) => {
     sum += product.quantity;
   });

   salesData[weekdayIndex] += sum;
 });

 // ? Initialize ECharts line chart
 const dom = elements.lineChart
 const myChart = echarts.init(dom);
 const option = {
   title: {
     text: "Stock vs Ventes",
     left: "center",
     top: 20,
     textStyle: {
       color: titleColor,
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
   xAxis: [
     {
       type: "category",
       boundaryGap: false,
       data: weekdays,
     },
   ],
   yAxis: [
     {
       type: "value",
     },
   ],
   series: [
     {
       name: "stock",
       type: "line",
       smooth: true,
       areaStyle: {},
       emphasis: {
         focus: "series",
       },
       data: stockData,
       // * Random animation delay for visual interest
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
       // * Random animation delay for visual interest
       animationDelay: () => Math.random() * 2000,
     },
   ],
 };

 myChart.setOption(option);
}

/**
* Calculates product statistics
* @param {Array} products - Product data array
* @returns {Object} Aggregated product statistics
*/
function getProductStats(products) {
 let totalStockAvailable = 0;
 let totalSells = 0;

 // * Sum total stock and sales
 products.forEach((product) => {
   totalStockAvailable += product.stock_available;
   totalSells += product.sells;
 });

 return {
   totalProducts: products.length,
   totalStockAvailable,
   totalSells,
 };
}

/**
* Renders a pie chart showing product statistics
* @param {Array} products - Product data array
*/
export function renderPieChart(products) {
 // ? Calculate product statistics
 const stats = getProductStats(products);
 const dom = elements.pieChart
 const myChart = echarts.init(dom);

 const option = {
   title: {
     text: "Statistiques sur les produits",
     left: "center",
     top: 10,
     textStyle: {
       color: titleColor,
     },
   },
   series: [
     {
       name: "Statistiques",
       type: "pie",
       radius: "50%",
       center: ["50%", "50%"],
       // * Use square root for more balanced visual representation
       data: [
         { value: Math.sqrt(stats.totalProducts), name: "Tout Produits" },
         { value: Math.sqrt(stats.totalSells), name: "Produits Vendus" },
         { value: Math.sqrt(stats.totalStockAvailable), name: "Produits en Stock" },
       ].sort((a, b) => a.value - b.value),
       roseType: "area",
       label: {
         color: titleColor,
       },
       labelLine: {
         smooth: 0.2,
         length: 10,
         length2: 20,
       },
       // * Animated scale effect
       animationType: "scale",
       animationEasing: "elasticOut",
       animationDelay: () => Math.random() * 2000,
     },
   ],
 };

 myChart.setOption(option);
}

/**
* Renders a bar chart comparing stock and sales article counts
* @param {Array} stock - Stock transaction data
* @param {Array} sales - Sales transaction data
*/
export function renderBarChart(stock, sales) {
 // ! Initialize data arrays for stock and sales article counts
 const stockData = new Array(7).fill(0);
 const salesData = new Array(7).fill(0);

 // * Aggregate stock article counts by day
 stock.forEach((item) => {
   const weekdayIndex = getDayOfWeek(item.date);
   stockData[weekdayIndex] += item.articles.length;
 });

 // * Aggregate sales article counts by day
 sales.forEach((item) => {
   const weekdayIndex = getDayOfWeek(item.date);
   salesData[weekdayIndex] += item.articles.length;
 });

 // ? Initialize ECharts bar chart
 const dom = elements.barChart
 const myChart = echarts.init(dom);

 const option = {
   title: {
     text: "Total des articles",
     left: "center",
     top: 10,
     textStyle: {
       color: titleColor,
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
       // * Random animation delay for visual interest
       animationDelay: () => Math.random() * 2000,
     },
     {
       name: "Ventes",
       type: "bar",
       data: salesData,
       // * Random animation delay for visual interest
       animationDelay: () => Math.random() * 2000,
     },
   ],
 };

 myChart.setOption(option);
}