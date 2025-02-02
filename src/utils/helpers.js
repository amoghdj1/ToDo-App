export function addTodo(todoText, todoList) {
    const todoItem = document.createElement('li');
    const removeButton = document.createElement('button');

    todoItem.textContent = todoText;
    removeButton.textContent = 'Remove';

    removeButton.addEventListener('click', () => {
        todoList.removeChild(todoItem);
    });

    todoItem.appendChild(removeButton);
    todoList.appendChild(todoItem);
}