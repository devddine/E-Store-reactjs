/**
 * @fileoverview Custom hook to filter data based on search term for different table types.
 */

import { useState, useEffect } from "react";

/**
 * useSearch hook returns filtered data based on search input.
 * @param {string} tableType - The type of table to search: "product", "stock", or "sales".
 * @param {Array} data - The data array to search within.
 * @returns {Object} Object containing filteredData, searchValue, and setSearchValue.
 */
const useSearch = (tableType, data) => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (!searchValue) {
      setFilteredData(data);
      return;
    }

    const lowerSearch = searchValue.toLowerCase().trim();

    const filtered = data.filter((item) => {
      if (tableType === "product") {
        return item.title.toLowerCase().includes(lowerSearch);
      } else {
        return item.name.toLowerCase().includes(lowerSearch);
      }
    });

    setFilteredData(filtered);
  }, [searchValue, data, tableType]);

  return { filteredData, searchValue, setSearchValue };
};

export default useSearch;
