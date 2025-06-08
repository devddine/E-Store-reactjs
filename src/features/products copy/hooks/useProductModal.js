import { useState } from "react";

const useProductModal = () => {
  const [modalMode, setModalMode] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(null);

  const openModal = (mode, product = null) => {
    setCurrentProduct(product);
    setModalMode(mode);
  };

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
