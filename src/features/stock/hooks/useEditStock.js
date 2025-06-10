/**
 * @fileoverview Custom hook to handle editing a stock with loading state.
 */

import { useState } from "react";
import { updateStock } from "../services/stockService";

/**
 * useEditStock hook provides a handler to edit a stock and track loading state.
 * @param {Function} onSuccess - Callback function to call on successful update.
 * @returns {Object} Object containing handleEditStock function and updating loading state.
 */
const useEditStock = (onSuccess) => {
  const [updating, setUpdating] = useState(false);

  /**
   * Handles editing a stock asynchronously.
   * @param {string|number} id - ID of the stock to update.
   * @param {Object} data - Updated stock data.
   */
  const handleEditStock = async (id, data) => {
    setUpdating(true);
    try {
      await updateStock(id, data);
      onSuccess?.();
    } catch (error) {
      console.error("Error updating stock:", error);
    } finally {
      setUpdating(false);
    }
  };

  return { handleEditStock, updating };
};

export default useEditStock;
