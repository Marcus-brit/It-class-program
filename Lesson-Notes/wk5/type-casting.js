// Type Casting

const a = "5";
const b = "10";

console.log(a + b);


const c = parseInt(a) + b;
console.log(c);

//implicit casting [This is done automatically by the programming language]
let x = 5;
let y = 2.5;
let z = x + y;
console.log(z);

// Explicit Casting [This is done manually by the programmer]
let u = 9;
let i = Number(u); // Explicit casting With the Number function
console.log(i);

// Real-World Example
const maxScore = 500;
const UserScore = 432;
// Convert UserScore to number (it alredy is, but ensures float division)
const percentage = (Number(UserScore) / maxScore) * 100.0;

//console.log("User's Percentage is: + percentage.toFixed(3))")


