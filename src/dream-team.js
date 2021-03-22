const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if(!Array.isArray(members)) return false;
  let arrNames = members.filter(name => typeof name == "string" );
  return arrNames.map(name => name.toUpperCase().trim().substring(0,1)).sort().join("");
};

