import useProductModalState from "./modalStates/useProductModalState";
import useOperationModalState from "./modalStates/useOperationModalState";
import useArticleList from "./modalStates/useArticleList";

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
