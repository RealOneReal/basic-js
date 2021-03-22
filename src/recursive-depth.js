const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depthArr = 0;
    if (arr instanceof Array) {
      let max = depthArr;
      arr.forEach(element => {
        let currentDepth = this.calculateDepth(element);
        if (currentDepth > max)
              max = currentDepth;
      });
      depthArr = ++max;
    }
    return depthArr;
  }
};