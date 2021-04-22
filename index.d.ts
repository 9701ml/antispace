/** Given an IP, will return if the IP is from Roblox or not. */
type zerowidth = {
  encode: (target: string) => string
  decode: (encoded: string) => string
}


/**
 * Base 2
 */
export const v1: zerowidth
/**
 * Base 3
 */
export const v2: zerowidth
