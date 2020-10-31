const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
let array = arr;

if (!Array.isArray(arr)) { 
    throw new Error('THROWN');
}
  for (let i = 0; i < array.length; i++) {

    if (array[i] === '--discard-next') {
        if (i !== array.length - 1) {
        array = array.splice(i, 2);
        }
    } else if (array[i] === '--discard-prev') {
        if (i !== 0) {
        array = array.splice(i - 1, 2);
        }
    } else if (array[i] === '--double-next') {
        if (i !== array.length - 1) {
        array[i] = array[i + 1];
        
        }
    } else if (array[i] === '--double-prev') {
        if (i !== 0) {
        array[i] = array[i - 1];
        }
    }
  }
  return array;

};
