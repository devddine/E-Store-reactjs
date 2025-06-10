/**
 * @fileoverview Product service functions for API calls related to products.
 */

import apiClient from "../../../api/Client";
import { ENDPOINTS } from "../../../api/Endpoints";

/**
 * Fetches products or a specific product by ID.
 * @param {string|number} [id] - Optional product ID to fetch a specific product.
 * @returns {Promise} Axios response promise.
 */
export const fetchProducts = (id) => apiClient.get(`${ENDPOINTS.products}/${id || ""}`);

/**
 * Creates a new product.
 * @param {Object} data - Product data to create.
 * @returns {Promise} Axios response promise.
 */
export const createProduct = (data) => apiClient.post(ENDPOINTS.products, data);

/**
 * Updates an existing product by ID.
 * @param {string|number} id - ID of the product to update.
 * @param {Object} data - Updated product data.
 * @returns {Promise} Axios response promise.
 */
export const updateProduct = (id, data) => apiClient.put(`${ENDPOINTS.products}/${id}`, data);

/**
 * Deletes a product by ID.
 * @param {string|number} id - ID of the product to delete.
 * @returns {Promise} Axios response promise.
 */
export const deleteProduct = (id) => apiClient.delete(`${ENDPOINTS.products}/${id}`);
