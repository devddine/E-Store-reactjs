/**
 * @fileoverview Test script to fetch products from the API and log the response.
 */

import apiClient from "./Client.js";
import { ENDPOINTS } from "./Endpoints.js";

/**
 * Fetches the list of products from the API.
 * @returns {Promise} Axios response promise for products.
 */
const fetchProducts = () => apiClient.get(ENDPOINTS.products);

/**
 * Test function to fetch products and log the data or error.
 * @async
 */
const test = async () => {
  try {
    const response = await fetchProducts();
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching products:", error.message);
  }
};

// Execute the test function
test();
