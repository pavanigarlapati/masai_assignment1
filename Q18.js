// a) Scoping Output
if (true) {
  let x = 10;
  var y = 20;
}

console.log(y); // 20
// console.log(x); // ReferenceError: x is not defined



// b) Optional Chaining Example
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

console.log(profile.user?.details?.email);  // "test@mail.com"
console.log(profile.user?.details?.phone);  // undefined, no error



// c) Optional Chaining Preventing Error
const data = {
  product: {
    name: "Laptop"
  }
};

// Safe access using optional chaining
console.log(data.product?.specs?.weight); // undefined, no crash
