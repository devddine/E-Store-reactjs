// Fetch product list
import { useEffect, useState } from "react";
import { fetchStocks } from "../services/stockService";

const useStock = () => {
  const [stock, setStock] = useState([]);
  const [loading, setLoading] = useState(false);

  const refreshStock = async () => {
    setLoading(true);
    try {
      const res = await fetchStocks();
      setStock(res.data);
    } catch (err) {
      console.error("Failed to fetch stock:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshStock();
  }, []);

  return { stock, loading, refreshStock };
};

export default useStock;
