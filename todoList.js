// Simple Todo List using arrays
let todos = [];

function addTodo(todo) {
    todos.push(todo);
}

function removeTodo(index) {
    if (index >= 0 && index < todos.length) {
        todos.splice(index, 1);
    }
}

function displayTodos() {
    console.log('Todo List:');
    todos.forEach((todo, index) => {
        console.log(`${index + 1}. ${todo}`);
    });
}

// Example usage:
addTodo('Learn JavaScript');
addTodo('Build a simple web app');
addTodo('Practice coding exercises');
displayTodos();

removeTodo(1);
console.log('\nAfter removing item 2:');
displayTodos();
