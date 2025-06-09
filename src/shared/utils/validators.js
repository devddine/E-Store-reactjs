/**
 * @fileoverview Utility functions for validating form inputs and managing validation messages.
 */

import { fetchProducts } from "../../features/products/services/productService";

/**
 * Validates a text input value.
 * @param {string} value - The input value to validate.
 * @returns {{ valid: boolean, message: string }} - Validation result and message.
 */
export function validateTextInput(value) {
  if (!notEmpty(value)) {
    return { valid: false, message: "Valeur requise!" };
  }
  if (!preventOnlyNumbers(value)) {
    return { valid: false, message: "Entrée non numérique uniquement!" };
  }
  if (!matchesPattern(value, "^[A-Za-z0-9 ]+$")) {
    return { valid: false, message: "Format invalide!" };
  }
  if (!minLength(value, 3)) {
    return { valid: false, message: "Valeur ≥ 3 caractères!" };
  }
  if (!maxLength(value, 28)) {
    return { valid: false, message: "Valeur ≤ 28 caractères!" };
  }
  return { valid: true, message: "" };
}

/**
 * Validates a date input value.
 * @param {string} value - The input value to validate.
 * @returns {{ valid: boolean, message: string }} - Validation result and message.
 */
export function validateDateInput(value) {
  if (!notEmpty(value)) {
    return { valid: false, message: "Valeur requise!" };
  }
  if (!isValidDate(value)) {
    return { valid: false, message: "Format de date invalide!" };
  }
  return { valid: true, message: "" };
}

/**
 * Validates a select option value.
 * @param {string} value - The selected option value.
 * @returns {{ valid: boolean, message: string }} - Validation result and message.
 */
export function validateSelectOption(value) {
  if (!isNotFirstOption(value)) {
    return { valid: false, message: "Veuillez sélectionner une option valide!" };
  }
  return { valid: true, message: "" };
}

/**
 * Validates a number input value.
 * @param {string|number} value - The input value to validate.
 * @returns {{ valid: boolean, message: string }} - Validation result and message.
 */
export function validateNumberInput(value) {
  if (!notEmpty(value)) {
    return { valid: false, message: "Valeur requise!" };
  }
  if (!gt(value)) {
    return { valid: false, message: "Valeur doit être > 0!" };
  }
  if (!matchesPattern(value, "^[1-9][0-9]*$")) {
    return { valid: false, message: "Format invalide!" };
  }
  return { valid: true, message: "" };
}

export async function stockAvailableValidation(location, productId, value = 0) {
  if (location === "/sales") {
    const product = await fetchProducts(productId);
    if (value > product.data.stock_available) {
      return { valid: false, message: `Limite de stock : ${product.data.stock_available}` };
    }
  }
  return { valid: true, message: "" };
}

export function listValidation(value) {
  if (!notEmpty(value)) {
    return { valid: false, message: "*La liste ne peut pas être vide." };
  }
  return { valid: true, message: "" };
}

/**
 * Checks if the selected option is not the first (default) option.
 * @param {string} value - The value of the selected option.
 * @returns {boolean} - True if the selected option is valid, otherwise false.
 */
export function isNotFirstOption(value) {
  return !!value;
}

/**
 * Prevents input from containing only numbers.
 * @param {string} value - The input value to check.
 * @returns {boolean} - True if the input is not only numbers, otherwise false.
 */
export function preventOnlyNumbers(value) {
  return !/^\d+$/.test(String(value));
}

/**
 * Checks if a value is not empty.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is not empty, otherwise false.
 */
export function notEmpty(value) {
  let type = typeof value;
  if (type !== "object") {
    return Boolean(String(value).trim());
  } else if (value instanceof Array) {
    return value.length > 0;
  } else if (value instanceof Object) {
    return Object.keys(value).length > 0;
  }
  return false;
}

/**
 * Checks if a value is greater than a specified minimum.
 * @param {string|number} value - The value to check.
 * @param {number} [min=0] - The minimum value (default is 0).
 * @returns {boolean} - True if the value is greater than the minimum, otherwise false.
 */
export function gt(value, min = 0) {
  return Number(value) > min;
}

/**
 * Checks if a value matches a specified pattern.
 * @param {string} value - The value to check.
 * @param {string} pattern - The regex pattern to match.
 * @returns {boolean} - True if the value matches the pattern, otherwise false.
 */
export function matchesPattern(value, pattern) {
  const regex = new RegExp(pattern);
  return regex.test(value);
}

/**
 * Checks if a value is a valid date.
 * @param {string} value - The value to check.
 * @returns {boolean} - True if the value is a valid date, otherwise false.
 */
export function isValidDate(value) {
  return !isNaN(new Date(value).getTime());
}

/**
 * Checks if a value meets a minimum length requirement.
 * @param {string} value - The value to check.
 * @param {number} minLength - The minimum required length.
 * @returns {boolean} - True if the value meets the length requirement, otherwise false.
 */
export function minLength(value, minLength) {
  return String(value).length >= minLength;
}

/**
 * Checks if a value meets a maximum length requirement.
 * @param {string} value - The value to check.
 * @param {number} maxLength - The maximum allowed length.
 * @returns {boolean} - True if the value meets the length requirement, otherwise false.
 */
export function maxLength(value, maxLength) {
  return String(value).length <= maxLength;
}
