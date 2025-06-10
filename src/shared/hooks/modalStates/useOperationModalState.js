/**
 * @fileoverview Custom hook to manage operation modal state and validation.
 */

import { useState, useEffect } from "react";
import { validateTextInput, validateDateInput, listValidation } from "../../utils/validators";

/**
 * useOperationModalState hook manages state and validation for operation modals.
 * @param {boolean} show - Flag indicating if the modal is shown.
 * @param {string} mode - Mode of the modal ('add', 'edit', 'view', 'delete').
 * @param {Object} item - The item being edited or viewed.
 * @param {Function} onAdd - Callback for add action.
 * @param {Function} onEdit - Callback for edit action.
 * @param {Function} onDelete - Callback for delete action.
 * @param {Function} onHide - Callback to hide the modal.
 * @returns {Object} Modal state, errors, and handlers.
 */
const useOperationModalState = (show, mode, item, onAdd, onEdit, onDelete, onHide) => {
  const isAdd = mode === "add";
  const isEdit = mode === "edit";
  const isView = mode === "view";
  const isDelete = mode === "delete";

  const [operation, setOperation] = useState({ name: "", date: "", articles: [] });
  const [nameError, setNameError] = useState("");
  const [dateError, setDateError] = useState("");
  const [articlesError, setArticlesError] = useState("");

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
    setNameError("");
    setDateError("");
    setArticlesError("");
  }, [item, isEdit, isView, isDelete, isAdd, show]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { valid: nameValid, message: nameMessage } = validateTextInput(operation.name);
    const { valid: dateValid, message: dateMessage } = validateDateInput(operation.date);
    const { valid: listValid, message: listMessage } = listValidation(operation.articles);

    if (!nameValid || !dateValid || !listValid) {
      setNameError(nameMessage);
      setDateError(dateMessage);
      setArticlesError(listMessage);
      return;
    }
    setNameError("");
    setDateError("");
    setArticlesError("");
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
    nameError,
    dateError,
    articlesError,
    setArticlesError,
    handleSubmit,
  };
};

export default useOperationModalState;
