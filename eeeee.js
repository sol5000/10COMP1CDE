//1.6
const prompt = require('prompt-sync')();


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
