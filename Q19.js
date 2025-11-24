// =========================
// 1. TEMPLATE LITERALS
// =========================

// a)
console.log(`5 + 7 = ${5 + 7}`);

// b) Multi-line string
const message = `
This is line 1
This is line 2
This is line 3
`;
console.log(message);

// c)
const firstName = "John";
const lastName = "Doe";
console.log(`Full Name: ${firstName} ${lastName}`);


// =========================
// 2. ARROW FUNCTIONS & this
// =========================

// a) Convert to arrow function
const square = n => n * n;
console.log(square(5));

// b) Why logs undefined?
// → Arrow functions do NOT have their own 'this'
// → 'this' refers to global object, not 'obj'

const obj1 = {
  value: 50,
  test: () => console.log(this.value)
};
obj1.test(); // undefined

// c) Fix using normal function
const obj2 = {
  value: 50,
  test() {
    console.log(this.value);
  }
};
obj2.test();


// =========================
// 3. REST, SPREAD, COPYING
// =========================

// a) Shallow copy
const product = { name: "Pen", price: 10 };
const copyProduct = { ...product };
console.log(copyProduct);

// b) Merge two objects
const a = { x: 1 };
const b = { y: 2 };
const merged = { ...a, ...b };
console.log(merged);

// c) Function using rest
const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(5, 10, 3));


// =========================
// 4. DESTRUCTURING + OPTIONAL CHAINING
// =========================

// a)
const arr = [10, 20, 30];
const [a1, b1] = arr;
console.log(a1, b1);

// b)
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand);

// c)
const info = {};
console.log(info?.user?.name);  // undefined, no error


// =========================
// 5. SCOPING
// =========================

// a)
for (var i = 0; i < 3; i++) {}
console.log(i); // 3

// b)
for (let j = 0; j < 3; j++) {}
// console.log(j); // ERROR → j not defined

// c)
// const prevents reassignment to protect important values
// ensures values remain constant


// =========================
// 6. TERNARY OPERATOR
// =========================

// a)
let speed = (kmph > 60) ? "Fast" : "Normal";

// b)
let ageStatus = age >= 18 ? "Adult" : "Minor";

// c) Nested ternary
let numStatus =
  n > 0 ? "Positive" :
  n === 0 ? "Zero" :
  "Negative";


// =========================
// 7. SPREAD, REST & ARRAYS
// =========================

// a)
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log(newNums);

// b)
const arrA = ["x", "y"];
const arrB = ["z"];
const combinedArr = [...arrA, ...arrB];
console.log(combinedArr);

// c)
const printNames = (...names) => names;
console.log(printNames("A", "B", "C"));


// =========================
// 8. OBJECT DESTRUCTURING & SHORTHAND
// =========================

// a)
const user = { id: 101, status: "active" };
const { id, status } = user;
console.log(id, status);

// b) Shorthand
const id2 = 101;
const role = "admin";
const user2 = { id2, role };
console.log(user2);

// c)
const username = "Pavani";
const score = 95;

const student = {
  username,
  score,
  greet() {
    console.log(`Hello, ${username}`);
  }
};
student.greet();


// =========================
// 9. TEMPLATE LITERALS (More Practice)
// =========================

// a)
console.log(`Today's date is: ${new Date().toDateString()}`);

// b)
let NAME = "Alex";
let SCORE = 88;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);


// =========================
// 10. ARROW SHORTHANDS
// =========================

// a)
const add = (a, b) => a + b;

// b)
const isAdult = age => age >= 18;

// c)
const double = n => n * 2;


// =========================
// 11. SPREAD OPERATOR
// =========================

// a)
const arrClone = [...nums];
console.log(arrClone);

// b)
const newArr = [100, ...nums];
console.log(newArr);

// c)
const base = { x: 1, y: 2 };
const override = { y: 999 };
const mergedObj = { ...base, ...override };
console.log(mergedObj);


// =========================
// 12. OPTIONAL CHAINING
// =========================

const userX = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};

console.log(userX?.address?.city);  // Bangalore
console.log(userX?.job?.title);     // undefined

// Example preventing runtime error
const data = {};
console.log(data?.profile?.email);  // undefined
