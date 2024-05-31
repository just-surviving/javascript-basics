// singleton(one of a kind object) kb bnta h (constructor se singleton bnta h )
// Object.create



// objects literals

const mySym = Symbol("key1")


const JsUser = {
  name: "Abhinav",
  "full name": "Abhinav Sharma",
  [mySym]: "mykey1", //[] this brakets makes it a symb else it was a string
  age: 18,
  email:"abc@gmail.com",
  location: "Agra",
  isLoggedIn:false,
  lastLoginDays:["monday","tuesday"]
}

//// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "abcd@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "lnm@gmail.com"
//console.log(JsUser);
JsUser.greeting = function(){
  console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
  console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());