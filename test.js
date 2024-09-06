const prompt = require('prompt-sync')();

const marks = [];
let input = prompt('Enter test mark (or "end" to finish): ');

while (input !== 'end') {
    marks.push(parseInt(input));
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
