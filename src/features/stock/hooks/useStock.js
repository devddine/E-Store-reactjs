/**
 * @fileoverview Custom hook to fetch and manage stock data with loading state.
 */

import { useEffect, useState } from "react";
import { fetchStocks } from "../services/stockService";

/**
 * useStock hook fetches stock data and provides loading state and refresh function.
 * @returns {Object} Object containing stock array, loading boolean, and refreshStock function.
 */
const useStock = () => {
  const [stock, setStock] = useState([]);
  const [loading, setLoading] = useState(false);

  /**
   * Fetches stock data asynchronously and updates state.
   */
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
