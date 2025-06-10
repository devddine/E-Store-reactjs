/**
 * @fileoverview Custom hook to handle adding a new stock with loading state.
 */

import { useState } from "react";
import { createStock } from "../services/stockService";

/**
 * useAddStock hook provides a handler to add a stock and track loading state.
 * @param {Function} onSuccess - Callback function to call on successful addition.
 * @returns {Object} Object containing handleAddStock function and adding loading state.
 */
const useAddStock = (onSuccess) => {
  const [adding, setAdding] = useState(false);

  /**
   * Handles adding a new stock asynchronously.
   * @param {Object} data - Stock data to add.
   */
  const handleAddStock = async (data) => {
    setAdding(true);
    try {
      await createStock(data);
      onSuccess?.();
    } catch (error) {
      console.error("Error adding stock:", error);
    } finally {
      setAdding(false);
    }
  };

  return { handleAddStock, adding };
};

export default useAddStock;
