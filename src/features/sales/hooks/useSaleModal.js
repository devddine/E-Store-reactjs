/**
 * @fileoverview Custom hook to manage sale modal state and current sale data.
 */

import { useState } from "react";

/**
 * useSaleModal hook manages modal mode and current sale state.
 * @returns {Object} Object containing modalMode, currentSale, openModal, and closeModal functions.
 */
const useSaleModal = () => {
  const [modalMode, setModalMode] = useState(null);
  const [currentSale, setCurrentSale] = useState(null);

  /**
   * Opens the modal with specified mode and optional sale data.
   * @param {string|null} mode - Modal mode (e.g., add, edit, view, delete).
   * @param {Object|null} sale - Sale data to set as current.
   */
  const openModal = (mode, sale = null) => {
    setCurrentSale(sale);
    setModalMode(mode);
  };

  /**
   * Closes the modal and clears current sale data.
   */
  const closeModal = () => {
    setModalMode(null);
    setCurrentSale(null);
  };

  return {
    modalMode,
    currentSale,
    openModal,
    closeModal,
  };
};

export default useSaleModal;
