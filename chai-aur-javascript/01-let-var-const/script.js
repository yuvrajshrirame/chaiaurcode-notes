const accountId = 101;
let accountEmail = "abc@company.com";
var accountPassword = "1234@abcd";
accountCity = "Jaipur";
let accountState;

// accountCity = "Jaipur" is POSSIBLE but is NOT RECOMMENDED to use.

// accountId = 102 // Not possible to change CONST values

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.log(accountState); // returns "undefined" because value is not defined

/* OUTPUT

101
abc@company.com
1234@abcd
Jaipur

*/


let name = "John";
var age = 23;
// Values of CONST cannot be changed
const surname = "Doe";
const username = "johndoe";
const password = "12233445";
let abc;

console.table([name, age, surname, username, password, abc]);

/* OUTPUT
┌─────────┬────────────┐
│ (index) │   Values   │
├─────────┼────────────┤
│    0    │   'John'   │
│    1    │     23     │
│    2    │   'Doe'    │
│    3    │ 'johndoe'  │
│    4    │ '12233445' │
│    5    │ undefined  │
└─────────┴────────────┘
*/