/**
 * @fileoverview Custom hook to handle deleting a stock with loading state.
 */

import { useState } from "react";
import { deleteStock } from "../services/stockService";

/**
 * useDeleteStock hook provides a handler to delete a stock and track loading state.
 * @param {Function} onSuccess - Callback function to call on successful deletion.
 * @returns {Object} Object containing handleDeleteStock function and deleting loading state.
 */
const useDeleteStock = (onSuccess) => {
  const [deleting, setDeleting] = useState(false);

  /**
   * Handles deleting a stock asynchronously.
   * @param {string|number} id - ID of the stock to delete.
   */
  const handleDeleteStock = async (id) => {
    setDeleting(true);
    try {
      await deleteStock(id);
      onSuccess?.();
    } catch (error) {
      console.error("Error deleting stock:", error);
    } finally {
      setDeleting(false);
    }
  };

  return { handleDeleteStock, deleting };
};

export default useDeleteStock;
