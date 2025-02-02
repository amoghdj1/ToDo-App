import { addTodo } from '../utils/helpers.js';

export function createTodoComponent() {
    const app = document.getElementById('app');
    const input = document.createElement('input');
    const addButton = document.createElement('button');
    const todoList = document.createElement('ul');

    addButton.textContent = 'Add';

    addButton.addEventListener('click', () => {
        const todoText = input.value.trim();
        if (todoText) {
            addTodo(todoText, todoList);
            input.value = '';
        }
    });

    app.appendChild(input);
    app.appendChild(addButton);
    app.appendChild(todoList);
}