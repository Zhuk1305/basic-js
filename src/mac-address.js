const { NotImplementedError } = require("../extensions/index.js");

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const constArr = [];
  for (let i = 0; i < 10; i++) {
    constArr.push(`${i}`);
  }
  for (let i = 65; i < 71; i++) {
    constArr.push(String.fromCharCode(i));
  }
  let error = true;
  n.split("")
    .filter((el) => el !== "-")
    .forEach((el) => {
      if (!constArr.includes(el)) {
        error = false;
      }
    });
  return error;
}
module.exports = {
  isMAC48Address,
};
