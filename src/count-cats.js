//const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  let numСats = 0;
  let arr = [].concat(...matrix);
  for (let i = 0; i < arr.length; i++){
    if (arr[i] == '^^') {
      numСats += 1;
    }
  }
  return numСats;
};
