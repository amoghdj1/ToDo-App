import { addTodo } from '../utils/helpers.js';

export function createTodoComponent() {
    const app = document.getElementById('app');
    const form = document.createElement('form');
    const titleInput = document.createElement('input');
    const detailInput = document.createElement('input');
    const dueDateInput = document.createElement('input');
    const addButton = document.createElement('button');
    const todoList = document.createElement('ul');

    titleInput.placeholder = 'Title';
    detailInput.placeholder = 'Detail';
    dueDateInput.placeholder = 'Due Date (DD/MM/YY)';
    addButton.textContent = 'Add';

    form.appendChild(titleInput);
    form.appendChild(detailInput);
    form.appendChild(dueDateInput);
    form.appendChild(addButton);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const todoTitle = titleInput.value.trim();
        const todoDetail = detailInput.value.trim();
        const todoDueDate = dueDateInput.value.trim();
        if (todoTitle && todoDetail && todoDueDate) {
            addTodo({ title: todoTitle, detail: todoDetail, dueDate: todoDueDate }, todoList);
            titleInput.value = '';
            detailInput.value = '';
            dueDateInput.value = '';
        }
    });

    app.appendChild(form);
    app.appendChild(todoList);
}