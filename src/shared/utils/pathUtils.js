/**
 * @fileoverview Utility functions for managing URL query parameters and updating the browser history.
 */

import { elements } from "../domElements.js";
import { config } from "../components/Generators.js";
import { notEmpty } from "./validators.js";

/**
 * Updates the browser URL with a new path.
 * @param {string} newPath - The new path to set in the URL.
 */
export function updateURL(newPath) {
  history.replaceState(null, "", newPath);
}

/**
 * Updates the URL with modal-related query parameters (action and ID).
 * @param {string} action - The action to perform (e.g., "create", "edit", "view", "delete").
 * @param {string} id - The ID of the item (if applicable).
 */
export function modalQueryParam(action, id) {
  if (action === "create") {
    // * Set query parameter for create action
    setQueryParam(config.apiEndpoint, action);
  } else {
    // * Set query parameters for other actions (edit, view, delete)
    setQueryParam(config.apiEndpoint, action);
    setQueryParam("id", id);
  }
  elements.modalField.addEventListener("hidden.bs.modal", () => {
    // * Remove query parameters when the modal is closed
    deleteQueryParam(config.apiEndpoint, "id");
  });
}

/**
 * Updates the URL with the search query parameter.
 * @param {string} value - The search input value.
 */
export function searchQueryParam(value) {
  // * Set or delete the search query parameter based on input value
  setQueryParam("search", value);
  notEmpty(value) ? setQueryParam("search", value) : deleteQueryParam("search");
}

/**
 * Sets a query parameter in the URL.
 * @param {string} key - The query parameter key.
 * @param {string} value - The query parameter value.
 */
function setQueryParam(key, value) {
  const url = new URL(window.location);
  url.searchParams.set(key, value);
  history.replaceState(null, "", url);
}

/**
 * Deletes a query parameter from the URL.
 * @param {string} key - The query parameter key to delete.
 * @param {string} [secondKey] - An optional second query parameter key to delete.
 */
function deleteQueryParam(key, secondKey) {
  const url = new URL(window.location);
  url.searchParams.delete(key);
  if (secondKey) {
    url.searchParams.delete(secondKey);
  }
  history.replaceState(null, "", url);
}
