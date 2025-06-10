/**
 * @fileoverview Custom hook to fetch and manage product list with loading state.
 */

import { useEffect, useState } from "react";
import { fetchProducts } from "../services/productService";

/**
 * useProducts hook fetches product list and provides loading state and refresh function.
 * @returns {Object} Object containing products array, loading boolean, and refreshProducts function.
 */
const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  /**
   * Fetches products from API and updates state.
   */
  const refreshProducts = async () => {
    setLoading(true);
    try {
      const res = await fetchProducts();
      setProducts(res.data);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch products on initial mount
  useEffect(() => {
    refreshProducts();
  }, []);

  return { products, loading, refreshProducts };
};

export default useProducts;
