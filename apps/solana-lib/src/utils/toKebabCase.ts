/**
 * Works with PascalCase, camelCase, snake_case, sentence case, mixed Case, and Title case strings.
 * @param str any cased string
 * @returns kebab case string
 */
export const toKebabCase = (str?: Maybe<string>): Maybe<string> => {
  if (!str || typeof str !== 'string') {
    return null;
  }

  const normalizedStr = str
    .replace(/([a-z\d])([A-Z])/g, '$1-$2') // Insert dash before capital letters in Pascal and camel case
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1-$2') // Insert dash between consecutive capital letters
    .replace(/_/g, '-') // Replace underscores with dashes
    .replace(/\s+/g, '-') // Replace spaces with dashes
    .toLowerCase();

  return normalizedStr;
};
