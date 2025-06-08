import { useState } from "react";
import { createStock } from "../services/stockService";


const useAddStock = (onSuccess) => {
  const [adding, setAdding] = useState(false);

  const handleAddStock = async (data) => {
    setAdding(true);
    try {
      await createStock(data);
      onSuccess?.();
    } catch (error) {
      console.error("Error adding stock:", error);
    } finally {
      setAdding(false);
    }
  };

  return { handleAddStock, adding };
};

export default useAddStock;
