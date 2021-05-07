export const characters = [
  '\u2060', // Word Joiner
  '\u2061', // FUNCTION APPLICATION
  '\u2062', // INVISIBLE TIMES
  '\u2063', // INVISIBLE SEPARATOR
  '\u2064', // INVISIBLE PLUS
  '\u2066', // LEFT - TO - RIGHT ISOLATE
  '\u2067', // RIGHT - TO - LEFT ISOLATE
  '\u2068', // FIRST STRONG ISOLATE
  '\u2069', // POP DIRECTIONAL ISOLATE
  '\u206A', // INHIBIT SYMMETRIC SWAPPING
  '\u206B', // ACTIVATE SYMMETRIC SWAPPING
  '\u206C', // INHIBIT ARABIC FORM SHAPING
  '\u206D', // ACTIVATE ARABIC FORM SHAPING
  '\u206E', // NATIONAL DIGIT SHAPES
  '\u206F', // NOMINAL DIGIT SHAPES
  '\u200B', // Zero-Width Space
  '\u200C', // Zero Width Non-Joine
  '\u061C', // Arabic Letter Mark
  '\uFEFF', // Byte Order Mark
  '\u180E', // Mongolian Vowel Separator
  '\u00AD' // soft-hyphen
]

/**
 *
 * @param {string} a
 * @returns {string}
 */
 export const encode = (a) =>
  Array.from(a)
    .map((a) => a.codePointAt(0))
    .map((a) => {
      let baseidk = a.toString(characters.length)

      characters.forEach((character, index) => {
        baseidk = baseidk.replaceAll(index.toString(characters.length), character)
      })
      return baseidk
    })
    .join('\u200d')

/**
 *
 * @param {string} a
 * @returns {string}
 */
 export const decode = (a) =>
  a
    .split('\u200d') // zero width joiner
    .map((a) => {
      let baseidk = a
      characters.forEach((character, index) => {
        baseidk = baseidk.replaceAll(
          character,
          index.toString(characters.length)
        )
      })

      return baseidk
    })
    .map((a) => parseInt(a, characters.length))
    .map((a) => String.fromCodePoint(a))
    .join('')
