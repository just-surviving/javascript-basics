// primitive

// 7 types: String , number , boolean ,null, undefined , symbol ,BigInt
const score = 100;
const scoreValued = 100.2;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123')

console.log(id==anotherId);

const bigNumber = 2323232324434234n
// reference type (non primitive)

// Array , Objects , Function


const heros = ["shaktiman", "nagraj", "batman"];
let myObj = {
name: "abhinav",
age: 21,

}
const myFunction = function(){
  console.log("Hello World");
}
console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3





//***************************************

// stack (Primitive) , Heap (Non-Primitive)

let myyt = "abhinavsharma" // uses stack with copy of the datatype

let an = myyt
an = "mlmlml"

console.log(myyt);
console.log(an);

let userOne = {
  email: "user@gmail.com",
  upi:"user@sbi"
}

let userTwo = userOne  // heap worrks on refereence

userTwo.email = "ht@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
