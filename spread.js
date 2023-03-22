const max = Math.max(12, 34, 68, 90);
// console.log(max);
const numbers = [34, 56, 78, 95];
const largest = Math.max(...numbers); // spread operator (...)
console.log(largest);
numbers.push(55);
const number2 = [...numbers];

number2.push(999);
console.log(numbers);
console.log(number2);

const number3 = [...numbers];
const number4 = [45, 78, ...numbers, 900];
console.log(number4)
