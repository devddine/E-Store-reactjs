import { useState, useEffect } from "react";

const useOperationModalState = (show, mode, item, onAdd, onEdit, onDelete, onHide) => {
  const isAdd = mode === "add";
  const isEdit = mode === "edit";
  const isView = mode === "view";
  const isDelete = mode === "delete";

  const [operation, setOperation] = useState({ name: "", date: "", articles: [] });

  useEffect(() => {
    if (isAdd && show) {
      setOperation({ name: "", date: new Date().toISOString().split("T")[0], articles: [] });
    }
    if ((isEdit || isView || isDelete) && item) {
      setOperation({
        name: item.name || "",
        date: item.date ? item.date.split("T")[0] : "",
        articles: Array.isArray(item.articles)
          ? item.articles.map((article) => ({
              title: article.product?.title || "",
              product: article.product?.id || "",
              quantity: article.quantity || 0,
            }))
          : [],
      });
    }
  }, [item, isEdit, isView, isDelete, isAdd, show]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!operation.name.trim() || !operation.date.trim()) return;
    try {
      isAdd && onAdd(operation);
      isEdit && onEdit(item._id, operation);
      isDelete && onDelete(item._id);
      onHide();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return {
    isAdd,
    isEdit,
    isView,
    isDelete,
    operation,
    setOperation,
    handleSubmit,
  };
};

export default useOperationModalState;
