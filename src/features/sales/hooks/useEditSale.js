import { useState } from "react";
import { updateSale } from "../services/saleService";

const useEditSale = (onSuccess) => {
  const [updating, setUpdating] = useState(false);

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
