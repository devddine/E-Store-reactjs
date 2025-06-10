import useSale from "../../sales/hooks/useSale";
import useProducts from "../../products/hooks/useProducts";
import useStock from "../../stock/hooks/useStock";

const useGetData = () => {
  const productsData = useProducts();
  const stockData = useStock();
  const salesData = useSale();
  const loading = productsData.loading || stockData.loading || salesData.loading;

  return { productsData: productsData.products, stockData: stockData.stock, salesData: salesData.sales, loading };
};

export default useGetData;
