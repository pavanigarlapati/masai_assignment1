// Function to display a greeting message
function displayMessage(name) {
    console.log(`Hello, ${name}!`);
}

// Function that simulates getting user input and then calls a callback
function getUserInput(callback) {
    console.log("Fetching username...");

    setTimeout(() => {
        const username = "Alice";   // Simulated fetched value
        callback(username);         // Calling the callback with the username
    }, 1000);
}

// Calling getUserInput with displayMessage as callback
getUserInput(displayMessage);
