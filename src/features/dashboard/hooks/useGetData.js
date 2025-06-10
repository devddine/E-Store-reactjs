/**
 * @fileoverview Custom hook to fetch products, stock, and sales data with loading state.
 */

import useSale from "../../sales/hooks/useSale";
import useProducts from "../../products/hooks/useProducts";
import useStock from "../../stock/hooks/useStock";

/**
 * useGetData hook aggregates data from products, stock, and sales hooks.
 * @returns {Object} An object containing productsData, stockData, salesData, and loading state.
 */
const useGetData = () => {
  const productsData = useProducts();
  const stockData = useStock();
  const salesData = useSale();

  // Determine loading state if any of the data hooks are loading
  const loading = productsData.loading || stockData.loading || salesData.loading;

  return { productsData: productsData.products, stockData: stockData.stock, salesData: salesData.sales, loading };
};

export default useGetData;
