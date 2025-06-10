/**
 * @fileoverview Custom hook to handle adding a new sale with loading state.
 */

import { useState } from "react";
import { createSale } from "../services/saleService";

/**
 * useAddSale hook provides a handler to add a sale and track loading state.
 * @param {Function} onSuccess - Callback function to call on successful addition.
 * @returns {Object} Object containing handleAddSale function and adding loading state.
 */
const useAddSale = (onSuccess) => {
  const [adding, setAdding] = useState(false);

  /**
   * Handles adding a new sale asynchronously.
   * @param {Object} data - Sale data to add.
   */
  const handleAddSale = async (data) => {
    setAdding(true);
    try {
      await createSale(data);
      onSuccess?.();
    } catch (error) {
      console.error("Error adding sale:", error);
    } finally {
      setAdding(false);
    }
  };

  return { handleAddSale, adding };
};

export default useAddSale;
