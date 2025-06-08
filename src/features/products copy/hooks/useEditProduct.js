import { useState } from "react";
import { updateProduct } from "../services/productService";

const useEditProduct = (onSuccess) => {
  const [updating, setUpdating] = useState(false);

  const handleEditProduct = async (id, data) => {
    setUpdating(true);
    try {
      await updateProduct(id, data);
      onSuccess?.();
    } catch (error) {
      console.error("Error updating product:", error);
    } finally {
      setUpdating(false);
    }
  };

  return { handleEditProduct, updating };
};

export default useEditProduct;
