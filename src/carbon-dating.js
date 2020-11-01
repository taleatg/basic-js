const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let age = Number; 
    if ((typeof sampleActivity === 'String') && (sampleActivity < MODERN_ACTIVITY)){
      age = Math.ceil(Math.log2(MODERN_ACTIVITY/sampleActivity) / (0.693 / HALF_LIFE_PERIOD));
      return age;
    } else {
      return false;
    }
  
};
