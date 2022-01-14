//Constructor object
function Person(firstName, lastName, dob) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.dob = new Date(dob);
}
Person.prototype.getBirthYear = function(){
	return this.dob.getFullYear();
}

Person.prototype.getFullName = function(){
	return `${this.firstName} ${this.lastName}`;
}

//Instantiate object
const person1 = new Person('Arth', 'Awasthi', '11-11-2005');
const person2 = new Person('Arth', 'Kumar', '11-11-2005');

console.log(person1.firstName);
console.log(person1.lastName);

console.log(person1);
console.log(person2.getFullName());
