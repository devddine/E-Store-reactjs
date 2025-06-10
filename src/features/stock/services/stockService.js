/**
 * @fileoverview Stock service functions for API calls related to stock.
 */

import apiClient from "../../../api/Client";
import { ENDPOINTS } from "../../../api/Endpoints";

/**
 * Fetches stocks or a specific stock by ID.
 * @param {string|number} [id] - Optional stock ID to fetch a specific stock.
 * @returns {Promise} Axios response promise.
 */
export const fetchStocks = (id) => apiClient.get(`${ENDPOINTS.stock}/${id || ""}`);

/**
 * Creates a new stock.
 * @param {Object} data - Stock data to create.
 * @returns {Promise} Axios response promise.
 */
export const createStock = (data) => apiClient.post(ENDPOINTS.stock, data);

/**
 * Updates an existing stock by ID.
 * @param {string|number} id - ID of the stock to update.
 * @param {Object} data - Updated stock data.
 * @returns {Promise} Axios response promise.
 */
export const updateStock = (id, data) => apiClient.put(`${ENDPOINTS.stock}/${id}`, data);

/**
 * Deletes a stock by ID.
 * @param {string|number} id - ID of the stock to delete.
 * @returns {Promise} Axios response promise.
 */
export const deleteStock = (id) => apiClient.delete(`${ENDPOINTS.stock}/${id}`);
