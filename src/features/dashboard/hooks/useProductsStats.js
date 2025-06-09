import { useEffect, useState } from "react";

const useProductsStats = (productsData) => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalStock, setTotalStock] = useState(0);
  const [totalSales, setTotalSales] = useState(0);

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
