let score = "33abc" //now abc has been added

// cont {score} = req.body // from user hence we don't know whether it is a string or a number different from line 1 where it is clear that it is an integer


console.log(typeof score); // method 1
console.log(typeof (score)); //method 2 to find typeof of a variable


let valueInNumber = Number(score)//convert the datatype of that to integer or number from any other datatype

console.log(typeof valueInNumber);
console.log(valueInNumber); // here irrespective of showing the above as number but the value of this will come NaN ye js ki dikt h

// "33" => 33
// "33abc" => NaN
// true => 1; false =>0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
 // 1 => true; 0=> false
 // "" => false
 // "abhinav" => true

 let someNumber = 33

 let stringNumber = String(someNumber)
 console.log(stringNumber);
 console.log(typeof stringNumber);