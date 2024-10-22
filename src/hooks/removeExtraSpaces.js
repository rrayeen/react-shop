function removeExtraSpaces(str) {
  // Trim leading and trailing spaces, then replace multiple spaces between words with a single space
  return str.trim().replace(/\s+/g, " ");
}
export default removeExtraSpaces;
