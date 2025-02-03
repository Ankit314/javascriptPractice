const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;

rl.question("Enter a number: ", (input) => {
    n = parseInt(input);

    do {
        console.log("Current number:", n);
        n--;  // Modify the loop condition as needed
    } while (n > 0);

    rl.close(); // Close the readline interface after input
});
