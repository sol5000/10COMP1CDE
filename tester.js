const prompt = require('prompt-sync')();


// Initialize variables
let fishPopulation = 1000;
let money = 0;
let day = 1;

// Main simulation loop
while (day <= 30) {
    console.log(`Day ${day}`);
    
    // Check fish population
    if (fishPopulation <= 0) {
        console.log("Fish population depleted. Game over!");
        break;
    }
    
    // Ask user for input
    const userInput = prompt("Enter the number of boats to send out: ");
    const numBoats = parseInt(userInput);
    
    // Calculate fish caught
    const fishCaught = numBoats * 50;
    
    // Update fish population and money
    fishPopulation -= fishCaught;
    money += fishCaught * 10;
    
    // Print results
    console.log(`Fish caught: ${fishCaught}`);
    console.log(`Fish population: ${fishPopulation}`);
    console.log(`Money: $${money}`);
    
    // Increment day
    day++;
}

console.log("Simulation ended.");