// let: let it to reassign
// const: do not allow it to reassign.

let money = 25;
money = 35;
console.log(money);

const bird = 'Jaan Pakhi';
const message = bird + ' potas potas';
console.log(message);

const numbers = [23, 455, 66, 77, 788,];
// reassign is not allow
// numbers = [12, 23, 44, 66, 77,];
numbers.push(222);
numbers[1] = 500;
console.log(numbers);

const student = {
    name: 'Mofiz',
    address: 'Rongpur'
}
// student = {name: 'Mofazzal'}
student.name = 'Mofazzal';

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    sum = sum + number;
}
console.log(sum);
