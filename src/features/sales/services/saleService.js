/**
 * @fileoverview Sale service functions for API calls related to sales.
 */

import apiClient from "../../../api/Client";
import { ENDPOINTS } from "../../../api/Endpoints";

/**
 * Fetches sales or a specific sale by ID.
 * @param {string|number} [id] - Optional sale ID to fetch a specific sale.
 * @returns {Promise} Axios response promise.
 */
export const fetchSales = (id) => apiClient.get(`${ENDPOINTS.sales}/${id || ""}`);

/**
 * Creates a new sale.
 * @param {Object} data - Sale data to create.
 * @returns {Promise} Axios response promise.
 */
export const createSale = (data) => apiClient.post(ENDPOINTS.sales, data);

/**
 * Updates an existing sale by ID.
 * @param {string|number} id - ID of the sale to update.
 * @param {Object} data - Updated sale data.
 * @returns {Promise} Axios response promise.
 */
export const updateSale = (id, data) => apiClient.put(`${ENDPOINTS.sales}/${id}`, data);

/**
 * Deletes a sale by ID.
 * @param {string|number} id - ID of the sale to delete.
 * @returns {Promise} Axios response promise.
 */
export const deleteSale = (id) => apiClient.delete(`${ENDPOINTS.sales}/${id}`);
