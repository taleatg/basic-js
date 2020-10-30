const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
let newStr = str;
let repeatTimes = options.repeatTimes || 0;
let separator = options.separator || '';
let addition = options.addition || '';
let additionRepeatTimes = options.additionRepeatTimes || 0;
let additionSeparator = options.additionSeparator || '';

addition += additionSeparator;
addition = addition.repeat(additionRepeatTimes);
newStr += addition + separator;
newStr = newStr.repeat(repeatTimes);

return newStr;
}