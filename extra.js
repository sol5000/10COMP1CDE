const prompt = require('prompt-sync')();

const electricityUsage = parseFloat(prompt("What is your monthly electricity usage in kwh? "));
const milesDriven = parseFloat(prompt("How many miles do you drive per month? "));
const carbonFootprint = electricityUsage * 0.9 + milesDriven * 0.4;

console.log("Your estimated carbon footprint is: " + carbonFootprint.toFixed(2) + " metric tons per year.");

if (carbonFootprint > 10) {
    console.log("Your carbon footprint is VERY HIGH. YOU SHOULD CONSIDER USING PUBLIC TRANSPORT AND USING LESS ELECTRICITY.");
} else if (carbonFootprint > 5) {
    console.log("Your carbon footprint is mid. Try being more energy efficient.");
} else {
    console.log("Your carbon footprint is relatively low. Great.");
}

