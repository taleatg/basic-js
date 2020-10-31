const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
let newStr = str;
let repeatTimes = options.repeatTimes || 1;
let separator = options.separator || '+';
let addition = options.addition || '';
let additionRepeatTimes = options.additionRepeatTimes || 1;
let additionSeparator = options.additionSeparator || '';

if (options.addition === false) {
    addition = 'false';
}

if (options.addition === null) {
    addition = 'null';
}

addition += additionSeparator;
addition = addition.repeat(additionRepeatTimes);

let numAddSep = additionSeparator.length;
addition = addition.substring(0, addition.length - numAddSep);

newStr += addition + separator;
newStr = newStr.repeat(repeatTimes);

let numSep = separator.length;
newStr = newStr.substring(0, newStr.length - numSep);
  
return newStr;
}