const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  function checkEl(el) {
    let count = 0;
    domains.forEach((ar) => {
      if (ar.includes(el)) {
        count++;
      }
    });
    return count ? { [`.${el.split(".").reverse().join(".")}`]: count } : {};
  }
  obj = { ...obj, ...checkEl("com") };
  obj = { ...obj, ...checkEl("epam.com") };
  obj = { ...obj, ...checkEl("info.epam.com") };

  return obj;
}

module.exports = {
  getDNSStats,
};
