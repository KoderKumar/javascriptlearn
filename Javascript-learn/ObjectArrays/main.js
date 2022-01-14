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



