import { useState, useEffect } from "react";

const useRecentActivities = (stock = [], sales = []) => {
  const [actions, setActions] = useState([]);

  useEffect(() => {
    const newStock = stock.map((item) => ({ ...item, source: "stock" }));
    const newSales = sales.map((item) => ({ ...item, source: "sales" }));

    const sorted = [...newStock, ...newSales].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    setActions(sorted.slice(0, 5));
  }, [stock, sales]);

  return { actions };
};

export default useRecentActivities;
