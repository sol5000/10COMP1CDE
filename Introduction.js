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
console.log(`The temperature in Celsius is: ${celsius.toFixed(2)`);

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
*/
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