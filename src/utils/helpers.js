export function addTodo(todo, todoList) {
    const todoItem = document.createElement('li');
    const title = document.createElement('span');
    const detail = document.createElement('span');
    const dueDate = document.createElement('span');
    const removeButton = document.createElement('button');

    title.textContent = `Title: ${todo.title}`;
    detail.textContent = `Detail: ${todo.detail}`;
    dueDate.textContent = `Due: ${todo.dueDate}`;
    removeButton.textContent = 'Remove';

    removeButton.addEventListener('click', () => {
        todoList.removeChild(todoItem);
    });

    todoItem.appendChild(title);
    todoItem.appendChild(detail);
    todoItem.appendChild(dueDate);
    todoItem.appendChild(removeButton);
    todoList.appendChild(todoItem);
}