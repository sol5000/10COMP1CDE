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