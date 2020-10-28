const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let team = '';
  if (Array.isArray(members)) {
  for (let i = 0; i < members.length; i++) {
    
      let str = members[i].split('');
        let name = str[0].toUpperCase();
        team += name;
      };
      
      return team.split('').sort().join('');
    } else {
      return false;
    }
   

};