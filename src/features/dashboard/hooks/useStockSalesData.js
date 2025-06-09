import { useEffect, useState } from "react";
import { getDayOfWeek } from "../../../shared/utils/dateUtils";

const useStockSalesData = (stockData, salesData) => {
  const [stock, setStock] = useState(new Array(7).fill(0));
  const [sales, setSales] = useState(new Array(7).fill(0));
  const [stockLength, setStockLength] = useState(new Array(7).fill(0));
  const [salesLength, setSalesLength] = useState(new Array(7).fill(0));

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
