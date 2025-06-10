/**
 * @fileoverview Custom hook to aggregate stock and sales data by day of the week.
 */

import { useEffect, useState } from "react";
import { getDayOfWeek } from "../../../shared/utils/dateUtils";

/**
 * useStockSalesData hook calculates daily totals and counts for stock and sales data.
 * @param {Array<Object>} stockData - Array of stock operation objects.
 * @param {Array<Object>} salesData - Array of sales operation objects.
 * @returns {Object} Object containing arrays for stock, sales, stockLength, and salesLength by weekday.
 */
const useStockSalesData = (stockData, salesData) => {
  const [stock, setStock] = useState(new Array(7).fill(0));
  const [sales, setSales] = useState(new Array(7).fill(0));
  const [stockLength, setStockLength] = useState(new Array(7).fill(0));
  const [salesLength, setSalesLength] = useState(new Array(7).fill(0));

  // Calculate sums and counts of articles grouped by day of the week
  useEffect(() => {
    const newStock = new Array(7).fill(0);
    const newStockLength = new Array(7).fill(0);
    const newSales = new Array(7).fill(0);
    const newSalesLength = new Array(7).fill(0);

    stockData.forEach((s) => {
      const weekdayIndex = getDayOfWeek(s.date);
      let sum = 0;

      s.articles.forEach((product) => {
        sum += product.quantity;
      });

      newStock[weekdayIndex] += sum;
      newStockLength[weekdayIndex] += s.articles.length;
    });

    salesData.forEach((s) => {
      const weekdayIndex = getDayOfWeek(s.date);
      let sum = 0;

      s.articles.forEach((product) => {
        sum += product.quantity;
      });

      newSales[weekdayIndex] += sum;
      newSalesLength[weekdayIndex] += s.articles.length;
    });

    setStock(newStock);
    setStockLength(newStockLength);
    setSales(newSales);
    setSalesLength(newSalesLength);
  }, [stockData, salesData]);

  return { stock, sales, stockLength, salesLength };
};

export default useStockSalesData;
