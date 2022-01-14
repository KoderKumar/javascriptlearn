//Arrays - are variables that holds multiple values

const numbers = new Array(1, 2, 3, 4, 5);
//                        0  1  2  3  4
const fruits = new Array('Banana', 'Kiwi', 'Melons', 'Pineapple');
//                           0        1       2           3

fruits[4] = 'Strawberry';
fruits.push('Cherry');
fruits.unshift('Peach');
fruits.pop();

console.log(numbers);
console.log(fruits);
console.log(fruits[1]);
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('Cherry'))
