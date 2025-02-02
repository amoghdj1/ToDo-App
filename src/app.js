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

document.addEventListener('DOMContentLoaded', () => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const sectionlessList = document.getElementById('sectionless-list');
    const sectionsList = document.getElementById('sections-list');
    const addTodoButton = document.getElementById('add-todo-button');
    const addTodoModal = document.getElementById('add-todo-modal');
    const closeButton = document.querySelector('.close-button');
    const addTodoForm = document.getElementById('add-todo-form');
    const parentTaskSelect = document.getElementById('parent-task');

    function renderTodos() {
        sectionlessList.innerHTML = '';
        sectionsList.innerHTML = '';
        const sections = {};

        todos.forEach(todo => {
            if (todo.parentTask) {
                if (!sections[todo.parentTask]) {
                    sections[todo.parentTask] = [];
                }
                sections[todo.parentTask].push(todo);
            } else {
                const li = document.createElement('li');
                li.textContent = todo.title;
                sectionlessList.appendChild(li);
            }
        });

        Object.keys(sections).forEach(section => {
            const sectionItem = document.createElement('li');
            sectionItem.textContent = section;
            const sectionList = document.createElement('ul');
            sections[section].forEach(todo => {
                const li = document.createElement('li');
                li.textContent = todo.title;
                sectionList.appendChild(li);
            });
            sectionItem.appendChild(sectionList);
            sectionsList.appendChild(sectionItem);
        });
    }

    function populateParentTaskOptions() {
        parentTaskSelect.innerHTML = '<option value="">None</option>';
        todos.forEach(todo => {
            const option = document.createElement('option');
            option.value = todo.title;
            option.textContent = todo.title;
            parentTaskSelect.appendChild(option);
        });
    }

    addTodoButton.addEventListener('click', () => {
        addTodoModal.style.display = 'block';
        populateParentTaskOptions();
    });

    closeButton.addEventListener('click', () => {
        addTodoModal.style.display = 'none';
    });

    addTodoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newTodo = {
            title: e.target.title.value,
            detail: e.target.detail.value,
            dueDate: e.target['due-date'].value,
            parentTask: e.target['parent-task'].value
        };
        todos.push(newTodo);
        localStorage.setItem('todos', JSON.stringify(todos));
        renderTodos();
        addTodoModal.style.display = 'none';
    });

    renderTodos();
});