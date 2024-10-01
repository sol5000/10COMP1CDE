const prompt = require('prompt-sync')();
/*
//1.1
let name = prompt('What is your name? ');
console.log(`Hello ${name}!`);

//1.2
let num1 = parseFloat(prompt('Enter the first number: '));
let num2 = parseFloat(prompt('Enter the second number: '));
let average = (num1 + num2) / 2;
console.log(`The average is: ${average.toFixed(2)}`);

//1.3
let base = parseFloat(prompt('Enter the base of the triangle: '));
let height = parseFloat(prompt('Enter the height of the triangle: '));
let area = (base * height) / 2;
console.log(`The area of the triangle is: ${area.toFixed(2)}`);

//1.4
let age = parseInt(prompt('Enter your age: '));
let dogYears = age * 7;
console.log(`Your age in dog years is: ${dogYears}`);

//1.5
let num1 = parseFloat(prompt('Enter the first number: '));
let num2 = parseFloat(prompt('Enter the second number: '));
let modulus = num1 % num2;
console.log(`The remainder when ${num1} is divided by ${num2} is: ${modulus}`);

//1.6
let fahrenheit = parseFloat(prompt('Enter the temperature in Fahrenheit: '));
let celsius = (fahrenheit - 32) * 5 / 9;

if(fahrenheit < -459.67){
    console.log('How is this even possible');
} else if(fahrenheit < 32){
    console.log('It is freezing');
    
} else if(fahrenheit > 98.6 && fahrenheit < 104){
    console.log('You might be sick');
} else if(fahrenheit > 104){
    console.log('Losing brain cells rn 💀');
} else {
    console.log('ok???');
}
console.log(`The temperature in Celsius is: ${celsius.toFixed(2)}`);

//2.1
let x = parseFloat(prompt('Enter a number: '));
if (x > 10) {
    console.log('x is greater than 10.');
}

//2.2
let x = parseFloat(prompt('Enter a number: '));
if (x > 10) {
    console.log('x is greater than 10.');
} else {
    console.log('x is not greater than 10.');
}

//2.3
let grade = parseFloat(prompt('Enter the grade: '));

if (grade >= 70) {
    console.log('A');
} else if (grade >= 60) {
    console.log('B');
} else if (grade >= 50) {
    console.log('C');
} else if (grade >= 40) {
    console.log('D');
} else {
    console.log('F');
}

//2.4
let age = parseInt(prompt('Enter your age: '));

if (age >= 18) {
    let hasLicense = prompt('Do you have a driver\'s license? (yes/no) ');
    if (hasLicense === 'yes' || hasLicense === 'Yes') {
        console.log('You can drive.');
    } else {
        console.log('You are old enough to drive, you should get a license.');
    }
} else {
    console.log('You are not old enough to drive.');
}

//2.5
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

//3.1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//3.2
let n = 0;
while (n <= 10) {
    console.log(n);
    n++;
}

//3.3
const prompt = require('prompt-sync')();

let answer;
do {
    answer = prompt("Are you finished yet? ");
} while (answer.toLowerCase() !== "yes");

//3.4
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        const result = i * j;
        console.log(`${i} x ${j} = ${result}`);
    }
}

//3.5
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

//4.1
const prompt = require('prompt-sync')();

const fruits = ['Apple', 'Banana', 'Cherry'];

console.log(fruits[0], fruits[fruits.length - 1]);
console.log(fruits.length);

fruits.push('Orange');
fruits.shift();
fruits.unshift('Strawberry');

const bananaIndex = fruits.indexOf('Banana');
fruits.splice(bananaIndex, 1);

const vegetables = ['Carrot', 'Potato'];
const mergedArray = fruits.concat(vegetables);

mergedArray.sort();

console.log(mergedArray);

//4.2
const prompt = require('prompt-sync')();

const marks = [];
let input = prompt('Enter test mark (or "end" to finish): ');

while (input !== 'end') {
    marks.push(Number(input));
    input = prompt('Enter test mark (or "end" to finish): ');
}

let sum = 0;
let lowest = marks[0];
let highest = marks[0];

for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
    
    if (marks[i] < lowest) {
        lowest = marks[i];
    }
    
    if (marks[i] > highest) {
        highest = marks[i];
    }
}

const average = sum / marks.length;

console.log('Average mark:', average);
console.log('Lowest mark:', lowest);
console.log('Highest mark:', highest);

//5.1
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

//5.2
function generateFake() {
    const subjects = ["Donald Trump", "Darth Vader", "Elon Musk", "The Queen"];
    const actions = ["gets captured by aliens", "steps on a frog", "jumps into a ravine", "discovers a black hole"];
    const objects = ["in the White House", "on Coruscant", "near the titanic", "during prime time"];

    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    const randomObject = objects[Math.floor(Math.random() * objects.length)];

    return `${randomSubject} ${randomAction} ${randomObject}`;
}

console.log(generateFake());

//QUIZ
const prompt = require('prompt-sync')();

let score = 0;
const quiz = [
    { question: "Where am i from", answer: "hong kong" },
    { question: "Where did I go during summer?", answer: "switzerland" },
    { question: "Where did I go during summer 2?", answer: "germany" },
    { question: "True or False: I have traveled to more than 5 countries.", answer: "true" },
    { question: "What language am i learning", answer: "german" },
    { question: "Is Michael bernard bear", answer: "true" },
    { question: "What street did i see in london", answer: "Hollen" },
    { question: "How many places did i go to over the summer", answer: "15" },
    { question: "hello", answer: "hello" },    
];

quiz.forEach(({ question, answer }, index) => {
    const userAnswer = prompt(`${index + 1}. ${question}\nYour answer: `);
    if (userAnswer.toLowerCase() === answer.toLowerCase()) {
        console.log("Correct!\n");
        score++;
    } else {
        console.log(`Incorrect! The correct answer is: ${answer}\n`);
    }
});

console.log(`Your total score is: ${score} out of ${quiz.length}`);

*/