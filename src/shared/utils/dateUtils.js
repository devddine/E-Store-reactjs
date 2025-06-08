/**
 * @fileoverview Date utility functions for formatting and calculating date-related information.
 */

/**
 * Formats an ISO date string into a readable format (DD/MM/YYYY).
 * @param {string} isoString - The ISO date string (e.g., "2023-10-05T00:00:00.000Z").
 * @returns {string} - The formatted date string (e.g., "05/10/2023").
 */
export function formatDate(isoString) {
  // * Split the ISO string to extract year, month, and day
  const [year, month, day] = isoString.split("T")[0].split("-");

  // * Return the date in DD/MM/YYYY format
  return `${day}/${month}/${year}`;
}

/**
 * Gets the numeric day of the week index from an ISO date string.
 * @param {string} isoString - The ISO date string (e.g., "2023-10-05T00:00:00.000Z").
 * @returns {number} - The numeric day of the week (0-6, where 0 is Sunday).
 */
export function getDayOfWeek(isoString) {
  // * Convert ISO string to Date and return day of week index
  const date = new Date(isoString);
  return date.getDay();
}

/**
 * Returns a human-readable time ago format in French from an ISO date string.
 * @param {string} isoString - The ISO date string (e.g., "2023-10-05T00:00:00.000Z").
 * @returns {string} - The time ago format in French (e.g., "il y a 2 jours", "il y a 5 mois").
 */
export function timeAgo(isoString) {
  const date = new Date(isoString);
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);

  // * Predefined time intervals for calculating time difference
  const intervals = [
    { label: "an", plural: "ans", seconds: 31536000 },
    { label: "mois", plural: "mois", seconds: 2592000 },
    { label: "semaine", plural: "semaines", seconds: 604800 },
    { label: "jour", plural: "jours", seconds: 86400 },
  ];

  // * Find the most appropriate time interval
  for (const interval of intervals) {
    const count = Math.floor(diffInSeconds / interval.seconds);
    if (count >= 1) {
      const label = count > 1 ? interval.plural : interval.label;
      return `il y a ${count} ${label}`;
    }
  }

  // * Return immediate time if less than a day
  return "à l'instant";
}