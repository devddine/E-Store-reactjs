import { useState, useEffect } from "react";
import {
  validateSelectOption,
  validateNumberInput,
  stockAvailableValidation,
  listValidation,
} from "../../utils/validators";
import { useLocation } from "react-router-dom";

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

    setOperation({ ...operation, articles: [...operation.articles, productList] });
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
