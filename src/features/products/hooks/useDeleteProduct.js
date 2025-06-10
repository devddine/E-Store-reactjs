/**
 * @fileoverview Custom hook to handle deleting a product with loading state.
 */

import { useState } from "react";
import { deleteProduct } from "../services/productService";

/**
 * useDeleteProduct hook provides a handler to delete a product and track loading state.
 * @param {Function} onSuccess - Callback function to call on successful deletion.
 * @returns {Object} Object containing handleDeleteProduct function and deleting loading state.
 */
const useDeleteProduct = (onSuccess) => {
  const [deleting, setDeleting] = useState(false);

  /**
   * Handles deleting a product asynchronously.
   * @param {string|number} id - ID of the product to delete.
   */
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
