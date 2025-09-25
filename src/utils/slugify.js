// src/utils/slugify.js
export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // replace spaces & special chars with "-"
    .replace(/^-+|-+$/g, ""); // trim leading/trailing "-"
}
