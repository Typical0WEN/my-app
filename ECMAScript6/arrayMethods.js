const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2); // map

const evens = numbers.filter(num => num % 2 === 0); // filter

const sum = numbers.reduce((total, num) => total + num, 0); //reduce

console.log(doubled, evens, sum);
