import apiClient from "../../../api/Client";
import { ENDPOINTS } from "../../../api/Endpoints";

export const fetchStocks = (id) => apiClient.get(`${ENDPOINTS.stock}/${id || ""}`);
export const createStock = (data) => apiClient.post(ENDPOINTS.stock, data);
export const updateStock = (id, data) => apiClient.put(`${ENDPOINTS.stock}/${id}`, data);
export const deleteStock = (id) => apiClient.delete(`${ENDPOINTS.stock}/${id}`);
