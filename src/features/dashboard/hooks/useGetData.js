import { useEffect, useState } from "react";
import { fetchProducts } from "../../products/services/productService";
import { fetchSales } from "../../sales/services/saleService";
import { fetchStocks } from "../../stock/services/stockService";

const useGetData = () => {
  const [productsData, setProductsData] = useState([]);
  const [stockData, setStockData] = useState([]);
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const refreshSales = async () => {
      setLoading(true);
      try {
        const resProducts = await fetchProducts();
        const resStock = await fetchStocks();
        const resSales = await fetchSales();

        setProductsData(resProducts.data);
        setStockData(resStock.data);
        setSalesData(resSales.data);
      } catch (err) {
        console.error("Failed to fetch data:", err);
      } finally {
        setLoading(false);
      }
    };
    refreshSales();
  }, []);

  return { productsData, stockData, salesData, loading };
};

export default useGetData;
