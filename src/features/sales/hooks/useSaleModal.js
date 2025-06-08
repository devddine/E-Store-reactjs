import { useState } from "react";

const useSaleModal = () => {
  const [modalMode, setModalMode] = useState(null);
  const [currentSale, setCurrentSale] = useState(null);

  const openModal = (mode, sale = null) => {
    setCurrentSale(sale);
    setModalMode(mode);
  };

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
