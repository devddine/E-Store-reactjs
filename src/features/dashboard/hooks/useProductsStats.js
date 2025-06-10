/**
 * @fileoverview Custom hook to calculate total products, stock, and sales statistics.
 */

import { useEffect, useState } from "react";

/**
 * useProductsStats hook calculates total products, stock, and sales from products data.
 * @param {Array<Object>} productsData - Array of product objects.
 * @returns {Object} Object containing totalProducts, totalStock, and totalSales.
 */
const useProductsStats = (productsData) => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalStock, setTotalStock] = useState(0);
  const [totalSales, setTotalSales] = useState(0);

  // Calculate totals whenever productsData changes
  useEffect(() => {
    setTotalProducts(productsData.length);
    productsData.forEach((product) => {
      setTotalStock((prevTotalStock) => (prevTotalStock += product.stock_available));
      setTotalSales((prevTotalSales) => (prevTotalSales += product.sells));
    });
  }, [productsData]);

  return { totalProducts, totalStock, totalSales };
};

export default useProductsStats;
