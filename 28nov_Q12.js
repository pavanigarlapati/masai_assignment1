function timer(duration, onComplete) {
    console.log(`Timer started for ${duration} ms...`);

    setTimeout(() => {
        const message = `Timer of ${duration} ms finished`;
        onComplete(message);   
    }, duration);
}

// Callback function to handle completion
function handleComplete(msg) {
    console.log(msg);
}

// Example usage
timer(3000, handleComplete);   // 3-second timer
