import { useState } from "react";
import { deleteStock } from "../services/stockService";

const useDeleteStock = (onSuccess) => {
    const [deleting, setDeleting] = useState(false);
  
    const handleDeleteStock = async (id) => {
      setDeleting(true);
      try {
        await deleteStock(id);
        onSuccess?.();
      } catch (error) {
        console.error("Error deleting stock:", error);
      } finally {
        setDeleting(false);
      }
    };
  
    return { handleDeleteStock, deleting };
};
export default useDeleteStock;