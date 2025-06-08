import { useState } from "react";
import { deleteSale } from "../services/saleService";

const useDeleteSale = (onSuccess) => {
  const [deleting, setDeleting] = useState(false);

  const handleDeleteSale = async (id) => {
    setDeleting(true);
    try {
      await deleteSale(id);
      onSuccess?.();
    } catch (error) {
      console.error("Error deleting sale:", error);
    } finally {
      setDeleting(false);
    }
  };

  return { handleDeleteSale, deleting };
};
export default useDeleteSale;
