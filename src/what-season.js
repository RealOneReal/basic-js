const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let month = date.getMonth();
  let season;
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  else if(Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error();
  };
  if ( month === 0 || month === 1 || month === 11) {
    return season = 'winter';
  } else if ( month > 1 && month < 5 ) {
    return season = 'spring';
  } else if ( month > 4 && month < 8) {
    return season = 'summer';
  } else if (month > 7 && month < 11) {
    return season = 'autumn';
  }

};
