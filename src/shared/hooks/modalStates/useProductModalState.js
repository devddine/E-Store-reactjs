/**
 * @fileoverview Custom hook to manage product modal state and validation.
 */

import { useState, useEffect } from "react";
import { validateTextInput } from "../../utils/validators";

/**
 * useProductModalState hook manages state and validation for product modals.
 * @param {boolean} show - Flag indicating if the modal is shown.
 * @param {string} mode - Mode of the modal ('add', 'edit', 'view', 'delete').
 * @param {Object} item - The item being edited or viewed.
 * @param {Function} onAdd - Callback for add action.
 * @param {Function} onEdit - Callback for edit action.
 * @param {Function} onDelete - Callback for delete action.
 * @param {Function} onHide - Callback to hide the modal.
 * @returns {Object} Modal state, errors, and handlers.
 */
const useProductModalState = (show, mode, item, onAdd, onEdit, onDelete, onHide) => {
  const isAdd = mode === "add";
  const isEdit = mode === "edit";
  const isView = mode === "view";
  const isDelete = mode === "delete";

  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");

  useEffect(() => {
    isAdd && show && setTitle("");
    (isEdit || isDelete || isView) && setTitle(item.title);
    setTitleError("");
  }, [item, isEdit, isView, isDelete, isAdd, show]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { valid, message } = validateTextInput(title);
    if (!valid) {
      setTitleError(message);
      return;
    }
    setTitleError("");
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
    titleError,
    handleSubmit,
  };
};

export default useProductModalState;
