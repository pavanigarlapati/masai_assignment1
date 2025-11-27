const readline = require("readline");

// Setup input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask user for countdown seconds
rl.question("Enter number of seconds for countdown: ", (input) => {
    let time = Number(input);

    if (isNaN(time) || time <= 0) {
        console.log("Please enter a valid positive number.");
        rl.close();
        return;
    }

    console.log(`Countdown started for ${time} seconds...`);
    console.log('Press "s" anytime to stop the countdown.\n');

    // Start countdown using setInterval
    const timer = setInterval(() => {
        console.log(`Remaining: ${time} seconds`);
        time--;

        if (time < 0) {
            clearInterval(timer);
            console.log("Countdown Complete!");
            rl.close();
        }
    }, 1000);

    // Detect keypress after a slight delay using setTimeout
    setTimeout(() => {
        process.stdin.on("data", (key) => {
            if (key.toString().trim() === "s") {
                clearInterval(timer);
                console.log("Countdown stopped manually!");
                rl.close();
            }
        });
    }, 500); // delay for key detection
});
