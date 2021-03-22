const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here

  // псевдокод: t = ln(N/N0)/k,
  // где k = 0.693/ half_life_period = 1.22*10-4 1/year;
  // n- Modern_Activity, N0- sampleActivity;
  // npm run test ./test/carbon-dating.test.js
  //Number.isInteger(sampleActivity) != true
  if(typeof(sampleActivity) != "string" || Number.isInteger(+sampleActivity) != true || (+sampleActivity > MODERN_ACTIVITY || +sampleActivity <= 0)) return false;

  let k = 0.693 / HALF_LIFE_PERIOD;
  let x = Math.log(MODERN_ACTIVITY / +sampleActivity);

  let timeDeath = x/k;


  return Math.ceil(timeDeath);
}

