import { useState } from "react";
import { createProduct } from "../services/productService";

const useAddProduct = (onSuccess) => {
  const [adding, setAdding] = useState(false);

  const handleAddProduct = async (data) => {
    setAdding(true);
    try {
      await createProduct(data);
      onSuccess?.();
    } catch (error) {
      console.error("Error adding product:", error);
    } finally {
      setAdding(false);
    }
  };

  return { handleAddProduct, adding };
};

export default useAddProduct;
