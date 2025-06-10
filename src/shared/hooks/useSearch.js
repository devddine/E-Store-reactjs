import { useState, useEffect } from "react";

/**
 * Custom hook to search data based on search term.
 * @param {string} tableType - The type of table to search: "product", "stock", or "sales".
 * @param {Array} data - The data array to search within.
 * @returns {object} - { filteredData, searchValue, setSearchValue }
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
