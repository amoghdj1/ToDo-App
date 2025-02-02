import { createTodoComponent } from './components/todo.js';

function initApp() {
    console.log("Initializing the ToDo application...");
    createTodoComponent();
}

function main() {
    initApp();
    console.log("ToDo application is running!");
}

main();