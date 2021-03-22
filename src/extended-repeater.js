const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let string = String(str);
  let repeat = (options.repeatTimes) ? options.repeatTimes : 1;
  let addRepeat = (options.additionRepeatTimes) ? options.additionRepeatTimes : 1;
  let addition = (options.addition) ? String(options.addition) : "";
  let separator = (options.separator) ? options.separator : "+";
  let addSeparator = (options.additionSeparator) ? options.additionSeparator : "|";
  let result = "" ;
  let res = "";

  // погнали

  for ( let i = 0; i < repeat; i++) {
    for ( let j = 0; j < addRepeat; j++) {
      if (options.additionSeparator) {
        res += addition + addSeparator;
      }
      else res = addition;
    };
    if ( addSeparator != "|") {
    res = res.slice(0,res.length - addSeparator.length);
    }
      result +=string + res + separator;



}
result = result.slice(0,result.length - separator.length);
return result;
}