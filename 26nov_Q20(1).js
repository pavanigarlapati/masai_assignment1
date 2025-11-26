// Question 1: Closure-Based Counter Implementation

function createCounter() {
    let count = 0; // private variable

    return {
        increment: function () {
            count++;
            console.log("Current count:", count);
        },
        decrement: function () {
            count--;
            console.log("Current count:", count);
        },
        getCount: function () {
            console.log("Current count:", count);
        }
    };
}

// Example Usage:
const counter = createCounter();
counter.increment(); // Output: Current count: 1
counter.increment(); // Output: Current count: 2
counter.decrement(); // Output: Current count: 1
