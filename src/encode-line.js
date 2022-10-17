const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split("");
  let count = 1;
  const resArr = [];
  function getCount(i) {
    if (arr[i] === arr[i + 1]) {
      count++;
      arr.splice(i + 1, 1);
      getCount(i);
    } else {
      count === 1 ? resArr.push(arr[i]) : resArr.push(count, arr[i]);
      count = 1;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    getCount(i);
  }
  return resArr.join("");
}

module.exports = {
  encodeLine,
};
