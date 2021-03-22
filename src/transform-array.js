const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if(!Array.isArray(arr)) {
    throw new Error;
  };
  // if (arr.length == 0) return arr;
  const newArr = []

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
          case '--discard-next':
            if(i < arr.length - 1){
              i++;
              newArr.push(undefined);
            }
            break;
          case '--discard-prev':
            if(i > 0) {
              newArr.pop();
              newArr.push(undefined);
            }
            break;
          case '--double-next':
            if (i < arr.length - 1) {
              newArr.push(arr[i + 1]);
            }
            break;
          case '--double-prev':
            if (i > 0) {
              newArr.push(newArr[newArr.length-1]);
            }
            break;
          default:
              newArr.push(arr[i]);
            break;

        }

    }
    return newArr.filter(item => item !== undefined);
};
