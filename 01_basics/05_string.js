const name = "abhinav"
const repoCount = 50
const gamName = new String('abhinav-asvs')  // different way to initialize string and its an object
// console.log(name + repoCount + "Value")

console.log(`Hello my name is ${name} and my repo count is 
${repoCount}`);

//console.log(gamName.length);
//console.log(gamName.toUpperCase());
//console.log(gamName.[0]);
//console.log(gamName.__proto__);


console.log(gamName.charAt(2));
console.log(gamName.indexOf('h'));


const newString = gamName.substring(0,4)
console.log(newString);

const anotherString = gamName.slice(-11,4) // it can work on negative values
console.log(anotherString);


const newStringOne = "  abhinav  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'));

console.log(url.includes('siunder'));

console.log(gamName.split('-'));