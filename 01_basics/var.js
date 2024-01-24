const accountId = 144556
let accountEmail = "sharmaabhinav17sep@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
  // accountId = 2 // not allowed

  accountEmail = "hdfc@gmail.com"
  accountPassword = "212121212"
  accountCity = "Bengaluru"

  console.log(accountId)

  /*
Prefer not to use var 
because of issue in block scope and functional scope
  */

console.table([accountId, accountEmail, accountPassword,accountCity,accountState])