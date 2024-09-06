const prompt = require('prompt-sync')();

let fishPop = 1000;
let money = 0;
let day = 1;

while (day <= 30) {
    console.log(`Day ${day}`);
    
    if (fishPop <= 0) {
        console.log("Fish population depleted. Game over!");
        break;
    }
    
    const userI = prompt("Enter the number of boats to send out: ");
    const Boats = parseInt(userI);
    
    const fishCaught = Boats * 50;
    
    fishPop -= fishCaught;
    money += fishCaught * 10;

    console.log(`Fish caught: ${fishCaught}`);
    console.log(`Fish population: ${fishPop}`);
    console.log(`Money: $${money}`);
    
    if (fishPop <= 100) {
        const confirmInput = prompt("Fish population is low. Are you sure you want to send out more boats? (y/n): ");
        if (confirmInput.toLowerCase() !== 'y') {
            console.log("Boats not sent out.");
            continue;
        }
    }
    
    day++;
}

console.log("Simulation ended.");