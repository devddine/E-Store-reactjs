import { useState, useEffect } from "react";

const useProductModalState = (show, mode, item, onAdd, onEdit, onDelete, onHide) => {
  const isAdd = mode === "add";
  const isEdit = mode === "edit";
  const isView = mode === "view";
  const isDelete = mode === "delete";

  const [title, setTitle] = useState("");

  useEffect(() => {
    isAdd && show && setTitle("");
    (isEdit || isDelete || isView) && setTitle(item.title);
  }, [item, isEdit, isView, isDelete, isAdd, show]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    try {
      isAdd && onAdd({ title });
      isEdit && onEdit(item._id, { title });
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
    title,
    setTitle,
    handleSubmit,
  };
};

export default useProductModalState;
