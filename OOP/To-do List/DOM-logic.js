const todoList = new TodoList();

const input = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('todoList');

function render() {
    list.innerHTML = '';
    const listDiv = document.querySelector('.list');
    const todos = todoList.getTodos();
    if (todos.length === 0) {
        listDiv.style.display = 'none';
    } else {
        listDiv.style.display = '';
        todos.forEach(todo => {
            const li = document.createElement('li');
            // Create checkbox
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = todo.completed;
            checkbox.className = 'todo-checkbox';
            checkbox.addEventListener('change', (e) => {
                todoList.toggleTodo(todo.id);
                render();
            });

            // Create label for task text
            const label = document.createElement('span');
            label.textContent = todo.title;
            label.className = 'todo-label';

            // Remove button
            const removeBtn = document.createElement('button');
            removeBtn.textContent = '❌';
            removeBtn.className = 'remove-btn';
            removeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                todoList.removeTodo(todo.id);
                render();
            });

            li.appendChild(checkbox);
            li.appendChild(label);
            li.appendChild(removeBtn);
            list.appendChild(li);
        });
    }
}

addBtn.addEventListener('click', () => {
    const title = input.value.trim();
    if (title) {
        todoList.addTodo(title);
        input.value = '';
        render();
    }
});

render();