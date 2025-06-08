// Fetch product list
import { useEffect, useState } from "react";
import { fetchSales } from "../services/saleService";

const useSale = () => {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(false);

  const refreshSales = async () => {
    setLoading(true);
    try {
      const res = await fetchSales();
      setSales(res.data);
    } catch (err) {
      console.error("Failed to fetch sales:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshSales();
  }, []);

  return { sales, loading, refreshSales };
};

export default useSale;
