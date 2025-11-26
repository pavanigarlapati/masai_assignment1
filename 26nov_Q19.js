// 1. Global variable
let age = 20;

// 2. Function to display age
function displayAge() {
    console.log("Current Age:", age);
}

// 3. Function to change age
function changeAge() {
    age = 25;   // updating global variable
    console.log("Age updated inside function to:", age);
}

// 4. Calling the functions
displayAge();   // Output: Current Age: 20
changeAge();    // Output: Age updated inside function to: 25
displayAge();   // Output: Current Age: 25
