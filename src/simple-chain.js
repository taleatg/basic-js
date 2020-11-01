const CustomError = require("../extensions/custom-error");
let chain = '';

const chainMaker = { 
  getLength() {
    let chainLength = array.length;
    return array.length;
  },
  addLink(value) {
    array.push(value);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position)) {
      array = [];
      throw new Error('THROWN');
    }
    array.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    array.reverse('');
    return this;
  },
  finishChain() {
    for (let i = 0; i < array.length; i++) {
      array[i] = '( ' + array[i] + ' )';
    }
    let str = array.join('~~');
    array = [];
    return str;

  }
  
};

let array = [];

module.exports = chainMaker;
