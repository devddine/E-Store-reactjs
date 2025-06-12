/**
 * @fileoverview Custom hook to get recent stock and sales activities sorted by date.
 */

import { useState, useEffect } from "react";

/**
 * useRecentActivities hook combines and sorts recent stock and sales activities.
 * @param {Array<Object>} stock - Array of stock activity objects.
 * @param {Array<Object>} sales - Array of sales activity objects.
 * @returns {Object} Object containing the top 5 recent actions sorted by creation date.
 */
const useRecentActivities = (stock = [], sales = []) => {
  const [actions, setActions] = useState([]);

  // Combine stock and sales with source labels and sort by createdAt descending
  useEffect(() => {
    const newStock = stock.map((item) => ({ ...item, source: "stock" }));
    const newSales = sales.map((item) => ({ ...item, source: "sales" }));

    const sorted = [...newStock, ...newSales].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    setActions(sorted.slice(0, 5));
  }, [stock, sales]);

  return { actions };
};

export default useRecentActivities;
