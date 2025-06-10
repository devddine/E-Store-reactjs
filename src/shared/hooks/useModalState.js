/**
 * @fileoverview Custom hook to manage modal state for products and operations.
 */

import useProductModalState from "./modalStates/useProductModalState";
import useOperationModalState from "./modalStates/useOperationModalState";
import useArticleList from "./modalStates/useArticleList";

/**
 * useModalState hook returns modal state and handlers based on type.
 * @param {string} type - The type of modal ('product' or other).
 * @param {boolean} show - Flag indicating if the modal is shown.
 * @param {Function} onHide - Callback to hide the modal.
 * @param {string} mode - Mode of the modal ('add', 'edit', 'view', 'delete').
 * @param {Object} item - The item being edited or viewed.
 * @param {Function} onAdd - Callback for add action.
 * @param {Function} onEdit - Callback for edit action.
 * @param {Function} onDelete - Callback for delete action.
 * @returns {Object} Modal state and handlers.
 */
const useModalState = (type, show, onHide, mode, item, onAdd, onEdit, onDelete) => {
  const isProduct = type === "product";

  const productModal = useProductModalState(show, mode, item, onAdd, onEdit, onDelete, onHide);
  const operationModal = useOperationModalState(show, mode, item, onAdd, onEdit, onDelete, onHide);
  const articleList = useArticleList(show, operationModal.operation, operationModal.setOperation, operationModal.setArticlesError);

  if (isProduct) {
    return { isProduct: isProduct, ...productModal };
  } else {
    return { isProduct: isProduct, ...operationModal, ...articleList };
  }
};

export default useModalState;
