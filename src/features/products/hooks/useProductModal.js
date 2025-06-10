/**
 * @fileoverview Custom hook to manage product modal state and current product.
 */

import { useState } from "react";

/**
 * useProductModal hook manages modal mode and current product state for product modals.
 * @returns {Object} Object containing modalMode, currentProduct, openModal, and closeModal.
 */
const useProductModal = () => {
  const [modalMode, setModalMode] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(null);

  /**
   * Opens the modal with a given mode and optional product.
   * @param {string|null} mode - Modal mode (e.g., "add", "edit", "view", "delete").
   * @param {Object|null} product - The product to set as current (optional).
   */
  const openModal = (mode, product = null) => {
    setCurrentProduct(product);
    setModalMode(mode);
  };

  /**
   * Closes the modal and clears current product.
   */
  const closeModal = () => {
    setModalMode(null);
    setCurrentProduct(null);
  };

  return {
    modalMode,
    currentProduct,
    openModal,
    closeModal,
  };
};

export default useProductModal;
