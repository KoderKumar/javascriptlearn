const todos = [
//          0
    {
        id: 1,
        text: 'Code',
        isCompleted: true
    },
//          1
    {
        id: 2,
        text: 'Eat',
        isCompleted: true
    },
//          2
    {
        id: 3,
        text: 'Sleep',
        isCompleted: false
    },
//          3
    {
        id: 4,
        text: 'Repeat',
        isCompleted: true
    }
];
console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);

console.log(todoJSON);

// FOR LOOPS
//It is saying let i = 0 and if i is less or greater then 10 add 1 to it.
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);    
}

for (let todo of todos) {
    console.log(todo);
    console.log(todo.text);
    console.log(todo.isCompleted);
}

//While loop
let i = 0
;while (i < 10) {
    console.log(`While loop number: ${i}`);    
    i++;
}