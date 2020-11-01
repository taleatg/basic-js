const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
 
  let turns;
  let key1 = Math.pow(2,disksNumber)-1;
  let obj = {
    turns: key1,
    seconds: Math.floor((3600*key1)/turnsSpeed),
  }
  return obj;
};
