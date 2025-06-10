/**
 * @fileoverview Custom hook to handle adding a new product with loading state.
 */

import { useState } from "react";
import { createProduct } from "../services/productService";

/**
 * useAddProduct hook provides a handler to add a product and track loading state.
 * @param {Function} onSuccess - Callback function to call on successful addition.
 * @returns {Object} Object containing handleAddProduct function and adding loading state.
 */
const useAddProduct = (onSuccess) => {
  const [adding, setAdding] = useState(false);

  /**
   * Handles adding a new product asynchronously.
   * @param {Object} data - Product data to add.
   */
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
