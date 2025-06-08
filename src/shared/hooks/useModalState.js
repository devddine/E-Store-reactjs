import { useState, useEffect } from "react";

const useModalState = (type, show, onHide, mode, item, onAdd, onEdit, onDelete) => {
  const isProduct = type === "product";
  const isEdit = mode === "edit";
  const isView = mode === "view";
  const isDelete = mode === "delete";
  const isAdd = mode === "add";

  // Product state
  const [title, setTitle] = useState("");
  // Operation state
  const [operation, setOperation] = useState({ name: "", date: "", articles: [] });
  const [productList, setProductList] = useState({ title: "", product: "", quantity: "" });

  useEffect(() => {
    if (isProduct) {
      isAdd && show && setTitle("");
      (isEdit || isDelete || isView) && setTitle(item.title || "");
    } else {
      isAdd && show && setOperation({ name: "", date: new Date().toISOString().split("T")[0], articles: [] });
      (isEdit || isDelete || isView) &&
        setOperation({
          name: item.name || "",
          date: item.date ? item.date.split("T")[0] : "",
          articles: item.articles || [],
        });
    }
  }, [item, isEdit, isView, isDelete, isAdd, show, isProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isProduct) {
      if (!title.trim()) return;
      try {
        isAdd && onAdd && onAdd({ title });
        isEdit && onEdit && onEdit(item._id, { title });
        isDelete && onDelete && onDelete(item._id);
        onHide();
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    } else {
      if (!operation.name.trim() || !operation.date.trim()) return;
      try {
        isAdd && onAdd && onAdd(operation);
        isEdit && onEdit && onEdit(item._id, operation);
        isDelete && onDelete && onDelete(item._id);
        onHide();
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  const handleListAdd = () => {
    setOperation({ ...operation, articles: [...operation.articles, productList] });
    setProductList({ title: "", product: "", quantity: "" });
  };

  const handleListRemove = (articleToRemove) => {
    setOperation({
      ...operation,
      articles: operation.articles.filter((article) => article.product !== articleToRemove.product),
    });
  };

  return {
    isProduct,
    isAdd,
    isEdit,
    isDelete,
    isView,
    title,
    setTitle,
    operation,
    setOperation,
    handleSubmit,
    productList,
    setProductList,
    handleListAdd,
    handleListRemove,
  };
};

export default useModalState;
