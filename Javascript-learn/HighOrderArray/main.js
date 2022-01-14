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

//forEach, map, filter

//forEach

todos.forEach(function(todo) {
    console.log(todo.text);
});

//map

const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText);

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
});

console.log(todoCompleted);


const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})

console.log(todoCompleted);


