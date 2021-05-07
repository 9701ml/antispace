export const characters = [
    '\u200c',
    '\u200b'
]
/**
 * 
 * @param {string} a 
 * @returns {string}
 */
export const encode = a => a
    .split('')
    .map(a=>a.charCodeAt(0))
    .map(a=>a.toString(2).replaceAll('0','\u200c').replaceAll('1', '\u200b'))
    .join('\u200d')

/**
 * 
 * @param {string} a 
 * @returns {string}
 */
export const decode = a => a
    .split('\u200d')
    .map(a=>a.replaceAll('\u200c', '0').replaceAll('\u200b', '1'))
    .map(a=>parseInt(a,2))
    .map(a=>String.fromCharCode(a))
    .join('')
