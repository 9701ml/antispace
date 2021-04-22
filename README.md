# zerowidth

It makes text invisible.

```js
import { encodev2,decodev2, decodev1,encodev1 } from 'zerowidth'

const encoded = encodev2('hello')

console.log(encoded) // made up of \u200c, \u200b, \u200d, and \u2060
console.log(encoded.length) // 29
console.log(decodev2(encoded)) // hello

const encodedv1 = encodev1('hello')

console.log(encodedv1) // made up of \u200c, \u200b, and \u200d
console.log(encodedv1.length) // 39
console.log(decodev1(encodedv1)) // hello

```
