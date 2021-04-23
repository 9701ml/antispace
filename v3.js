/**
 *
 * @param {string} a
 * @returns {string}
 */
export const encode = (a) =>
  a
    .split('')
    .map((a) => a.charCodeAt(0))
    .map(
      (a) =>
        a
          .toString(6)
          .replaceAll('0', '\u200c') // zero-width non joiner
          .replaceAll('1', '\u200b') // zero-width space
          .replaceAll('2', '\u2060') // Word Joiner
          .replaceAll('3', '\u2063') // Invisible Separator
          .replaceAll('4', '\ufe0e') // ︎ Variation Selector-15
          .replaceAll('5', '\ufe0f') // ︎ Variation Selector-16
    )
    .join('\u200d') + '\u200d' // zero width joiner

/**
 *
 * @param {string} a
 * @returns {string}
 */
export const decode = (a) =>
  a
    .split('\u200d') // zero width joiner
    .filter(Boolean)
    .map(
      (a) =>
        a
          .replaceAll('\u200c', '0') // zero-width non joiner
          .replaceAll('\u200b', '1') // zero-width space
          .replaceAll('\u2060', '2') // Word Joiner
          .replaceAll('\u2063', '3') // Invisible Separator
          .replaceAll('\ufe0e', '4') // ︎ Variation Selector-15
          .replaceAll('\ufe0f', '5') // ︎ Variation Selector-16
    )
    .map((a) => parseInt(a, 6))
    .map((a) => String.fromCharCode(a))
    .join('')
