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