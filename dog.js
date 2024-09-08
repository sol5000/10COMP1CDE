const prompt = require('prompt-sync')();


function calculateHumanAge(dogAge) {
    let humanAge = 0;

    if (dogAge === 1) {
        humanAge = 15;
    } else if (dogAge === 2) {
        humanAge = 24;
    } else {
        humanAge = 24 + (dogAge - 2) * 4;
    }

    return humanAge;
}

function main() {
    let userInput = prompt("Enter your dog's age (in years):");

    // Validate user input
    if (isNaN(userInput) || userInput <= 0) {
        console.log("Invalid input. Please enter a valid age.");
        return;
    }

    let dogAge = parseInt(userInput);
    let humanAge = calculateHumanAge(dogAge);

    console.log("Your dog's age in human years is: " + humanAge);
}

main();