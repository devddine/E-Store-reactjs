import apiClient from "../../../api/Client";
import { ENDPOINTS } from "../../../api/Endpoints";

export const fetchSales = (id) => apiClient.get(`${ENDPOINTS.sales}/${id || ""}`);
export const createSale = (data) => apiClient.post(ENDPOINTS.sales, data);
export const updateSale = (id, data) => apiClient.put(`${ENDPOINTS.sales}/${id}`, data);
export const deleteSale = (id) => apiClient.delete(`${ENDPOINTS.sales}/${id}`);
