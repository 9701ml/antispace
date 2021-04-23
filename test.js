import { encodev2 as encode_v2, decodev2 as decode_v2, decodev1 as decode_v1, encodev1 as encode_v1, encodev3 as encode_v3, decodev3 as decode_v3 } from 'antispace'

const encoded_v3 = encode_v3('hello')

console.log(encoded_v3) // made up of too many characters to count
console.log(encoded_v3.length) // 14
console.log(decode_v3(encoded_v3)) // hello


const encoded_v2 = encode_v2('hello')

console.log(encoded_v2) // made up of \u200c, \u200b, \u200d, and \u2060
console.log(encoded_v2.length) // 30
console.log(decode_v2(encoded_v2)) // hello

const encodedv1 = encode_v1('hello')

console.log(encodedv1) // made up of \u200c, \u200b, and \u200d
console.log(encodedv1.length) // 39
console.log(decode_v1(encodedv1)) // hello
