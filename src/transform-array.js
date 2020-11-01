const CustomError = require("../extensions/custom-error");


module.exports = function transform(arr) {

let array = arr;
let delArra = [];

if (!Array.isArray(arr)) { 
    throw new Error('THROWN');
}
  for (let i = 0; i < array.length; i++) {

    if (array[i] === '--discard-next') {
        if ((array[i + 2] ==  '--discard-prev') || (array[i + 2] ==  '--double-prev')) {
            delArr = array.splice(i + 2, 1);
        }
        if (i !== array.length - 1) {
            delArr = array.splice(i, 2);
        } else {
            delArr = array.pop();
          }
    } else if (array[i] === '--discard-prev') {
        if (i !== 0) {
            delArr = array.splice(i - 1, 2);
        } else {
            delArr = array.shift();
          }
    } else if (array[i] === '--double-next') {
        if (i !== array.length - 1) {
            array[i] =array[i + 1];
        } else {
            delArr = array.pop();
          }
    } else if (array[i] === '--double-prev') {
        if (i !== 0) {
            array[i] =array[i - 1];
        } else {
            delArr = array.shift();
          }
    }
  }
  return array;

};