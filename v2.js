/**
 *
 * @param {string} a
 * @returns {string}
 */
export const encode = (a) =>
  a
    .split('')
    .map((a) => a.charCodeAt(0))
    .map((a) =>
      a
        .toString(3)
        .replaceAll('0', '\u200c')
        .replaceAll('1', '\u200b')
        .replaceAll('2', '\u2060')
    )
    .join('\u200d') + '\u200d'

/**
 *
 * @param {string} a
 * @returns {string}
 */
export const decode = (a) =>
  a
    .split('\u200d')
    .map((a) =>
      a
        .replaceAll('\u200c', '0')
        .replaceAll('\u200b', '1')
        .replaceAll('\u2060', '2')
    )
    .map((a) => parseInt(a, 3))
    .map((a) => String.fromCharCode(a))
    .join('')
