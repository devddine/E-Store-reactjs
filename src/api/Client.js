/**
 * @fileoverview Axios API client instance configured with base URL and headers.
 */

import axios from "axios";

/**
 * Axios instance for API calls with base URL and JSON content type headers.
 * @constant {import('axios').AxiosInstance}
 */
const apiClient = axios.create({
  baseURL: "http://localhost:3000/",
  headers: { "Content-type": "application/json; charset=UTF-8" },
});

export default apiClient;
