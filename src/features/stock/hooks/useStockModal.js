import { useState } from "react";

const useStockModal = () => {
  const [modalMode, setModalMode] = useState(null);
  const [currentStock, setCurrentStock] = useState(null);

  const openModal = (mode, stock = null) => {
    setCurrentStock(stock);
    setModalMode(mode);
  };

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
