import apiClient from "../../../api/Client";
import { ENDPOINTS } from "../../../api/Endpoints";

export const fetchProducts = (id) => apiClient.get(`${ENDPOINTS.products}/${id || ""}`);
export const createProduct = (data) => apiClient.post(ENDPOINTS.products, data);
export const updateProduct = (id, data) => apiClient.put(`${ENDPOINTS.products}/${id}`, data);
export const deleteProduct = (id) => apiClient.delete(`${ENDPOINTS.products}/${id}`);
