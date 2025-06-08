/**
 * @fileoverview Utility functions for validating form inputs and managing validation messages.
 */

import { getData } from "../api/api.js";

// * Stores the current validation message
let validationMessage = "";

/**
 * Sets the validation message.
 * @param {string} message - The validation message to set.
 */
export function setMessage(message) {
  validationMessage = message;
}

/**
 * Validates a text input field.
 * @param {HTMLElement} element - The input element to validate.
 * @param {HTMLElement} errorBox - The element to display the error message.
 * @returns {boolean} - True if the input is valid, otherwise false.
 */
export function textInputValidation(element, errorBox) {
  if (
    !(
      notEmpty(element.value) &&
      preventOnlyNumbers(element.value) &&
      matchesPattern(element.value, "^[A-Za-z0-9 ]+$") &&
      minLength(element.value, 3) &&
      maxLength(element.value, 28)
    )
  ) {
    errorBox.innerHTML = getValidationMessage();
    element.classList.add("is-invalid");
    return false;
  }
  element.classList.remove("is-invalid");
  return true;
}

/**
 * Validates a date input field.
 * @param {HTMLElement} element - The input element to validate.
 * @param {HTMLElement} errorBox - The element to display the error message.
 * @returns {boolean} - True if the input is valid, otherwise false.
 */
export function dateInputValidation(element, errorBox) {
  if (!(isValidDate(element.value) && notEmpty(element.value))) {
    errorBox.innerHTML = getValidationMessage();
    element.classList.add("is-invalid");
    return false;
  }
  element.classList.remove("is-invalid");
  return true;
}

/**
 * Validates a select input field to ensure a valid option is selected.
 * @param {HTMLElement} element - The select element to validate.
 * @returns {boolean} - True if a valid option is selected, otherwise false.
 */
export function selectOptionValidation(element) {
  if (!isNotFirstOption(element.value)) {
    element.classList.add("is-invalid");
    return false;
  }
  element.classList.remove("is-invalid");
  return true;
}

/**
 * Validates a number input field.
 * @param {HTMLElement} element - The input element to validate.
 * @param {HTMLElement} errorBox - The element to display the error message.
 * @returns {boolean} - True if the input is valid, otherwise false.
 */
export function numberInputValidation(element, errorBox) {
  if (!(notEmpty(element.value) && matchesPattern(element.value, "^[1-9][0-9]*$") && gt(element.value))) {
    errorBox.innerHTML = getValidationMessage();
    element.classList.add("is-invalid");
    return false;
  }
  element.classList.remove("is-invalid");
  return true;
}

/**
 * Validates if the requested quantity is available in stock.
 * @param {HTMLElement} element - The input element to validate.
 * @param {HTMLElement} errorBox - The element to display the error message.
 * @param {string} productId - The ID of the product to check stock for.
 * @param {number} [value=0] - The quantity to validate (optional).
 * @returns {boolean} - True if the stock is sufficient, otherwise false.
 */
export async function stockAvailableValidation(element, errorBox, productId, value = 0) {
  const product = await getData("products", productId);
  let number = value ? value : element.value;
  if (number > product.stock_available) {
    errorBox.innerHTML = `Limite de stock : ${product.stock_available}`;
    element.classList.add("is-invalid");
    return false;
  }
  element.classList.remove("is-invalid");
  return true;
}

/**
 * Validates if a list is not empty.
 * @param {HTMLElement} element - The element to validate.
 * @param {Array} list - The list to check.
 * @returns {boolean} - True if the list is not empty, otherwise false.
 */
export function listValidation(element, list) {
  if (!notEmpty(list)) {
    element.classList.add("is-invalid");
    return false;
  }
  element.classList.remove("is-invalid");
  return true;
}

/**
 * Checks if the selected option is not the first (default) option.
 * @param {string} value - The value of the selected option.
 * @returns {boolean} - True if the selected option is valid, otherwise false.
 */
export function isNotFirstOption(value) {
  if (value === "0") {
    return false;
  }
  return true;
}

/**
 * Prevents input from containing only numbers.
 * @param {string} value - The input value to check.
 * @returns {boolean} - True if the input is not only numbers, otherwise false.
 */
export function preventOnlyNumbers(value) {
  if (/^\d+$/.test(String(value))) {
    setMessage("Entrée non numérique uniquement!");
    return false;
  }
  return true;
}

/**
 * Checks if a value is not empty.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is not empty, otherwise false.
 */
export function notEmpty(value) {
  let type = typeof value;
  if (type !== "object") {
    if (!String(value).trim()) {
      setMessage("Valeur requise!");
      return false;
    }
  } else if (value instanceof Array) {
    if (value.length === 0) {
      setMessage("Tableau non vide!");
      return false;
    }
  } else if (value instanceof Object) {
    let keys = Object.keys(value);
    if (keys.length === 0) {
      setMessage("Objet non vide!");
      return false;
    }
  }
  return true;
}

/**
 * Checks if a value is greater than a specified minimum.
 * @param {string|number} value - The value to check.
 * @param {number} [min=0] - The minimum value (default is 0).
 * @returns {boolean} - True if the value is greater than the minimum, otherwise false.
 */
export function gt(value, min = 0) {
  if (Number(value) <= min) {
    setMessage(`Valeur > ${min}!`);
    return false;
  }
  return true;
}

/**
 * Checks if a value matches a specified pattern.
 * @param {string} value - The value to check.
 * @param {string} pattern - The regex pattern to match.
 * @returns {boolean} - True if the value matches the pattern, otherwise false.
 */
export function matchesPattern(value, pattern) {
  const regex = new RegExp(pattern);
  if (!regex.test(value)) {
    setMessage("Format invalide!");
    return false;
  }
  return true;
}

/**
 * Checks if a value is a valid date.
 * @param {string} value - The value to check.
 * @returns {boolean} - True if the value is a valid date, otherwise false.
 */
export function isValidDate(value) {
  if (isNaN(new Date(value).getTime())) {
    setMessage("Format de date invalide!");
    return false;
  }
  return true;
}

/**
 * Checks if a value meets a minimum length requirement.
 * @param {string} value - The value to check.
 * @param {number} minLength - The minimum required length.
 * @returns {boolean} - True if the value meets the length requirement, otherwise false.
 */
export function minLength(value, minLength) {
  if (String(value).length < minLength) {
    setMessage(`Valeur ≥ ${minLength} caractères!`);
    return false;
  }
  return true;
}

/**
 * Checks if a value meets a maximum length requirement.
 * @param {string} value - The value to check.
 * @param {number} maxLength - The maximum allowed length.
 * @returns {boolean} - True if the value meets the length requirement, otherwise false.
 */
export function maxLength(value, maxLength) {
  if (String(value).length > maxLength) {
    setMessage(`Valeur ≤ ${maxLength} caractères!`);
    return false;
  }
  return true;
}

/**
 * Retrieves the current validation message.
 * @returns {string} - The validation message.
 */
export function getValidationMessage() {
  return validationMessage;
}