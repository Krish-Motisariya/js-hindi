const accountId=112233
let accountEmail="krish@oogle.com"
var accountPassword="12345"
accountCity='Jaipur'

// accountId=2 //not allowed

accountEmail="hchc@gmail.com"
accountPassword="12121212"
accountCity="ithub"

console.log(accountId);

/* prefer not to use var
   because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity])