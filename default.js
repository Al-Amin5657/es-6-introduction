// function add(num1, num2) {
//     console.log(num1, num2);
//     num2 = num2 || 0;
//     // if (num2 === undefined) {
//     //     num2 = 0;
//     // }
//     const total = num1 + num2;
//     return total;
// }
function add(first, second = 0) {
    const total = first + second;
    return total;
}
const result = add(10);
console.log(result);

function fullName(first, last = 'Chowdhury') {
    const name = first + ' ' + last;
    return name;
}
const name = fullName('Aslam');
console.log(name);