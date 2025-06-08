import { useState } from "react";

const useArticleList = (operation, setOperation) => {
  const [productList, setProductList] = useState({ title: "", product: "", quantity: "" });

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
    productList,
    setProductList,
    handleListAdd,
    handleListRemove,
  };
};

export default useArticleList;
