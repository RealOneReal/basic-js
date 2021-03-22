const CustomError = require("../extensions/custom-error");

const chainMaker = {

  getLength() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here

    return this.arr.length;
  },
  addLink(value) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.arr.push('('+' ' + value + ' ' + ')');
    return this;
  },
  removeLink(position) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if(Number.isInteger(position) && position > 0 && position <= this.arr.length) {
    this.arr.splice(position - 1 ,1) ;
    return this;
    } else {
      this.arr = [];
      throw new Error();
    }
  },
  reverseChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.arr.reverse();
    return this;
  },
  finishChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    let arrChain = this.arr.join('~~');
    this.arr = [];
    return arrChain;
  },
  arr: [],

};

module.exports = chainMaker;
