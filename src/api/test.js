import apiClient from "./Client.js";
import { ENDPOINTS } from "./Endpoints.js";

const fetchProducts = () => apiClient.get(ENDPOINTS.products);

const test = async () => {
  try {
    const response = await fetchProducts();
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching products:", error.message);
  }
};

test();
