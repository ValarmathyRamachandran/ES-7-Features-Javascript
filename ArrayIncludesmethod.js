//Array includes() method to check if an element is in an array or not.

let tata = {name: 'Tata' }, 
toyota = { name: 'Toyota'},
ford = {name: 'Ford'}

let cars = [ford, toyota];

console.log(cars.includes(ford)); // true
console.log(cars.includes(tata)); // false

const x = [ 'animals', 'cows', 'ducks' ]
console.log( x.includes('cows') ); //true

const symbol = Symbol('symbol');
const array = ['Hi',200,0,symbol,null];
array.includes('Hi'); // true
array.includes(0); // true
array.includes(200); //true
array.includes(null); //true
array.includes(symbol); //true


