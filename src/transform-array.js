const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(a) {
  if (!Array.isArray(a)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const arr = a.slice();

  function transArray(el, index) {
    switch (el) {
      case "--discard-next":
        if (arr[index + 1]) {
          delete arr[index];
          delete arr[index + 1];
        } else {
          delete arr[index];
        }
        break;

      case "--discard-prev":
        if (arr[index - 1]) {
          delete arr[index - 1];
          delete arr[index];
        } else {
          delete arr[index];
        }
        break;

      case "--double-prev":
        if (arr[index - 1]) {
          arr.splice(index, 1, arr[index - 1]);
        } else {
          delete arr[index];
        }
        break;

      case "--double-next":
        if (arr[index + 1]) {
          arr.splice(index, 1, arr[index + 1]);
        } else {
          delete arr[index];
        }
        break;
    }
  }

  arr.forEach((el, index) => {
    transArray(el, index);
  });

  return arr.filter((el) => !!el);
}

module.exports = {
  transform,
};
