const person = {
    firstName: 'Arth',
    lastName: 'Awasthi',
    Age: 14,
    Hobbies: ['Coding', 'Basketball', 'Eating'],
    address: {
        State: 'UP',
        City: 'Noida',
        Sector: 134,
    }
}

console.log(person);
console.log(person.firstName);
console.log(person.firstName, person.lastName);
console.log(person.Hobbies[1]);
console.log(person.address.City);

const{firstName, lastName, address: { City }} = person;

console.log(firstName);
console.log(lastName);
console.log(City);

person.email = 'coderarth@gmail.com';
console.log(person);

