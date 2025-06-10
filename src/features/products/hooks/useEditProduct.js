/**
 * @fileoverview Custom hook to handle updating a product with loading state.
 */

import { useState } from "react";
import { updateProduct } from "../services/productService";

/**
 * useEditProduct hook provides a handler to update a product and track loading state.
 * @param {Function} onSuccess - Callback function to call on successful update.
 * @returns {Object} Object containing handleEditProduct function and updating loading state.
 */
const useEditProduct = (onSuccess) => {
  const [updating, setUpdating] = useState(false);

  /**
   * Handles updating a product asynchronously.
   * @param {string|number} id - ID of the product to update.
   * @param {Object} data - Updated product data.
   */
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
