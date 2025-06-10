/**
 * @fileoverview Custom hook to manage article list state and validation in modals.
 */

import { useState, useEffect } from "react";
import {
  validateSelectOption,
  validateNumberInput,
  stockAvailableValidation,
  listValidation,
} from "../../utils/validators";
import { useLocation } from "react-router-dom";

/**
 * useArticleList hook manages product list state, validation errors, and handlers for adding/removing articles.
 * @param {boolean} show - Flag indicating if the modal is shown.
 * @param {Object} operation - Current operation state containing articles.
 * @param {Function} setOperation - Setter function for operation state.
 * @param {Function} setArticlesError - Setter function for articles error message.
 * @returns {Object} Object containing productList, errors, and handlers.
 */
const useArticleList = (show, operation, setOperation, setArticlesError) => {
  let location = useLocation();
  const [productList, setProductList] = useState({ title: "", product: "", quantity: "" });
  const [productError, setProductError] = useState("");
  const [quantityError, setQuantityError] = useState("");

  useEffect(() => {
    setProductError("");
    setQuantityError("");
  }, [show]);

  const handleListAdd = async () => {
    const { valid: productValid, message: productMessage } = validateSelectOption(productList.product);
    const { valid: quantityValid, message: quantityMessage } = validateNumberInput(productList.quantity);
    const { valid: stockValid, message: stockMessage } = await stockAvailableValidation(
      location.pathname,
      productList.product,
      Number(productList.quantity)
    );
  
    if (!productValid) {
      setProductError(productMessage);
    } else {
      setProductError("");
    }
  
    if (!quantityValid) {
      setQuantityError(quantityMessage);
    } else if (!stockValid) {
      setQuantityError(stockMessage);
    } else {
      setQuantityError("");
    }
  
    if (!productValid || !quantityValid || !stockValid) {
      return;
    }
  
    const existingArticleIndex = operation.articles.findIndex(
      (article) => article.product === productList.product
    );
  
    let updatedArticles;
  
    if (existingArticleIndex !== -1) {
      updatedArticles = [...operation.articles];
      const existingArticle = updatedArticles[existingArticleIndex];
      updatedArticles[existingArticleIndex] = {
        ...existingArticle,
        quantity: String(Number(existingArticle.quantity) + Number(productList.quantity)),
      };
    } else {
      updatedArticles = [...operation.articles, productList];
    }
  
    setOperation({ ...operation, articles: updatedArticles });
    setProductList({ title: "", product: "", quantity: "" });
    setArticlesError("");
  };

  const handleListRemove = (articleToRemove) => {
    const { valid: listValid, message: listMessage } = listValidation(operation.articles);
    setOperation({
      ...operation,
      articles: operation.articles.filter((article) => article.product !== articleToRemove.product),
    });
    if (!listValid) {
      setArticlesError(listMessage);
    } else {
      setArticlesError("");
    }
  };

  return {
    productList,
    setProductList,
    productError,
    quantityError,
    handleListAdd,
    handleListRemove,
  };
};

export default useArticleList;
