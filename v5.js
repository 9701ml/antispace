export const characters = [
  917536,
  917537,
  917538,
  917539,
  917540,
  917541,
  917542,
  917543,
  917544,
  917545,
  917546,
  917547,
  917548,
  917549,
  917550,
  917551,
  917552,
  917553,
  917554,
  917555,
  917556,
  917557,
  917558,
  917559,
  917560,
  917561,
  917562,
  917563,
  917564,
  917565,
  917566,
  917567,
  917568,
  917569,
  917570,
  917571,
  917572,
  917573,
  917574,
  917575,
  917576,
  917577,
  917578,
  917579,
  917580,
  917581,
  917582,
  917583,
  917584,
  917585,
  917586,
  917587,
  917588,
  917589,
  917590,
  917591,
  917592,
  917593,
  917594,
  917595,
  917596,
  917597,
  917598,
  917599,
  917600,
  917601,
  917602,
  917603,
  917604,
  917605,
  917606,
  917607,
  917608,
  917609,
  917610,
  917611,
  917612,
  917613,
  917614,
  917615,
  917616,
  917617,
  917618,
  917619,
  917620,
  917621,
  917622,
  917623,
  917624,
  917625,
  917626,
  917627,
  917628,
  917629,
  917630
].map((char) => String.fromCodePoint(char))

function encodenumber(value) {
  var from_range = '0123456789'.split('')
  var to_range = characters

  var dec_value = Array.from(value)
    .reverse()
    .reduce(function (carry, digit, index) {
      if (from_range.indexOf(digit) === -1)
        throw new Error('Invalid digit `' + digit + '` for base ' + 10 + '.')
      return (carry += from_range.indexOf(digit) * Math.pow(10, index))
    }, 0)

  var new_value = ''
  while (dec_value > 0) {
    new_value = to_range[dec_value % characters.length] + new_value
    dec_value =
      (dec_value - (dec_value % characters.length)) / characters.length
  }
  return new_value || characters[0]
}

function decodenumber(value) {
  var to_range = '0123456789'.split('')
  var from_range = characters

  var dec_value = Array.from(value)
    .reverse()
    .reduce(function (carry, digit, index) {
      if (from_range.indexOf(digit) === -1)
        throw new Error(
          'Invalid digit `' + digit + '` for base ' + characters.length + '.'
        )
      return (carry +=
        from_range.indexOf(digit) * Math.pow(characters.length, index))
    }, 0)

  var new_value = ''
  while (dec_value > 0) {
    new_value = to_range[dec_value % 10] + new_value
    dec_value = (dec_value - (dec_value % 10)) / 10
  }
  return new_value || '0'
}

/**
 *
 * @param {string} a
 * @returns {string}
 */
export const encode = (a) =>
  Array.from(a)
    .map((a) => a.codePointAt(0).toString())
    .map(encodenumber)
    .join(String.fromCodePoint(917631))

/**
 *
 * @param {string} a
 * @returns {string}
 */
export const decode = (a) =>
  a
    .split(String.fromCodePoint(917631)) // zero width joiner
    .map(decodenumber)
    .map((a) => String.fromCodePoint(a))
    .join('')
