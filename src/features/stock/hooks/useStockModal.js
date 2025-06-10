/**
 * @fileoverview Custom hook to manage stock modal state and current stock data.
 */

import { useState } from "react";

/**
 * useStockModal hook manages modal mode and current stock state.
 * @returns {Object} Object containing modalMode, currentStock, openModal, and closeModal functions.
 */
const useStockModal = () => {
  const [modalMode, setModalMode] = useState(null);
  const [currentStock, setCurrentStock] = useState(null);

  /**
   * Opens the modal with specified mode and optional stock data.
   * @param {string|null} mode - Modal mode (e.g., add, edit, view, delete).
   * @param {Object|null} stock - Stock data to set as current.
   */
  const openModal = (mode, stock = null) => {
    setCurrentStock(stock);
    setModalMode(mode);
  };

  /**
   * Closes the modal and clears current stock data.
   */
  const closeModal = () => {
    setModalMode(null);
    setCurrentStock(null);
  };

  return {
    modalMode,
    currentStock,
    openModal,
    closeModal,
  };
};

export default useStockModal;
