const user = { name: "Owen", age: 16, country: "Nigeria" };

const { name, age } = user;
console.log(`${name} is ${age} years old.`);

let nums = [1,2,3,4,5]

let[first, second,...rest]= nums
console.log(rest)
