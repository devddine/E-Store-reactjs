/**
 * @fileoverview Custom hook to fetch and manage sales data with loading state.
 */

import { useEffect, useState } from "react";
import { fetchSales } from "../services/saleService";

/**
 * useSale hook fetches sales data and provides loading state and refresh function.
 * @returns {Object} Object containing sales array, loading boolean, and refreshSales function.
 */
const useSale = () => {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(false);

  /**
   * Fetches sales data asynchronously and updates state.
   */
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
