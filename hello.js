const prompt = require('prompt-sync')();
const electricityUsage = parseFloat(prompt("What is your monthly electricity usage in kWh? "));
const milesDriven = parseFloat(prompt("How many miles do you drive per month? "));
const dietType = prompt("What is your diet type? (vegan/vegetarian/omnivore) ");
const showerTime = parseFloat(prompt("How many minutes do you spend in the shower per day? "));
const recyclingFrequency = parseFloat(prompt("How often do you recycle? (times per week) "));
const paperUsage = parseFloat(prompt("How many sheets of paper do you use per day? "));

const carbonFootprint = electricityUsage * 0.9 + milesDriven * 0.4 + showerTime * 0.02 + recyclingFrequency * 0.1 + paperUsage * 0.05;

console.log("Your estimated carbon footprint is: " + carbonFootprint.toFixed(2) + " metric tons per year.");

if (carbonFootprint > 10) {
    console.log("Your carbon footprint is VERY HIGH.");
} else if (carbonFootprint > 5) {
    console.log("Your carbon footprint is mid. Try being more energy efficient.");
} else {
    console.log("Your carbon footprint is relatively low. Great.");
}

if (carbonFootprint > 5) {
    if (dietType === "vegan") {
        console.log("Consider adopting a vegan diet to further reduce your carbon footprint.");
    } else if (dietType === "vegetarian") {
        console.log("Consider adopting a vegetarian diet to lower your carbon footprint.");
    } else {
        console.log("Reducing your meat consumption can help reduce your carbon footprint.");
    }
} else if (carbonFootprint > 10) {
    if (dietType === "vegan") {
        console.log("Additionally, adopting a vegan diet can significantly reduce your carbon footprint.");
    } else if (dietType === "vegetarian") {
        console.log("Additionally, adopting a vegetarian diet can help lower your carbon footprint.");
    } else {
        console.log("Additionally, reducing your meat consumption can have a positive impact on your carbon footprint.");
    }
} else {
    if (dietType === "vegan") {
        console.log("Your vegan diet is already helping to minimize your carbon footprint.");
    } else if (dietType === "vegetarian") {
        console.log("Your vegetarian diet is contributing to a lower carbon footprint.");
    } else {
        console.log("Consider reducing your meat consumption for a further reduction in carbon footprint.");
    }
}