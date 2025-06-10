/**
 * @fileoverview Custom hook to handle editing a sale with loading state.
 */

import { useState } from "react";
import { updateSale } from "../services/saleService";

/**
 * useEditSale hook provides a handler to edit a sale and track loading state.
 * @param {Function} onSuccess - Callback function to call on successful update.
 * @returns {Object} Object containing handleEditSale function and updating loading state.
 */
const useEditSale = (onSuccess) => {
  const [updating, setUpdating] = useState(false);

  /**
   * Handles editing a sale asynchronously.
   * @param {string|number} id - ID of the sale to update.
   * @param {Object} data - Updated sale data.
   */
  const handleEditSale = async (id, data) => {
    setUpdating(true);
    try {
      await updateSale(id, data);
      onSuccess?.();
    } catch (error) {
      console.error("Error updating sale:", error);
    } finally {
      setUpdating(false);
    }
  };

  return { handleEditSale, updating };
};

export default useEditSale;
