const add = (first, second) => first + second;
const getFullName = (first, last) => first + ' ' + last;

const multiply = (a, b) => a * b;
const result = multiply(6, 7);
// console.log(result);
const addAll = (a, b, c, d, e, f, g) => a * b * c * d * e * f * g;
// no parameter arrow function
const getPie = () => 3.14;
// one parameter
const doubleIt = (num) => num * 2;
// One parameter simple version
const fiveTimes = num => num * 5;

// multi line arrow function
// if you want tot return something, use return
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum + secondSum;
    const result = multiplyResult / 2;
    return result;
}