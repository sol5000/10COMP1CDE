    // Random event affecting fish population
    const fishEvent = Math.random();
    if (fishEvent < 0.2) {
        const fishDecrease = Math.floor(Math.random() * 200) + 100;
        fishPop -= fishDecrease;
        console.log(`Fish population decreased by ${fishDecrease}`);
    }
    
    if (fishPop <= 0) {
        console.log("Fish population depleted. Game over!");
        break;
    }
    
    const userI = prompt("Enter the number of boats to send out: ");
    const boats = parseInt(userI);
    
    // Random event affecting boat performance
    const boatEvent = Math.random();
    if (boatEvent < 0.1) {
        const boatDecrease = Math.floor(Math.random() * 10) + 5;
        const fishCaught = boats * (50 - boatDecrease);
        console.log(`Boat performance decreased by ${boatDecrease}`);
        console.log(`Fish caught: ${fishCaught}`);
    } else {
        const fishCaught = boats * 50;
        console.log(`Fish caught: ${fishCaught}`);
    }
    
    fishPop -= fishCaught;
    money += fishCaught * 10;

    console.log(`Fish population: ${fishPop}`);
    console.log(`Money: $${money}`);
    
    // Random event affecting market prices
    const marketEvent = Math.random();
    if (marketEvent < 0.2) {
        const priceIncrease = Math.floor(Math.random() * 5) + 1;
        const sellPrice = fishCaught * (10 + priceIncrease);
        money += sellPrice;
        console.log(`Market prices increased by ${priceIncrease}`);
        console.log(`Fish sold: ${fishCaught}`);
        console.log(`Money: $${money}`);
    } else {
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
    }
    