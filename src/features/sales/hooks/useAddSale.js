import { useState } from "react";
import { createSale } from "../services/saleService";

const useAddSale = (onSuccess) => {
  const [adding, setAdding] = useState(false);

  const handleAddSale = async (data) => {
    setAdding(true);
    try {
      await createSale(data);
      onSuccess?.();
    } catch (error) {
      console.error("Error adding sale:", error);
    } finally {
      setAdding(false);
    }
  };

  return { handleAddSale, adding };
};

export default useAddSale;
