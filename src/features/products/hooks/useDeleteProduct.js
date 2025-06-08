import { useState } from "react";
import { deleteProduct } from "../services/productService";

const useDeleteProduct = (onSuccess) => {
  const [deleting, setDeleting] = useState(false);

  const handleDeleteProduct = async (id) => {
    setDeleting(true);
    try {
      await deleteProduct(id);
      onSuccess?.();
    } catch (error) {
      console.error("Error deleting product:", error);
    } finally {
      setDeleting(false);
    }
  };

  return { handleDeleteProduct, deleting };
};

export default useDeleteProduct;
