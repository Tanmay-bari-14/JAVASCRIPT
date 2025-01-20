const accountId = 102030;
let accountEmai = "abc@gmail.com";
var accountPassword = 123;
accountCity = "Dahanu";

// accountId = 2;

// console.log(accountId); not allowed assigned to constant variable

accountEmai = "abc@gmail.com";
accountPassword = 123;
accountCity = "Dahanu";
let accountState;

/* 
prefer not to use var
beacuse of yhe issue in block scope and functional scope
*/

console.table([
  accountEmai,
  accountId,
  accountPassword,
  accountCity,
  accountState,
]);
