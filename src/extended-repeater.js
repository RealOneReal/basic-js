const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let repeat = 1;
  if (options.repeatTimes !== undefined)  repeat = options.repeatTimes;
  let separator = "+";
  if (options.separator !== undefined) separator = options.separator;
  let addition = "";
  if (options.addition !== undefined) addition = options.addition;
  let addRepeat = 1;
  if (options.additionRepeatTimes !== undefined)
  addRepeat = options.additionRepeatTimes;
  let addSeparator = "|";
  if (options.additionSeparator !== undefined) addSeparator = options.additionSeparator;
//  погнали
  let string = String(str);
  let result = "" ;
   if (repeat > 0) {
    for ( let i = 0; i < repeat; i++){
      result += string
      for ( let j = 0; j < addRepeat; j++){
        result += addition
        if(j < addRepeat - 1) result += addSeparator
      }
      if(i < repeat -1 ) result += separator
    }


  }

return result;
}