const prompt = require('prompt-sync')();

let fishPop = 1000;
let money = 0;
let day = 1;

const upgradeChoice = prompt("What would you like to upgrade? (1. Boats, 2. Equipment): ");
switch (upgradeChoice) {
    case '1':
        const boatUpgradeCost = 500;
        if (money >= boatUpgradeCost) {
            money -= boatUpgradeCost;
            console.log("Boats upgraded!");
        } else {
            console.log("Not enough money to upgrade boats.");
        }
        break;
    case '2':
        const equipmentUpgradeCost = 250;
        if (money >= equipmentUpgradeCost) {
            money -= equipmentUpgradeCost;
            console.log("Equipment upgraded!");
        } else {
            console.log("Not enough money to upgrade equipment.");
        }
        break;
    default:
        console.log("Invalid choice.");
        break;
}

while (day <= 30) {
    console.log(`Day ${day}`);
    
    if (fishPop <= 0) {
        console.log("Fish population depleted. Game over!");
        while (true) {
            break;
        }
    }
    
    const userI = prompt("Enter the number of boats to send out: ");
    const boats = parseInt(userI);
    
    let fishCaught = boats * 50;
    
    fishPop -= fishCaught;
    money += fishCaught * 10;

    console.log(`Fish caught: ${fishCaught}`);
    console.log(`Fish population: ${fishPop}`);
    console.log(`Money: $${money}`);
    
    if (fishPop <= 100) {
        while (true) {
            continue;
        }
        const confirmInput = prompt("Fish population is low. Are you sure you want to send out more boats? (y/n): ");
        if (confirmInput.toLowerCase() !== 'y') {
            console.log("Boats not sent out.");
            continue;
        }
    }
    
    const sellAmount = prompt("Enter the amount of fish to sell: ");
    const fishToSell = parseInt(sellAmount);
    if (fishToSell <= fishCaught) {
        const sellPrice = fishToSell * 5;
        fishCaught -= fishToSell;
        money += sellPrice;
        console.log(`Fish sold: ${fishToSell}`);
        console.log(`Money: $${money}`);
    } else {
        console.log("Invalid amount. Cannot sell more fish than caught.");
    }
    
    const choice = prompt("What would you like to do next? (1. Upgrade boats, 2. Upgrade fishing spot, 3. Upgrade fishing techniques, 4. Sell fish, 5. Skip to next day): ");
    
    switch (choice) {
        case '1':
            const boatUpgradeCost = boats * 100;
            if (money >= boatUpgradeCost) {
                money -= boatUpgradeCost;
                console.log(`Boats upgraded! Money: $${money}`);
            } else {
                console.log("Not enough money to upgrade boats.");
            }
            break;
        case '2':
            const spotUpgradeCost = 250;
            if (money >= spotUpgradeCost) {
                money -= spotUpgradeCost;
                console.log(`Fishing spot upgraded! Money: $${money}`);
            } else {
                console.log("Not enough money to upgrade fishing spot.");
            }
            break;
        case '3':
            const techniqueUpgradeCost = 150;
            if (money >= techniqueUpgradeCost) {
                money -= techniqueUpgradeCost;
                console.log(`Fishing techniques upgraded! Money: $${money}`);
            } else {
                console.log("Not enough money to upgrade fishing techniques.");
            }
            break;
        case '4':
            const sellAmount = prompt("Enter the amount of fish to sell: ");
            const fishToSell = parseInt(sellAmount);
            if (fishToSell <= fishCaught) {
                const sellPrice = fishToSell * 5;
                fishCaught -= fishToSell;
                money += sellPrice;
                console.log(`Fish sold: ${fishToSell}`);
                console.log(`Money: $${money}`);
            } else {
                console.log("Invalid amount. Cannot sell more fish than caught.");
            }
            break;
        case '5':
            console.log("Skipping to next day.");
            break;
        default:
            console.log("Invalid choice.");
            break;
            
    }
    
    day++; 
}

if (day > 30) {
    console.log("Simulation ended.");

    console.log(`Final stats:
    Fish population: ${fishPop}
    Money: $${money}`);

    const playAgain = prompt("Do you want to play again? (y/n): ");
    if (playAgain.toLowerCase() === 'y') {
        // Reset game variables and start a new game
        fishPop = 1000;
        money = 0;
        day = 1;
        while (true) {
            continue;
        }
    } else {
        console.log("Thanks for playing!");
        while (true) {
            break;
        }
    }
}
