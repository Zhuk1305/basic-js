const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
  }
  encrypt(baseStr, keyStr) {
    if (!baseStr || !keyStr) {
      throw new Error("Incorrect arguments!");
    }
    const encArr = [];
    if (baseStr.length > keyStr.length) {
      keyStr = keyStr.repeat(Math.ceil(baseStr.length / keyStr.length));
    }
    const baseArr = !this.type
      ? baseStr.toUpperCase().split("").reverse()
      : baseStr.toUpperCase().split("");
    const keyArr = keyStr.toUpperCase().split("");

    let missI = 0;

    for (let i = 0; i < baseArr.length; i++) {
      missI +=
        baseArr[i].charCodeAt() < 91 && baseArr[i].charCodeAt() > 64 ? 0 : 1;

      let encSymCode =
        baseArr[i].charCodeAt() < 91 && baseArr[i].charCodeAt() > 64
          ? ((baseArr[i].charCodeAt() + keyArr[i - missI].charCodeAt()) % 26) +
            65
          : baseArr[i].charCodeAt();
      encArr[i] = String.fromCharCode(encSymCode);
    }
    this.encV = encArr.join("");
    return encArr.join("");
  }

  decrypt(encStr, keyStr) {
    if (!encStr || !keyStr) {
      throw new Error("Incorrect arguments!");
    }
    if (encStr.length > keyStr.length) {
      keyStr = keyStr.repeat(Math.ceil(encStr.length / keyStr.length));
    }
    const baseArr = [];
    const encArr = !this.type
      ? encStr.toUpperCase().split("").reverse()
      : encStr.toUpperCase().split("");
    const keyArr = keyStr.toUpperCase().split("");

    let missI = 0;
    for (let i = 0; i < encArr.length; i++) {
      missI +=
        encArr[i].charCodeAt() < 91 && encArr[i].charCodeAt() > 64 ? 0 : 1;

      let baseSymCode =
        encArr[i].charCodeAt() < 91 && encArr[i].charCodeAt() > 64
          ? encArr[i].charCodeAt() - keyArr[i - missI].charCodeAt() < 0
            ? ((encArr[i].charCodeAt() - keyArr[i - missI].charCodeAt()) % 26) +
              26 +
              65
            : ((encArr[i].charCodeAt() - keyArr[i - missI].charCodeAt()) % 26) +
              65
          : encArr[i].charCodeAt();
      baseArr[i] = String.fromCharCode(baseSymCode);
    }

    return baseArr.join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
