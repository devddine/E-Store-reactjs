/**
 * @fileoverview Custom hook to handle deleting a sale with loading state.
 */

import { useState } from "react";
import { deleteSale } from "../services/saleService";

/**
 * useDeleteSale hook provides a handler to delete a sale and track loading state.
 * @param {Function} onSuccess - Callback function to call on successful deletion.
 * @returns {Object} Object containing handleDeleteSale function and deleting loading state.
 */
const useDeleteSale = (onSuccess) => {
  const [deleting, setDeleting] = useState(false);

  /**
   * Handles deleting a sale asynchronously.
   * @param {string|number} id - ID of the sale to delete.
   */
  const handleDeleteSale = async (id) => {
    setDeleting(true);
    try {
      await deleteSale(id);
      onSuccess?.();
    } catch (error) {
      console.error("Error deleting sale:", error);
    } finally {
      setDeleting(false);
    }
  };

  return { handleDeleteSale, deleting };
};
export default useDeleteSale;
