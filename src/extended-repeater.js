const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let resStr = str;
  let additionStrRes = options.addition;
  for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
    additionStrRes +=
      `${options.additionSeparator ? options.additionSeparator : "|"}` +
      options.addition;
  }
  resStr += !!additionStrRes ? additionStrRes : "";
  for (let i = 0; i < options.repeatTimes - 1; i++) {
    resStr += !!additionStrRes
      ? `${options.separator ? options.separator : "+"}` + str + additionStrRes
      : `${options.separator ? options.separator : "+"}` + str;
  }

  return resStr;
}

module.exports = {
  repeater,
};
