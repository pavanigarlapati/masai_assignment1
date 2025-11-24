// a) isEven Arrow Function
const isEven = n => n % 2 === 0;
console.log(isEven(10)); // true
console.log(isEven(7));  // false

// b) Ternary Operator for Pass/Fail
const marks = 40;
const result = marks >= 35 ? "Pass" : "Fail";
console.log(result);

// c) greet Arrow Function using Ternary
const greet = name => `Hello, ${name ? name : "Guest"}`;
console.log(greet("Pavani")); // Hello, Pavani
console.log(greet());         // Hello, Guest




if (marks >= 35) {
  result = "Pass";
} else {
  result = "Fail";
}





const result = marks >= 35 ? "Pass" : "Fail";
