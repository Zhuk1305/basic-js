const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const arr = `${n}`.split("");
  function getSum(arr) {
    const sum = arr.reduce((acc, v) => {
      return acc + +v;
    }, 0);
    return `${sum}`.split("").length > 1 ? getSum(`${sum}`.split("")) : sum;
  }
  return getSum(arr);
}

module.exports = {
  getSumOfDigits,
};
