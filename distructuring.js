const fish = {
    name: 'King fish',
    address: 'Chandpur',
    color: 'silver',
    phone: '01924059973',
    price: 4000
}
const { name, phone, price } = fish;
console.log(name, phone, price);

// array destructuring
const [first, second] = [44, 55, 66, 77, 88];
console.log(first);

const nayoks = ['sakib', 'bappi', 'raj'];
const [king, lost, notun] = nayoks;
console.log(king);

function getNames() {
    return ['Alim', 'Halim'];
}

const [baba, chacha] = getNames();
console.log(chacha, baba);


