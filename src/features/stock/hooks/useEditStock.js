import { useState } from "react";
import { updateStock } from "../services/stockService";

const useEditStock = (onSuccess) => {
  const [updating, setUpdating] = useState(false);

  const handleEditStock = async (id, data) => {
    setUpdating(true);
    try {
      await updateStock(id, data);
      onSuccess?.();
    } catch (error) {
      console.error("Error updating stock:", error);
    } finally {
      setUpdating(false);
    }
  };

  return { handleEditStock, updating };
};

export default useEditStock;
